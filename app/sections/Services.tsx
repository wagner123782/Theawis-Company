"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPaintBrush,
  faShoppingCart,
  faMobileAlt,
  faSearch,
  faBullhorn,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Servicos = () => {
  const primaryColor = "#bb8529";

  const services = [
    {
      id: 1,
      icon: faChartLine,
      title: "Estratégia Digital",
      description: "Planejamento para maximizar ROI e crescimento.",
    },
    {
      id: 2,
      icon: faPaintBrush,
      title: "Design & Branding",
      description: "Identidade visual que conta sua história.",
    },
    {
      id: 3,
      icon: faShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais otimizadas para conversão.",
    },
    {
      id: 4,
      icon: faMobileAlt,
      title: "Apps Mobile",
      description: "Aplicativos com performance excepcional.",
    },
    {
      id: 5,
      icon: faSearch,
      title: "SEO & Otimização",
      description: "Posicionamento orgânico no Google.",
    },
    {
      id: 6,
      icon: faBullhorn,
      title: "Marketing Digital",
      description: "Campanhas para gerar leads qualificados.",
    },
  ];

  return (
    <section className="py-20 lg:py-28" id="serviços">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Soluções especializadas para seu negócio digital.
          </p>
        </div>

        {/* Grid minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              {/* Tooltip aparece ao passar o mouse */}
              <div
                id={`tooltip-${service.id}`}
                role="tooltip"
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-3 py-2 rounded-md text-sm bg-black/90 text-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 z-20"
              >
                {service.description}
                <span className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-black/90 rotate-45" />
              </div>

              <div
                className="h-full p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                aria-describedby={`tooltip-${service.id}`}
              >
                <div className="flex items-start gap-4">
                  {/* Ícone simples */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-lg"
                      style={{ color: primaryColor }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {service.description}
                    </p>

                    {/* Link discreto */}
                    <button className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      <span style={{ color: primaryColor }}>Saiba mais</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-3 h-3"
                        style={{ color: primaryColor }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA minimalista */}
      </div>
    </section>
  );
};

export default Servicos;
