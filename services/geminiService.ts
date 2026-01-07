
import { GoogleGenAI } from "@google/genai";
import { Service } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getServiceRecommendation = async (userInput: string, services: Service[]) => {
  const serviceContext = services.map(s => `- ${s.name}: ${s.shortDescription}`).join('\n');
  
  const prompt = `
    You are a Studio Operations Consultant for Crowd Connect. 
    You help recording studio owners automate their booking, payments, and client communication.
    
    KEY MISSION:
    - Focus on "Studio Manager" solutions.
    - Mention features like "Missed Call Rescue" for when the engineer is in the booth.
    - Emphasize "Engineer-Sync" for staff management.
    - Mention "AI Receptionists" trained on studio gear lists.
    
    TONE:
    - Professional, creative-friendly, and slightly edgy/direct (studio vibes).
    - Use terms like "Tracking", "In the booth", "Red light", "Console".
    
    Based on the input, recommend 1-2 services and explain how it solves their specific pain point (e.g., losing leads while recording).
    
    SERVICES AVAILABLE:
    ${serviceContext}
    
    CLIENT INPUT:
    "${userInput}"
    
    RESPONSE:
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently stuck in a long vocal session. Please reach out to Crowd Connect directly.";
  }
};
