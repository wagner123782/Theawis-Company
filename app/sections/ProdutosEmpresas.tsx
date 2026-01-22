"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faPalette,
  faStore,
  faMobileAlt,
  faSearch,
  faChartLine,
  faArrowRight,
  faStar,
  faCheckCircle,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

const ProdutosEmpresa = () => {
  const primaryColor = "#bb8529";
  const primaryColorLight = "#d49a3a";

  const produtos = [
    {
      id: 1,
      icone: faRocket,
      titulo: "Estratégia Digital Pro",
      descricao:
        "Planejamento completo com roadmap de 12 meses e métricas precisas.",
      caracteristicas: [
        "Análise de mercado",
        "Planejamento tático",
        "KPIs personalizados",
        "Otimização contínua",
      ],
      preco: "Sob consulta",
      destaque: true,
      cor: primaryColor,
      gradiente: "from-[#bb8529] to-[#9c6c21]",
    },
    {
      id: 2,
      icone: faPalette,
      titulo: "Design & Branding Elite",
      descricao: "Identidade visual premium com manual da marca completo.",
      caracteristicas: [
        "Logo & identidade",
        "UI/UX Design",
        "Sistema de design",
        "Brand guidelines",
      ],
      preco: "A partir de R$ 5.900",
      destaque: false,
      cor: "#c64600",
      gradiente: "from-[#c64600] to-[#a33800]",
    },
    {
      id: 3,
      icone: faStore,
      titulo: "E-commerce Solution",
      descricao:
        "Lojas virtuais completas com alta conversão e experiência única.",
      caracteristicas: [
        "Desenvolvimento custom",
        "Integração pagamentos",
        "SEO otimizado",
        "Analytics avançado",
      ],
      preco: "A partir de R$ 8.900",
      destaque: false,
      cor: "#26a269",
      gradiente: "from-[#26a269] to-[#1e8554]",
    },
    {
      id: 4,
      icone: faMobileAlt,
      titulo: "App Development",
      descricao: "Aplicativos nativos e híbridos com performance excepcional.",
      caracteristicas: [
        "iOS & Android",
        "UI/UX mobile",
        "APIs integradas",
        "Publicação nas stores",
      ],
      preco: "Sob consulta",
      destaque: false,
      cor: "#1a5fb4",
      gradiente: "from-[#1a5fb4] to-[#154b8f]",
    },
    {
      id: 5,
      icone: faSearch,
      titulo: "SEO Performance",
      descricao: "Otimização completa para posicionamento orgânico no Google.",
      caracteristicas: [
        "Pesquisa de keywords",
        "Otimização on-page",
        "Link building",
        "Relatórios mensais",
      ],
      preco: "A partir de R$ 1.900/mês",
      destaque: false,
      cor: "#3584e4",
      gradiente: "from-[#3584e4] to-[#2a6bc0]",
    },
    {
      id: 6,
      icone: faChartLine,
      titulo: "Growth Marketing",
      descricao:
        "Gestão completa de campanhas com foco em crescimento sustentável.",
      caracteristicas: [
        "Gestão de redes",
        "Google Ads",
        "Remarketing",
        "Análise avançada",
      ],
      preco: "A partir de R$ 2.900/mês",
      destaque: false,
      cor: "#9141ac",
      gradiente: "from-[#9141ac] to-[#77358b]",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <div
              className="w-12 h-0.5"
              style={{ backgroundColor: primaryColor }}
            />
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Nossas Soluções
            </span>
            <div
              className="w-12 h-0.5"
              style={{ backgroundColor: primaryColor }}
            />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Produtos &</span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColorLight})`,
              }}
            >
              Serviços Premium
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluções completas desenvolvidas para impulsionar seu negócio no
            digital. Escolha o plano ideal para suas necessidades.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className={`group relative ${produto.destaque ? "lg:col-span-1 md:col-span-2" : ""}`}
            >
              {/* Card de produto */}
              <div
                className={`
                relative h-full rounded-2xl overflow-hidden border transition-all duration-300
                ${
                  produto.destaque
                    ? "border-2 shadow-xl scale-105"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }
              `}
                style={produto.destaque ? { borderColor: produto.cor } : {}}
              >
                {/* Badge destaque */}
                {produto.destaque && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold">
                      <FontAwesomeIcon icon={faCrown} className="w-3 h-3" />
                      <span>MAIS POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Header do card */}
                <div
                  className="p-6 text-white relative overflow-hidden"
                  style={
                    produto.destaque
                      ? {
                          background: `linear-gradient(135deg, ${produto.cor}20, ${produto.cor}40)`,
                        }
                      : { backgroundColor: `${produto.cor}10` }
                  }
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 opacity-20"
                    style={{ backgroundColor: produto.cor }}
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${produto.cor}30` }}
                      >
                        <FontAwesomeIcon
                          icon={produto.icone}
                          className="text-2xl"
                          style={{ color: produto.cor }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {produto.titulo}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className="w-3 h-3"
                              style={{ color: produto.cor }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 bg-white">
                  {/* Descrição */}
                  <p className="text-gray-600 mb-6">{produto.descricao}</p>

                  {/* Características */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Inclui:
                    </h4>
                    <ul className="space-y-2">
                      {produto.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: produto.cor }}
                          />
                          <span className="text-sm text-gray-700">
                            {caracteristica}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preço */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-gray-900">
                      {produto.preco}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {produto.preco.includes("/mês")
                        ? "Cobrança mensal"
                        : "Investimento único"}
                    </div>
                  </div>

                  {/* Botão */}
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      produto.destaque
                        ? "hover:scale-105 hover:shadow-lg"
                        : "hover:bg-gray-50"
                    }`}
                    style={
                      produto.destaque
                        ? {
                            background: `linear-gradient(135deg, ${produto.cor}, ${produto.cor}E6)`,
                            color: "white",
                          }
                        : {
                            border: `2px solid ${produto.cor}`,
                            color: produto.cor,
                            backgroundColor: "transparent",
                          }
                    }
                  >
                    <span>
                      {produto.destaque ? "Contratar Agora" : "Saiba Mais"}
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={`transition-transform ${
                        produto.destaque
                          ? "group-hover/btn:translate-x-1"
                          : "group-hover/btn:translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Comparativo */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Não sabe qual plano escolher?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossos especialistas analisam seu negócio e recomendam a solução
                ideal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-lg"
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Análise Gratuita
                    </h4>
                    <p className="text-sm text-gray-600">
                      Diagnóstico completo do seu negócio
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-lg"
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Recomendação Personalizada
                    </h4>
                    <p className="text-sm text-gray-600">
                      Plano ideal para suas necessidades
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <button
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColorLight})`,
                    color: "white",
                  }}
                >
                  <span>Falar com Consultor</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Sem compromisso • 30 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdutosEmpresa;
