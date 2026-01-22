"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBullseye,
  faBolt,
  faChartLine,
  faQuoteLeft,
  faPlay,
  faClock,
  faMedal,
  faHeadset,
  faTrophy,
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const VideoCEO = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Dados do projeto atual (exemplo)
  const projetoAtual = {
    titulo: "Case de Sucesso - Transformação Digital",
    cor: "#bb8529",
    link: "https://exemplo.com/case",
  };

  // Cores personalizadas
  const primaryColor = "#bb8529"; // rgb(187, 133, 41)
  const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#9c6c21";

  return (
    <section
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      id="sobre"
    >
      {/* Elementos decorativos de fundo animados - otimizados para mobile */}
      <div
        className="absolute top-20 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-5 animate-pulse"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-20 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-5 animate-pulse"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Partículas animadas no fundo - menos partículas no mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: primaryColorLight,
              opacity: Math.random() * 0.3 + 0.1,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      {/* Linhas de grade animadas - mais sutis no mobile */}
      <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,#bb8529_100%)] bg-[length:30px_30px] md:bg-[length:40px_40px] animate-grid-scroll" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_95%,#bb8529_100%)] bg-[length:30px_30px] md:bg-[length:40px_40px] animate-grid-scroll-vertical" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção - ajustado para mobile */}
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-20">
            <div
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/40 backdrop-blur-sm border mb-4 md:mb-6 animate-fade-in"
              style={{ borderColor: `${primaryColor}30` }}
            >
              <span
                className="text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2"
                style={{ color: primaryColorLight }}
              >
                <FontAwesomeIcon
                  icon={faVideo}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                Direto da liderança
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 animate-slide-up px-4">
              <span className="text-white block">Nosso CEO Explica</span>
              <span
                className="text-transparent bg-clip-text block mt-1 md:mt-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColorLight})`,
                }}
              >
                Como Transformamos Negócios
              </span>
            </h2>

            <p
              className="text-sm sm:text-base md:text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up px-4"
              style={{ animationDelay: "0.1s" }}
            >
              Assista a mensagem direta do nosso fundador e entenda a
              metodologia por trás dos nossos resultados.
            </p>
          </div>

          {/* Container principal do vídeo - ajustado para mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Container do vídeo (centro) - ocupando toda a largura no mobile */}
            <div className="w-full lg:col-span-2 order-1">
              <div
                className="relative group animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Efeito de brilho animado - mais sutil no mobile */}
                <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-transparent via-[#bb8529]/10 md:via-[#bb8529]/20 to-transparent rounded-2xl md:rounded-3xl animate-pulse blur-lg md:blur-xl" />

                {/* Container do iframe */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black shadow-lg md:shadow-2xl border border-white/5 md:border-2 md:border-white/10 group-hover:border-white/20 transition-all duration-300">
                  {/* Placeholder enquanto carrega */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                      <div className="text-center p-4">
                        <div
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 relative"
                          style={{ backgroundColor: `${primaryColor}20` }}
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-spin-slow" />
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="w-5 h-5 md:w-8 md:h-8 animate-pulse"
                            style={{ color: primaryColorLight }}
                          />
                        </div>
                        <p className="text-white font-semibold text-sm md:text-base">
                          Carregando vídeo...
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Iframe do YouTube */}
                  <div className="relative aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/DfRKdTMSPpc?si=riNzcLtbA9FtpLCq&autoplay=1&mute=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      onLoad={() => setIsVideoLoaded(true)}
                    />
                  </div>
                </div>

                {/* Container dos CTAs */}
                <div className="mt-6 md:mt-8 border-t border-gray-800/50 pt-6 md:pt-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://wa.me/5562991502275?text=${encodeURIComponent(
                        `Olá! Vi o vídeo do CEO e gostaria de saber mais sobre um projeto similar ao "${projetoAtual.titulo}"`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border-2 inline-flex items-center justify-center"
                      style={{
                        borderColor: primaryColor,
                        color: primaryColor,
                        backgroundColor: "transparent",
                      }}
                    >
                      <span className="flex items-center justify-center gap-3 text-base md:text-lg">
                        Melhorar Meu Negócio
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Informações abaixo do vídeo - apenas mobile */}
                <div className="mt-4 md:mt-6 flex items-center justify-between text-sm text-gray-400 lg:hidden">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                    <span>2:30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-4 rounded-full"
                          style={{
                            backgroundColor: primaryColorLight,
                            opacity: 0.3 + i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    <span>HD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto à esquerda (apenas em desktop) */}
            <div className="hidden lg:block space-y-8 order-2">
              <div className="space-y-6">
                {[
                  {
                    icone: faBullseye,
                    titulo: "Estratégia Personalizada",
                    descricao:
                      "Cada plano é desenvolvido especificamente para seu negócio",
                    delay: "0.2s",
                  },
                  {
                    icone: faBolt,
                    titulo: "Execução Ágil",
                    descricao: "Implementação rápida sem perder qualidade",
                    delay: "0.3s",
                  },
                  {
                    icone: faChartLine,
                    titulo: "Resultados Mensuráveis",
                    descricao: "Métricas claras e acompanhamento constante",
                    delay: "0.4s",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 group animate-slide-up"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-black/40 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={item.icone}
                          className="text-xl"
                          style={{ color: primaryColorLight }}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-sm text-gray-400">{item.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Citação desktop */}
              <div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-black/50 to-black/30 border animate-fade-in"
                style={{
                  borderColor: `${primaryColor}20`,
                  animationDelay: "0.5s",
                }}
              >
                <div
                  className="absolute top-4 left-4 text-4xl opacity-20"
                  style={{ color: primaryColor }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p className="text-gray-300 italic relative z-10">
                  "Não vendemos serviços, entregamos transformação digital com
                  resultados reais e mensuráveis."
                </p>
              </div>
            </div>

            {/* Texto abaixo do vídeo (mobile) */}
            <div className="w-full lg:hidden space-y-6 mt-4 md:mt-8 order-3">
              {/* Cards de benefícios em grid responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {[
                  {
                    icone: faBullseye,
                    titulo: "Estratégia",
                    descricao: "100% Personalizada",
                    delay: "0.2s",
                  },
                  {
                    icone: faBolt,
                    titulo: "Execução",
                    descricao: "Rápida e Ágil",
                    delay: "0.3s",
                  },
                  {
                    icone: faChartLine,
                    titulo: "Resultados",
                    descricao: "Comprovados",
                    delay: "0.4s",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-3 md:p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 animate-slide-up hover:bg-black/40 transition-colors duration-300"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-black/40 flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <FontAwesomeIcon
                        icon={item.icone}
                        className="text-lg md:text-xl"
                        style={{ color: primaryColorLight }}
                      />
                    </div>
                    <h4 className="font-bold text-white text-sm md:text-base mb-1">
                      {item.titulo}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      {item.descricao}
                    </p>
                  </div>
                ))}
              </div>

              {/* Citação mobile - mais compacta */}
              <div
                className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-black/50 to-black/30 border animate-fade-in"
                style={{
                  borderColor: `${primaryColor}20`,
                  animationDelay: "0.5s",
                }}
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-xl md:text-2xl mb-3 md:mb-4 opacity-30"
                  style={{ color: primaryColor }}
                />
                <p className="text-gray-300 italic text-sm md:text-base mb-3 md:mb-4">
                  "Não vendemos serviços, entregamos transformação digital com
                  resultados reais."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-900" />
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">
                      CEO & Founder
                    </p>
                    <p
                      className="text-xs md:text-sm"
                      style={{ color: primaryColorLight }}
                    >
                      Theawis Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas - ajustadas para mobile */}
          <div className="mt-8 md:mt-12 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto px-2">
            {[
              {
                icone: faTrophy,
                valor: "+85%",
                label: "Satisfação",
                detalhe: "Clientes recomendam",
                delay: "0.6s",
              },
              {
                icone: faMedal,
                valor: "98%",
                label: "Entregues",
                detalhe: "No prazo",
                delay: "0.7s",
              },
              {
                icone: faHeadset,
                valor: "24/7",
                label: "Suporte",
                detalhe: "Disponível",
                delay: "0.8s",
              },
              {
                icone: faChartLine,
                valor: "+200",
                label: "Casos",
                detalhe: "Comprovados",
                delay: "0.9s",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 md:p-4 rounded-lg md:rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 animate-slide-up active:scale-95 lg:hover:scale-105 group"
                style={{ animationDelay: stat.delay }}
              >
                <div
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <FontAwesomeIcon
                    icon={stat.icone}
                    className="text-sm md:text-lg"
                    style={{ color: primaryColorLight }}
                  />
                </div>
                <div
                  className="text-lg md:text-xl lg:text-3xl font-bold mb-1 md:mb-2"
                  style={{ color: primaryColorLight }}
                >
                  {stat.valor}
                </div>
                <div className="text-xs md:text-sm font-semibold text-white mb-0.5 md:mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] md:text-xs text-gray-400">
                  {stat.detalhe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
          }
          50% {
            transform: translateY(0px) translateX(10px) rotate(180deg);
          }
          75% {
            transform: translateY(5px) translateX(5px) rotate(270deg);
          }
        }

        @keyframes grid-scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }

        @keyframes grid-scroll-vertical {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-grid-scroll {
          animation: grid-scroll 20s linear infinite;
        }

        .animate-grid-scroll-vertical {
          animation: grid-scroll-vertical 15s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Melhorias para mobile */
        @media (max-width: 640px) {
          .animate-slide-up {
            animation: slide-up 0.5s ease-out forwards;
          }

          .animate-scale-in {
            animation: scale-in 0.5s ease-out forwards;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoCEO;
