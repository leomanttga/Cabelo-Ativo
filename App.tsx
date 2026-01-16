
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { QuizData, HairPlan } from './types';
import { generateHairPlan } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'quiz' | 'loading' | 'result'>('landing');
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [plan, setPlan] = useState<HairPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startQuiz = () => setView('quiz');

  const handleQuizComplete = async (data: QuizData) => {
    setQuizData(data);
    setView('loading');
    try {
      const result = await generateHairPlan(data);
      setPlan(result);
      setView('result');
    } catch (err) {
      console.error(err);
      setError("Houve um erro ao processar seu plano. Por favor, tente novamente.");
      setView('quiz');
    }
  };

  const reset = () => {
    setView('landing');
    setQuizData(null);
    setPlan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen">
      {view === 'landing' && <LandingPage onStart={startQuiz} />}
      {view === 'quiz' && (
        <Quiz onComplete={handleQuizComplete} onBack={() => setView('landing')} />
      )}
      {view === 'loading' && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-nude p-8 text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-3xl font-serif mb-4">Analisando sua biologia capilar...</h2>
          <p className="text-gray-600 max-w-md">Nossa IA está cruzando mais de 25 indicadores para criar seu plano exclusivo de transformação.</p>
        </div>
      )}
      {view === 'result' && plan && (
        <Result plan={plan} onRestart={reset} />
      )}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          {error}
          <button onClick={() => setError(null)} className="ml-4 font-bold">&times;</button>
        </div>
      )}
    </div>
  );
};

export default App;
