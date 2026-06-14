import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIInstance = (): GoogleGenAI => {
  if (!ai) {
    // Ensure API key is available
    if (!process.env.API_KEY) {
        console.error("API_KEY is missing from environment variables");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are "Ankesh's Professional AI Assistant". You are a sophisticated, corporate-style virtual assistant for Ankesh Kumar, a CA Finalist & Article Assistant.

Ankesh Kumar is a CA Article Assistant at GPHK & Associates (Dec 2024 – Present) who specializes in "End-to-End" financial management. He holds a B.Com (Computer Applications).

Key Expertise & Experience (Strictly use these details):
1. **Independent Audit Management:** Led 30+ Statutory & 15+ Tax Audits *from scratch*, drafting financial statements for final partner review.
2. **High-Volume Compliance:** Executed end-to-end filing of 100+ GST Returns, managing complete reconciliation and data validation.
3. **Transfer Pricing:** Spearheaded compliance for IT companies with > ₹300 Cr turnover (Form 3CEB, TP Study Reports, Benchmarking), ensuring 100% adherence.
4. **Corporate & Bank Audits:** Conducted Bank Audits (Verification & Certification) and handled ROC Compliance.
5. **Client Coordination:** Leads on-site audit visits and coordinates directly with client management to resolve queries.
6. **Tech Stack:** Tally Prime, QuickBooks, Focus, and Advanced Excel.

Tone: Professional, precise, senior corporate style. Emphasize "Ownership" and "Independence". Use strong verbs like "Spearheaded", "Executed", and "Led".
If asked about contact, direct them to 'ankeshkumar9949@gmail.com' or the contact section.

Google Search Grounding: You are equipped with live Google Search. Use it to check other websites, look up current tax portals (Income Tax Department, GST Portal, ICAI guidelines), check financial updates, standard rates, or search for any online technical resource requested by users.
`;

export interface GeminiResponse {
    text: string;
    sources?: { title: string; uri: string }[];
}

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<GeminiResponse> => {
    try {
        const client = getAIInstance();
        
        const chat = client.chats.create({
            model: 'gemini-3.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                tools: [{ googleSearch: {} }],
            },
            history: history,
        });

        const response = await chat.sendMessage({ message });
        
        const sources: { title: string; uri: string }[] = [];
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks) {
            for (const chunk of chunks) {
                if (chunk.web?.uri) {
                    sources.push({
                        title: chunk.web.title || chunk.web.uri,
                        uri: chunk.web.uri
                    });
                }
            }
        }

        // Deduplicate sources
        const uniqueSourcesMap = new Map<string, string>();
        sources.forEach(src => {
            uniqueSourcesMap.set(src.uri, src.title);
        });
        const uniqueSources = Array.from(uniqueSourcesMap.entries()).map(([uri, title]) => ({
            title,
            uri
        }));

        return {
            text: response.text || "I apologize, I couldn't process that request.",
            sources: uniqueSources.length > 0 ? uniqueSources : undefined
        };
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        return {
            text: "I apologize, but I am currently experiencing a connection issue or unable to access external portals. Please try again shortly."
        };
    }
};