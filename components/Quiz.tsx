
import React, { useState } from 'react';
import { QuizData } from '../types';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuizProps {
  onComplete: (data: QuizData) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [formData, setFormData] = useState<QuizData>({
    hairType: '',
    chemicalHistory: '',
    oiliness: '',
    stressLevel: '',
    dailyHabits: [],
    hydrationLevel: '',
    hormonalPhase: '',
    symptoms: []
  });

  const next = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete(formData);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  const update = (key: keyof QuizData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleArray = (key: 'dailyHabits' | 'symptoms', value: string) => {
    setFormData(prev => {
      const arr = prev[key] as string[];
      if (arr.includes(value)) return { ...prev, [key]: arr.filter(v => v !== value) };
      return { ...prev, [key]: [...arr, value] };
    });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-8">Qual o seu tipo de fio predominante?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Liso (1A-1C)', 'Ondulado (2A-2C)', 'Cacheado (3A-3C)', 'Crespo (4A-4C)'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('hairType', t); next(); }}
                  className={`p-6 rounded-2xl border-2 transition-all text-sm font-medium ${formData.hairType === t ? 'border-gold bg-nude' : 'border-[#F5F0E8] hover:border-gold/30'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-8">Qual o seu histórico químico recente (últimos 12 meses)?</h3>
            <div className="space-y-4">
              {['Nenhuma Química', 'Coloração/Tonalizante', 'Descoloração/Luzes', 'Alisamento/Progressiva', 'Transição Capilar'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('chemicalHistory', t); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left px-6 transition-all ${formData.chemicalHistory === t ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-8">Como você descreve a oleosidade da sua raiz?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Muito Oleosa (lavo todo dia)', 'Normal', 'Seca', 'Mista (raiz oleosa, pontas secas)'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('oiliness', t); next(); }}
                  className={`p-4 rounded-xl border-2 transition-all ${formData.oiliness === t ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-8">Como anda seu nível de estresse ultimamente?</h3>
            <div className="space-y-4">
              {['Tranquilo', 'Moderado', 'Alto (período de muita pressão)', 'Extremo (sinto reflexos físicos)'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('stressLevel', t); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left px-6 transition-all ${formData.stressLevel === t ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-4">Quais hábitos fazem parte do seu dia a dia?</h3>
            <p className="text-sm text-gray-500 mb-8">Selecione todos que se aplicam</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Uso Secador/Chapinha', 'Piscina/Mar frequente', 'Prendo muito o cabelo', 'Uso boné/touca', 'Atividade física intensa', 'Dormo com cabelo úmido'].map(t => (
                <button 
                  key={t}
                  onClick={() => toggleArray('dailyHabits', t)}
                  className={`p-4 rounded-xl border-2 text-sm transition-all flex justify-between items-center ${formData.dailyHabits.includes(t) ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                  {formData.dailyHabits.includes(t) && <Check className="w-4 h-4 text-gold" />}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-8">Quanto de água você bebe por dia?</h3>
            <div className="space-y-4">
              {['Menos de 1 litro', 'Entre 1 e 2 litros', 'Mais de 2 litros', 'Não controlo'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('hydrationLevel', t); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left px-6 transition-all ${formData.hydrationLevel === t ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-8">Em qual fase biológica/hormonal você está?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Ciclo Regular', 'Uso Anticoncepcional', 'Pós-parto (até 1 ano)', 'Menopausa/Climatério', 'Gestante'].map(t => (
                <button 
                  key={t}
                  onClick={() => { update('hormonalPhase', t); next(); }}
                  className={`p-4 rounded-xl border-2 transition-all ${formData.hormonalPhase === t ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h3 className="text-2xl font-serif mb-4">Quais sintomas mais te incomodam hoje?</h3>
            <p className="text-sm text-gray-500 mb-8">Selecione seus principais desafios</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Queda excessiva', 'Frizz descontrolado', 'Quebra dos fios', 'Ressecamento', 'Pontas duplas', 'Afinamento', 'Caspa/Descamação', 'Falta de brilho'].map(t => (
                <button 
                  key={t}
                  onClick={() => toggleArray('symptoms', t)}
                  className={`p-4 rounded-xl border-2 text-sm transition-all flex justify-between items-center ${formData.symptoms.includes(t) ? 'border-gold bg-nude' : 'border-[#F5F0E8]'}`}
                >
                  {t}
                  {formData.symptoms.includes(t) && <Check className="w-4 h-4 text-gold" />}
                </button>
              ))}
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-[#F5F0E8]">
        <button onClick={onBack} className="text-gray-400 hover:text-black transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-xs font-bold uppercase tracking-widest text-gold">
          PASSO {step} DE {totalSteps}
        </div>
        <div className="w-6 h-6" /> {/* Spacer */}
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <div className="w-full bg-[#F5F0E8] h-1 rounded-full mb-12">
            <div 
              className="bg-gold h-full rounded-full transition-all duration-500" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>

          {renderStep()}

          <div className="mt-12 flex justify-between gap-4">
            <button 
              onClick={prev}
              className="flex-1 py-4 border border-[#F5F0E8] rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              Voltar
            </button>
            <button 
              onClick={next}
              disabled={(step === 5 && formData.dailyHabits.length === 0) || (step === 8 && formData.symptoms.length === 0)}
              className="flex-1 py-4 bg-black text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {step === totalSteps ? 'Gerar Meu Plano' : 'Continuar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
