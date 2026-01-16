
import { GoogleGenAI, Type } from "@google/genai";
import { QuizData, HairPlan } from "../types";

// Always use process.env.API_KEY directly when initializing as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHairPlan = async (data: QuizData): Promise<HairPlan> => {
  const prompt = `Analise os seguintes dados capilares de uma cliente e crie um plano de transformação capilar detalhado em Português:
  - Tipo de Fio: ${data.hairType}
  - Histórico Químico: ${data.chemicalHistory}
  - Oleosidade: ${data.oiliness}
  - Estresse: ${data.stressLevel}
  - Hábitos: ${data.dailyHabits.join(', ')}
  - Hidratação Interna: ${data.hydrationLevel}
  - Fase Hormonal: ${data.hormonalPhase}
  - Sintomas: ${data.symptoms.join(', ')}
  
  O plano deve incluir um resumo acolhedor, uma análise das causas prováveis, um cronograma capilar de 4 semanas, sugestões de tipos de produtos e dicas de estilo de vida.`;

  // Using gemini-3-pro-preview for complex reasoning tasks as per guidelines
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          analysis: { type: Type.STRING },
          schedule: {
            type: Type.OBJECT,
            properties: {
              week1: { type: Type.ARRAY, items: { type: Type.STRING } },
              week2: { type: Type.ARRAY, items: { type: Type.STRING } },
              week3: { type: Type.ARRAY, items: { type: Type.STRING } },
              week4: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["week1", "week2", "week3", "week4"]
          },
          products: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            }
          },
          lifestyle: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["summary", "analysis", "schedule", "products", "lifestyle"]
      }
    }
  });

  // Correctly access text output via the .text property (not a method)
  return JSON.parse(response.text || "{}") as HairPlan;
};
