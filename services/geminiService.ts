
import { GoogleGenAI } from "@google/genai";
import { Service } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getServiceRecommendation = async (userInput: string, services: Service[]) => {
  const serviceContext = services.map(s => `- ${s.name}: ${s.shortDescription} (Price: ${s.priceRange})`).join('\n');
  
  const prompt = `
    You are an expert Automation Consultant for Crowd Connect.
    We help business owners build a "Business OS" using automation and GHL.
    
    KEY MISSION:
    - We replace scattered tools (Calendly, Mailchimp) with one unified system.
    - Our core platform is $97/month.
    - We handle technical bottlenecks like A2P/SMS compliance and DNS.
    
    YOUR TONE:
    - Professional, direct, high-impact, and encouraging.
    - Use phrases like "Business OS", "Infrastructure", and "Growth Pipeline".
    
    Recommend the best 1-2 services from our list based on the user's input.
    Briefly mention that we handle the compliance heavy lifting (like A2P).
    
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
    return "The automation core is temporarily offline. Please contact a Crowd Connect strategist directly.";
  }
};
