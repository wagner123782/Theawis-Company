"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const Inicio = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // Cores personalizadas
  const primaryColor = "#bb8529"; // rgb(187, 133, 41)
  const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#9c6c21";

  // Converter hex para número
  const hexToNumber = (hex: string) => parseInt(hex.replace("#", ""), 16);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: hexToNumber(primaryColor), // Usando sua cor personalizada
        backgroundColor: 0x0, // Preto
        points: 14.0, // Mais pontos que o exemplo
        maxDistance: 25.0, // Conexões mais próximas
        spacing: 16.0, // Espaçamento
        showDots: true, // Mostrar pontos
        // Configurações adicionais para melhor performance
        speed: 0.7, // Velocidade da animação
        forceAnimate: true,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect, primaryColor]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="inicio"
    >
      {/* Vanta.js NET Effect */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Overlay gradiente mais escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-1" />

      {/* Conteúdo principal - CENTRALIZADO */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full py-16 text-center">
        {/* Badge/Tagline */}
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-[#bb8529]/30 mb-10 animate-fade-in">
          <span
            className="text-base font-medium"
            style={{ color: primaryColorLight }}
          >
            ✦ Agência Digital de Elite ✦
          </span>
        </div>

        {/* Título principal */}
        <div className="mb-10 animate-slide-up">
          <h1 className="text-5xl ">
            <span className="block text-white">
              Desenvolvedor de últa margem de
            </span>

            <span
              className="block"
              style={{
                color: primaryColor,
                textShadow: `0 0 30px ${primaryColor}40`,
              }}
            >
              crescimento empresarial
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos{" "}
            <span style={{ color: primaryColorLight }}>
              soluções integradas
            </span>{" "}
            em marketing, design e tecnologia para elevar sua presença digital a
            outro nível.
          </p>
        </div>

        {/* Estatísticas */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {[
            { value: "237+", label: "Projetos" },
            { value: "94.7%", label: "Satisfação" },
            { value: "50+", label: "Clientes" },
            { value: "2+", label: "Anos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 hover:border-[#bb8529]/30 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                style={{ color: primaryColorLight }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de CTA CENTRALIZADOS */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-14 max-w-lg mx-auto animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://wa.me/5562991502275"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex-1 max-w-xs mx-auto sm:mx-0 inline-block text-center"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${primaryColorDark})`,
              color: "white",
            }}
          >
            <span className="relative z-10">Falar com Especialista</span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${primaryColorLight}, ${primaryColor})`,
              }}
            />
            <div className="absolute -right-2 -top-2 w-10 h-10 rounded-full blur-sm bg-white/20" />
            <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full blur-sm bg-white/10" />
          </a>

          <a
            href="#serviços"
            className="group relative px-3 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 border-2 flex-1 max-w-xs mx-auto sm:mx-0 hover:shadow-lg inline-block text-center"
            style={{
              borderColor: `${primaryColor}40`,
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Nossos Servicos
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                style={{ color: primaryColorLight }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: `${primaryColor}10` }}
            />
          </a>
        </div>

        {/* Características */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 max-w-4xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            "Estratégias Personalizadas",
            "Design Exclusivo",
            "Tecnologia Avançada",
            "Resultados Comprovados",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#bb8529]/30 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <svg
                  className="w-4 h-4 transition-all duration-300 group-hover:scale-125"
                  style={{ color: primaryColor }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2" style={{ color: primaryColorLight }}>
            Descubra mais
          </span>
          <svg
            className="w-6 h-6"
            style={{ color: primaryColor }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Adicionar animações CSS personalizadas */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Inicio;
