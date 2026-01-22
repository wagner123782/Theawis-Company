"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const DepoimentosCompacto = () => {
  const primaryColor = "#bb8529";
  const [activeIndex, setActiveIndex] = useState(0);

  // URLs de fotos aleatórias do Unsplash (pessoas reais)
  const fotos = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  ];

  const depoimentos = [
    {
      id: 1,
      nome: "Mariana Silva",
      cargo: "CEO da TechSolutions",
      conteudo:
        "A parceria com a Theawis Company transformou completamente nossa presença digital. Em 6 meses, nosso faturamento online cresceu 300%. Profissionais excepcionais!",
      rating: 5,
      foto: fotos[0], // Primeira foto
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      cargo: "Diretor de Marketing",
      conteudo:
        "Trabalhamos com várias agências ao longo dos anos, mas a Theawis se destacou pela atenção aos detalhes e resultados mensuráveis. Super recomendo!",
      rating: 5,
      foto: fotos[1], // Segunda foto
    },
    {
      id: 3,
      nome: "Juliana Costa",
      cargo: "Fundadora da EcoLife",
      conteudo:
        "Como startup, precisávamos de uma agência que entendesse nosso propósito. A Theawis não só entendeu como amplificou nossa mensagem de forma incrível.",
      rating: 5,
      foto: fotos[2], // Terceira foto
    },
    {
      id: 4,
      nome: "Ricardo Oliveira",
      cargo: "Head de Vendas",
      conteudo:
        "A estratégia de marketing digital desenvolvida pela equipe revolucionou nosso funil de vendas. ROI impressionante e suporte impecável.",
      rating: 5,
      foto: fotos[4], // Quarta foto
    },
    {
      id: 5,
      nome: "Fernanda Lima",
      cargo: "Gerente de Produto",
      conteudo:
        "Profissionais que realmente entendem do negócio. Cada campanha foi pensada nos mínimos detalhes, resultando em engajamento recorde.",
      rating: 5,
      foto: fotos[3], // Quinta foto
    },
    {
      id: 6,
      nome: "Joana Silva",
      cargo: "CTO da InovaTech",
      conteudo:
        "A implementação técnica foi impecável. A equipe não só entregou o projeto no prazo, como também sugeriu melhorias que otimizaram nossos processos.",
      rating: 5,
      foto: fotos[5], // Sexta foto
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? "text-yellow-500" : "text-gray-700"}
        size="sm"
      />
    ));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Depoimentos
            <span className="block" style={{ color: primaryColor }}>
              de Clientes
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossa parceria
          </p>
        </div>

        {/* Carrossel Principal */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card Ativo */}
            <div className="relative p-8 lg:p-12 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
              {/* Ícone de aspas */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-4xl lg:text-5xl opacity-10"
                  style={{ color: primaryColor }}
                />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {renderStars(depoimentos[activeIndex].rating)}
              </div>

              {/* Conteúdo */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10">
                "{depoimentos[activeIndex].conteudo}"
              </p>

              {/* Cliente com Foto */}
              <div className="flex items-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2"
                  style={{ borderColor: primaryColor }}
                >
                  {/* Usando next/image para otimização */}
                  <img
                    src={depoimentos[activeIndex].foto}
                    alt={depoimentos[activeIndex].nome}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {depoimentos[activeIndex].nome}
                  </h4>
                  <p className="text-gray-400">
                    {depoimentos[activeIndex].cargo}
                  </p>
                </div>
              </div>
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-600 transition-colors hover:scale-110"
                aria-label="Depoimento anterior"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-gray-400"
                />
              </button>

              {/* Indicadores */}
              <div className="flex gap-3">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8" : "bg-gray-700"
                    }`}
                    style={{
                      backgroundColor:
                        index === activeIndex ? primaryColor : undefined,
                    }}
                    aria-label={`Depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-600 transition-colors hover:scale-110"
                aria-label="Próximo depoimento"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-400"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Galeria de Fotos (Mini Cards) */}
        <div className="hidden lg:grid grid-cols-6 gap-4 mt-12 max-w-5xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <button
              key={depoimento.id}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === activeIndex
                  ? "ring-2 ring-offset-2 ring-offset-black"
                  : "hover:scale-105"
              }`}
              style={
                {
                  ["--tw-ring-color" as any]: primaryColor,
                } as React.CSSProperties
              }
            >
              {/* Foto */}
              <div className="aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  loading="lazy"
                  className="block mx-auto max-w-full max-h-full object-contain object-center origin-center transform-gpu transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay com informações */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                             p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             ${index === activeIndex ? "opacity-100" : ""}`}
              >
                <div className="text-white">
                  <p className="font-bold text-sm">
                    {depoimento.nome.split(" ")[0]}
                  </p>
                  <p className="text-xs text-gray-300 truncate">
                    {depoimento.cargo.split("da ").pop()?.split("de ").pop()}
                  </p>
                </div>
              </div>

              {/* Indicador de seleção */}
              {index === activeIndex && (
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Versão Mobile - Mini cards */}
        <div className="lg:hidden mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            {depoimentos.map((depoimento, index) => (
              <button
                key={depoimento.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  index === activeIndex
                    ? "border-yellow-500 scale-110"
                    : "border-gray-700"
                }`}
              >
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { valor: "50+", label: "Clientes Ativos" },
              { valor: "4.9", label: "Avaliação Média" },
              { valor: "98%", label: "Satisfação" },
              { valor: "200+", label: "Projetos" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800"
              >
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: primaryColor }}
                >
                  {stat.valor}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosCompacto;
