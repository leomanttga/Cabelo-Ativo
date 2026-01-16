
import React from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Wind, 
  Heart, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Microscope,
  Menu,
  Instagram,
  Facebook
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#F5F0E8] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
            <span className="text-white font-serif text-sm">CA</span>
          </div>
          <span className="text-xl font-serif tracking-widest uppercase">Cabelo Ativo</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#como-funciona" className="hover:text-gold transition-colors">Como Funciona</a>
          <a href="#beneficios" className="hover:text-gold transition-colors">Benefícios</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </div>
        <button 
          onClick={onStart}
          className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
        >
          Meu Plano
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-20 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto">
          <div className="z-10">
            <span className="inline-block px-4 py-1 border border-gold text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              O Futuro do Cuidado Capilar
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Seu Cabelo Pode Ser o Seu Maior <span className="italic">Ativo.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Um plano capilar totalmente personalizado para transformar seu cabelo — da raiz às pontas, baseado na sua biologia única.
            </p>
            <button 
              onClick={onStart}
              className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl group"
            >
              Criar meu Plano Personalizado
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-nude rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1000&auto=format&fit=crop" 
              alt="Mulher com cabelo saudável e natural" 
              className="relative z-10 w-full rounded-[40px] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-10 -left-10 z-20 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-[#F5F0E8]">
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-bold">15.000+ Mulheres</p>
                  <p className="text-gray-500">Transformaram seus fios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-24 bg-nude px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-snug">Cada cabelo conta uma história diferente.</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Analisamos mais de 25 aspectos capilares, hormonais, nutricionais e de rotina para criar um plano exclusivo, pensado para seu tipo de fio, seus sintomas e seus objetivos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Redução de frizz",
                  "Fim da queda e fortalecimento",
                  "Cronograma capilar otimizado",
                  "Produtos indicados para você",
                  "Ajustes nutricionais e de hábitos",
                  "Análise hormonal"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f8c2b1b1?q=80&w=800&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">O Caminho</span>
          <h2 className="text-4xl font-serif mt-4">Como Funciona sua Jornada</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Questionário Inteligente",
              desc: "Responda perguntas detalhadas sobre seu cabelo, estilo de vida e saúde.",
              icon: <Sparkles className="w-8 h-8" />
            },
            {
              step: "02",
              title: "Análise por IA",
              desc: "Nossa tecnologia identifica as causas raízes e necessidades específicas dos seus fios.",
              icon: <Microscope className="w-8 h-8" />
            },
            {
              step: "03",
              title: "Plano Exclusivo",
              desc: "Receba uma rotina completa, indicação de produtos e recomendações diárias.",
              icon: <ShieldCheck className="w-8 h-8" />
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 bg-white border border-[#F5F0E8] rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-4xl font-serif text-[#F5F0E8] mb-2">{item.step}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-black text-white px-6 md:px-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              O cabelo deixa de ser uma insegurança e passa a ser um símbolo de presença, beleza e força.
            </h2>
            <div className="space-y-6 mt-12">
              {[
                { title: "Menos queda e quebra", desc: "Fortalecimento estrutural desde o folículo." },
                { title: "Crescimento saudável", desc: "Estimulação ativa dos fios em repouso." },
                { title: "Brilho e alinhamento", desc: "Selagem das cutículas para luminosidade máxima." },
                { title: "Raiz equilibrada", desc: "Controle preciso de oleosidade e inflamação." },
                { title: "Autoestima elevada", desc: "Sinta-se poderosa todos os dias." }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Preview */}
      <section className="py-24 px-6 md:px-20 bg-nude/30">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 md:p-20 shadow-xl text-center border border-gold/10">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">O sistema que entende você.</h2>
          <p className="text-gray-600 mb-12">
            Nossa análise abrange: tipo de fio, histórico químico, oleosidade, estresse, hábitos, hidratação, fase hormonal e sintomas como queda e ressecamento.
          </p>
          <button 
            onClick={onStart}
            className="inline-block bg-gold text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#B58E45] transition-all shadow-lg"
          >
            Responder o Questionário e Receber Meu Plano
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif">Depoimentos Reais</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Juliana Silva",
              text: "Finalmente entendi por que meu cabelo não crescia. O plano ajustou não só os produtos, mas minha alimentação.",
              img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Carla Mendes",
              text: "A redução do frizz foi imediata. Me sinto muito mais confiante para reuniões de trabalho agora.",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
            },
            {
              name: "Beatriz Oliveira",
              text: "O acompanhamento é incrível. Eu estava em transição e o Cabelo Ativo foi meu porto seguro.",
              img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=400&auto=format&fit=crop"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#F5F0E8] text-center">
              <img src={t.img} className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-gold p-1" />
              <div className="flex justify-center gap-1 mb-4 text-gold">
                {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 fill-gold" />)}
              </div>
              <p className="italic text-gray-600 mb-6">"{t.text}"</p>
              <p className="font-bold uppercase tracking-wider text-xs">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-nude px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Em quanto tempo vejo resultados?", a: "Os primeiros sinais de brilho e redução de frizz aparecem em 15 dias. Resultados estruturais de queda e crescimento levam de 45 a 90 dias." },
              { q: "O plano é realmente personalizado?", a: "Sim. Nenhuma recomendação é genérica. Nossa IA processa seus dados específicos para gerar uma rotina única." },
              { q: "Preciso comprar produtos caros?", a: "Não. Recomendamos tipos de ativos e categorias de produtos. Você terá opções para diferentes orçamentos." },
              { q: "Funciona para qualquer tipo de cabelo?", a: "Sim, do 1A ao 4C, virgens ou quimicamente tratados." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                  {item.q}
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-gold" />
                </summary>
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
           <img src="https://images.unsplash.com/photo-1519735817352-ad9a99626ed4?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Seu cabelo é uma parte poderosa da sua imagem. Vamos torná-lo seu <span className="italic">maior ativo?</span>
          </h2>
          <button 
            onClick={onStart}
            className="bg-black text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-110 transition-all shadow-2xl"
          >
            Criar Meu Plano Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#F5F0E8] pt-20 pb-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
                  <span className="text-white font-serif text-sm">CA</span>
                </div>
                <span className="text-xl font-serif tracking-widest uppercase">Cabelo Ativo</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                Transformando a relação das mulheres com seus cabelos através de ciência, personalização e tecnologia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-nude rounded-full hover:bg-gold hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-nude rounded-full hover:bg-gold hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gold transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Nossa Ciência</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>contato@cabeloativo.com.br</li>
                <li>Atendimento: Seg-Sex, 9h-18h</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-10 border-t border-[#F5F0E8] text-xs text-gray-400">
            © {new Date().getFullYear()} Cabelo Ativo. Todos os direitos reservados. Design para autoestima e saúde.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
