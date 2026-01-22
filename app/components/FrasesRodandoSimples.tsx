"use client";

const FrasesRodandoSimples = () => {
  const frases = [
    "criatividade",
    "tecnologia",
    "agilidade",
    "performance",
    "pessoas",
    "estratégia",
    "marketing full service",
    "agência de marketing digital",
    "agência de marketing full service",
    "publicidade com inteligência artificial",
    "publicidade e propaganda",
    "marketing digital",
  ];

  const primaryColor = "#bb8529";

  return (
    <section className="py-4 bg-black overflow-hidden">
      <div className="relative">
        {/* Gradientes laterais para efeito de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Container principal com animação CSS pura */}
        <div className="flex animate-scroll-infinito">
          {/* Duplica as frases para criar o efeito contínuo */}
          {[...frases, ...frases].map((frase, index) => (
            <div key={index} className="flex items-center mx-8 flex-shrink-0">
              <span
                className=" font-bold whitespace-nowrap"
                style={{
                  color: index % 2 === 0 ? "#ffffff" : primaryColor,
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {frase}
              </span>
              <span className=" ml-8" style={{ color: primaryColor }}>
                ▪
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollInfinito {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinito {
          animation: scrollInfinito 30s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll-infinito:hover {
          animation-play-state: paused;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .animate-scroll-infinito {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default FrasesRodandoSimples;
