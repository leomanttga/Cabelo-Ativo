
export interface QuizData {
  hairType: string;
  chemicalHistory: string;
  oiliness: string;
  stressLevel: string;
  dailyHabits: string[];
  hydrationLevel: string;
  hormonalPhase: string;
  symptoms: string[];
}

export interface HairPlan {
  summary: string;
  analysis: string;
  schedule: {
    week1: string[];
    week2: string[];
    week3: string[];
    week4: string[];
  };
  products: {
    type: string;
    description: string;
  }[];
  lifestyle: string[];
}
