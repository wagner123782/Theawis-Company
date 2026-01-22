"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
  faChartLine,
  faUsers,
  faCalendarAlt,
  faStar,
  faRocket,
  faShoppingBag,
  faMobileAlt,
  faCheckCircle,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

const ProjetosDestaque = () => {
  const [projetoAtivo, setProjetoAtivo] = useState<number>(1);
  const primaryColor = "#bb8529";
  //const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#8a5b20";
  const primaryColorLight = "#d49a3a";

  const projetos = [
    {
      id: 1,
      titulo: "Rancho Country E-commerce",
      categoria: "E-commerce & Marketing",
      descricao:
        "Transformação completa da loja virtual com foco em experiência Roupas e estilo Country.",
      resultados: [
        { label: "Crescimento em Vendas", valor: "+88%", icon: faChartLine },
        { label: "Novos Clientes", valor: "+1.2K", icon: faUsers },
        { label: "Tempo de Projeto", valor: "4 meses", icon: faCalendarAlt },
      ],
      tecnologias: ["yampi", "Google Analytics"],
      imagem: "/img/contry.jpeg", // usar imagem em public/img
      link: "https://rancho-country.catalog.yampi.io/",
      cor: "#f87800ff",
      icone: faShoppingBag,
    },
    {
      id: 2,
      titulo: "Sneak Wis",
      categoria: "E-commerce",
      descricao:
        "Desenvolvimento de app fitness com rastreamento em tempo real e comunidade interativa.",
      resultados: [
        { label: "Downloads", valor: "50K+", icon: faUsers },
        { label: "Avaliação", valor: "4.8/5", icon: faStar },
        { label: "Retenção", valor: "85%", icon: faChartLine },
      ],
      tecnologias: ["Figma", "Canva", "yampi"],
      imagem: "/img/sapato.jpeg", // use public/img/healthfit.png
      link: "https://sneak-wis.catalog.yampi.io/",
      cor: "#ff6600ff",
      icone: faMobileAlt,
    },
    {
      id: 3,
      titulo: "Wiscar brinquedos ",
      categoria: "Loja de brinquedos & Branding",
      descricao:
        "Redesign completo da identidade visual com nova estratégia de marca e posicionamento.",
      resultados: [
        { label: "Engajamento", valor: "+300%", icon: faUsers },
        { label: "Reconhecimento", valor: "92%", icon: faStar },
        { label: "Crescimento", valor: "+180%", icon: faChartLine },
      ],
      tecnologias: ["Figma", "Canva", "yampi"],
      imagem: "/img/wiscar.jpeg", // use public/img/bellamoda.png
      link: "https://wxdddd.catalog.yampi.io/",
      cor: "#ccb800ff",
      icone: faPaintBrush,
    },
  ];

  const projetoAtual =
    projetos.find((p) => p.id === projetoAtivo) || projetos[0];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Elementos decorativos */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div
              className="w-8 h-0.5"
              style={{ backgroundColor: primaryColor }}
            />
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Cases de Sucesso
            </span>
            <div
              className="w-8 h-0.5"
              style={{ backgroundColor: primaryColor }}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Projetos que
            <span className="block" style={{ color: primaryColor }}>
              Transformaram Negócios
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos onde aplicamos nossa metodologia e
            alcançamos resultados extraordinários.
          </p>
        </div>

        {/* Navegação entre projetos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projetos.map((projeto) => (
            <button
              key={projeto.id}
              onClick={() => setProjetoAtivo(projeto.id)}
              className={`
                group flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300
                ${
                  projetoAtivo === projeto.id
                    ? "border-white shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
              style={
                projetoAtivo === projeto.id
                  ? {
                      backgroundColor: projeto.cor,
                      color: "white",
                    }
                  : { backgroundColor: "white" }
              }
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  projetoAtivo === projeto.id ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                <FontAwesomeIcon
                  icon={projeto.icone}
                  className={
                    projetoAtivo === projeto.id ? "text-white" : "text-gray-600"
                  }
                />
              </div>
              <div className="text-left">
                <div
                  className={`text-sm font-semibold ${
                    projetoAtivo === projeto.id ? "text-white" : "text-gray-900"
                  }`}
                >
                  {projeto.titulo.split(" ")[0]}
                </div>
                <div
                  className={`text-xs ${
                    projetoAtivo === projeto.id
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}
                >
                  {projeto.categoria.split("&")[0]}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Detalhes do projeto ativo */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Imagem do projeto */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Imagem real vinda de public/img via next/image */}
                {projetoAtual.imagem ? (
                  <div className="absolute inset-0">
                    <Image
                      src={projetoAtual.imagem}
                      alt={projetoAtual.titulo}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: `${projetoAtual.cor}20` }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {projetoAtual.icone === faShoppingBag
                          ? "🛒"
                          : projetoAtual.icone === faMobileAlt
                            ? "📱"
                            : "🎨"}
                      </div>
                      <p className="text-gray-700 font-bold text-xl">
                        {projetoAtual.titulo}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Imagem ilustrativa do projeto
                      </p>
                    </div>
                  </div>
                )}

                {/* Overlay de efeito */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Badge de categoria */}
                <div className="absolute top-6 left-6">
                  <div
                    className="px-4 py-2 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: projetoAtual.cor }}
                  >
                    {projetoAtual.categoria}
                  </div>
                </div>
              </div>

              {/* Indicadores de resultados */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {projetoAtual.resultados.map((resultado, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="flex justify-center mb-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${projetoAtual.cor}20` }}
                      >
                        <FontAwesomeIcon
                          icon={resultado.icon}
                          className="text-lg"
                          style={{ color: projetoAtual.cor }}
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {resultado.valor}
                    </div>
                    <div className="text-xs text-gray-600">
                      {resultado.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações do projeto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {projetoAtual.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {projetoAtual.descricao}
                </p>
              </div>

              {/* Tecnologias utilizadas */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ color: projetoAtual.cor }}
                  />
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-3">
                  {projetoAtual.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: `${projetoAtual.cor}10`,
                        color: projetoAtual.cor,
                        border: `1px solid ${projetoAtual.cor}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desafios e Soluções */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Desafios Superados
                </h4>
                <ul className="space-y-3">
                  {[
                    "Migração de plataforma sem interrupção nas vendas",
                    "Otimização de performance para mobile",
                    "Integração com múltiplos sistemas de pagamento",
                  ].map((desafio, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: `${projetoAtual.cor}20` }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="w-3 h-3"
                          style={{ color: projetoAtual.cor }}
                        />
                      </div>
                      <span className="text-gray-600">{desafio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={projetoAtual.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
                    style={{ backgroundColor: projetoAtual.cor }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Ver Case Completo
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </a>

                  <a
                    href={`https://wa.me/5562991502275?text=${encodeURIComponent(
                      `Quero um projeto parecido com esse: ${projetoAtual.titulo}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border-2 inline-flex items-center justify-center"
                    style={{
                      borderColor: projetoAtual.cor,
                      color: projetoAtual.cor,
                      backgroundColor: "transparent",
                    }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Solicitar Projeto Similar
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas gerais */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          {/* CTA final */}
          <div className="mt-12 text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const message = `Olá, quero meu projeto de sucesso. Vi este link: ${window.location.href}`;
                const waUrl = `https://wa.me/5562991502275?text=${encodeURIComponent(
                  message,
                )}`;
                window.open(waUrl, "_blank");
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${primaryColorDark})`,
                color: "white",
              }}
            >
              <span>Quero Meu Projeto de Sucesso</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Agende uma consulta gratuita e descubra como podemos transformar
              seu negócio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetosDestaque;
