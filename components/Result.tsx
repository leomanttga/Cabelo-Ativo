
import React from 'react';
import { HairPlan } from '../types';
import { 
  CheckCircle, 
  Calendar, 
  ShoppingBag, 
  Zap, 
  RefreshCw, 
  Download, 
  Share2
} from 'lucide-react';

interface ResultProps {
  plan: HairPlan;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ plan, onRestart }) => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      {/* Header Result */}
      <div className="bg-black text-white py-20 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 inline-block">Sua Transformação Começa Aqui</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Seu Plano Capilar Ativo</h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            {plan.summary}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 -mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Analysis Card */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-[#F5F0E8]">
              <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
                <Zap className="text-gold w-8 h-8" />
                Análise da IA
              </h2>
              <div className="prose prose-stone max-w-none text-gray-700 leading-relaxed">
                {plan.analysis.split('\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
            </div>

            {/* Cronograma */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-[#F5F0E8]">
              <h2 className="text-3xl font-serif mb-8 flex items-center gap-3">
                <Calendar className="text-gold w-8 h-8" />
                Cronograma de 4 Semanas
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(plan.schedule).map(([week, tasks], idx) => (
                  <div key={week} className="border border-[#F5F0E8] p-6 rounded-3xl hover:border-gold/30 transition-all">
                    <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-4">Semana {idx + 1}</h4>
                    <ul className="space-y-3">
                      {/* Fixed: Added explicit cast to string[] to resolve 'Property map does not exist on type unknown' error */}
                      {(tasks as string[]).map((task, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Products */}
            <div className="bg-nude p-8 rounded-[40px] shadow-lg">
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                Produtos Sugeridos
              </h3>
              <div className="space-y-6">
                {plan.products.map((item, i) => (
                  <div key={i} className="bg-white/50 p-4 rounded-2xl">
                    <p className="font-bold text-sm mb-1">{item.type}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="bg-white p-8 rounded-[40px] shadow-lg border border-[#F5F0E8]">
              <h3 className="text-2xl font-serif mb-6">Hábitos & Estilo de Vida</h3>
              <ul className="space-y-4">
                {plan.lifestyle.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 italic">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl">
                <Download className="w-4 h-4" /> Baixar Plano em PDF
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-black py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-all">
                <Share2 className="w-4 h-4" /> Compartilhar Resultados
              </button>
              <button 
                onClick={onRestart}
                className="w-full flex items-center justify-center gap-2 text-gray-400 py-2 text-xs font-bold uppercase tracking-widest hover:text-black transition-all"
              >
                <RefreshCw className="w-3 h-3" /> Refazer Teste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
