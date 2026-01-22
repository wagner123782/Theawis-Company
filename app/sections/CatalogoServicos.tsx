"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBullseye,
  faPalette,
  faStore,
  faMobileAlt,
  faSearch,
  faChartLine,
  faVideo,
  faUsers,
  faFileAlt,
  faShoppingBag,
  faArrowRight,
  faFilter,
  faSpinner,
  faStar,
  faEye,
  faCopy,
  faCheck,
  faShare,
  faDownload,
  faTimes,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect, useRef } from "react";

interface Categoria {
  id: string;
  nome: string;
  icone: any;
  cor: string;
}

interface Servico {
  id: number;
  categoria: string;
  icone: any;
  titulo: string;
  descricao: string;
  tempo: string;
  investimento: string;
  destaque: boolean;
  foto: string;
  rotacao: string;
  cor: string;
}

const CatalogoServicos = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("todos");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [servicosSelecionados, setServicosSelecionados] = useState<number[]>(
    [],
  );
  const [modalAberto, setModalAberto] = useState(false);
  const [textoWhatsApp, setTextoWhatsApp] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [filtroAberto, setFiltroAberto] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const primaryColor = "#bb8529";
  const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#8a5f1e";

  const categorias: Categoria[] = [
    { id: "todos", nome: "Todos", icone: faFilter, cor: "#bb8529" },
    { id: "estrategia", nome: "Estratégia", icone: faBullseye, cor: "#c64600" },
    { id: "design", nome: "Design", icone: faPalette, cor: "#9141ac" },
    { id: "marketing", nome: "Marketing", icone: faChartLine, cor: "#26a269" },
    { id: "desenvolvimento", nome: "Dev", icone: faMobileAlt, cor: "#1a5fb4" },
  ];

  const servicos: Servico[] = [
    {
      id: 1,
      categoria: "estrategia",
      icone: faBullseye,
      titulo: "Planejamento Estratégico",
      descricao: "Roadmap completo com objetivos SMART e métricas de sucesso.",
      tempo: "4-6 semanas",
      investimento: "Sob consulta",
      destaque: true,
      foto: "📊",
      rotacao: "rotate-y-180",
      cor: "#c64600",
    },
    {
      id: 2,
      categoria: "design",
      icone: faPalette,
      titulo: "Identidade Visual",
      descricao: "Logo, cores, tipografia e manual da marca completo.",
      tempo: "3-4 semanas",
      investimento: "R$ 3.900+",
      destaque: true,
      foto: "🎨",
      rotacao: "rotate-x-180",
      cor: "#9141ac",
    },
    {
      id: 3,
      categoria: "design",
      icone: faFileAlt,
      titulo: "UI/UX Design",
      descricao: "Design de interfaces focado em experiência do usuário.",
      tempo: "2-3 semanas",
      investimento: "R$ 2.500+",
      destaque: false,
      foto: "✨",
      rotacao: "rotate-y-180",
      cor: "#a855f7",
    },
    {
      id: 4,
      categoria: "marketing",
      icone: faChartLine,
      titulo: "Gestão de Tráfego",
      descricao:
        "Campanhas no Google Ads e redes sociais com otimização constante.",
      tempo: "Contínuo",
      investimento: "R$ 1.900/mês",
      destaque: true,
      foto: "🚀",
      rotacao: "rotate-x-180",
      cor: "#26a269",
    },
    {
      id: 5,
      categoria: "marketing",
      icone: faSearch,
      titulo: "SEO Completo",
      descricao: "Otimização orgânica para melhor posicionamento no Google.",
      tempo: "Contínuo",
      investimento: "R$ 1.500/mês",
      destaque: false,
      foto: "🔍",
      rotacao: "rotate-y-180",
      cor: "#10b981",
    },
    {
      id: 6,
      categoria: "desenvolvimento",
      icone: faStore,
      titulo: "E-commerce",
      descricao: "Lojas virtuais com design responsivo e alta conversão.",
      tempo: "6-8 semanas",
      investimento: "R$ 5.900+",
      destaque: true,
      foto: "🛒",
      rotacao: "rotate-x-180",
      cor: "#1a5fb4",
    },
    {
      id: 7,
      categoria: "desenvolvimento",
      icone: faMobileAlt,
      titulo: "App Mobile",
      descricao: "Aplicativos nativos para iOS e Android com design exclusivo.",
      tempo: "8-12 semanas",
      investimento: "R$ 8.900+",
      destaque: false,
      foto: "📱",
      rotacao: "rotate-y-180",
      cor: "#3b82f6",
    },
    {
      id: 8,
      categoria: "marketing",
      icone: faVideo,
      titulo: "Conteúdo & Vídeo",
      descricao: "Produção de conteúdo estratégico e vídeos promocionais.",
      tempo: "Contínuo",
      investimento: "R$ 2.900/mês",
      destaque: false,
      foto: "🎥",
      rotacao: "rotate-x-180",
      cor: "#8b5cf6",
    },
    {
      id: 9,
      categoria: "estrategia",
      icone: faUsers,
      titulo: "Consultoria Mensal",
      descricao: "Acompanhamento estratégico e mentoria para sua equipe.",
      tempo: "Contínuo",
      investimento: "R$ 2.900/mês",
      destaque: false,
      foto: "👥",
      rotacao: "rotate-y-180",
      cor: "#f97316",
    },
  ];

  const servicosFiltrados =
    categoriaAtiva === "todos"
      ? servicos
      : servicos.filter((servico) => servico.categoria === categoriaAtiva);

  const toggleServicoSelecionado = (id: number) => {
    setServicosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selecionarTodosDestaques = () => {
    const destaques = servicos.filter((s) => s.destaque).map((s) => s.id);
    setServicosSelecionados(destaques);
  };

  const limparSelecao = () => {
    setServicosSelecionados([]);
  };

  const gerarTextoWhatsApp = () => {
    const selecionados = servicos.filter((s) =>
      servicosSelecionados.includes(s.id),
    );

    let texto = `🌟 *COTATION DE SERVIÇOS - THEAWIS COMPANY* 🌟\n\n`;
    texto += `Olá! Segue a lista de serviços selecionados:\n\n`;

    selecionados.forEach((servico, index) => {
      texto += `*${index + 1}. ${servico.titulo}*\n`;
      texto += `📋 ${servico.descricao}\n`;
      texto += `⏱️ Tempo: ${servico.tempo}\n`;
      texto += `💰 Investimento: ${servico.investimento}\n`;
      texto += `🎨 Categoria: ${categorias.find((c) => c.id === servico.categoria)?.nome}\n\n`;
    });

    texto += `📊 *Resumo da Cotação:*\n`;
    texto += `• Total de serviços: ${selecionados.length}\n`;
    texto += `• Destaques incluídos: ${selecionados.filter((s) => s.destaque).length}\n\n`;
    texto += `💬 _Interessado em algum desses serviços? Podemos agendar uma reunião para detalhar cada um!_`;
    texto += `\n\n📱 Enviado via Catálogo Digital Theawis Company`;

    return texto;
  };

  const abrirModalWhatsApp = () => {
    if (servicosSelecionados.length === 0) {
      selecionarTodosDestaques();
    }
    const texto = gerarTextoWhatsApp();
    setTextoWhatsApp(texto);
    setModalAberto(true);
  };

  const enviarWhatsApp = () => {
    setEnviando(true);
    const numero = "5562991502275";
    const texto = encodeURIComponent(textoWhatsApp);
    const url = `https://wa.me/${numero}?text=${texto}`;

    // Efeito visual antes de abrir
    setTimeout(() => {
      window.open(url, "_blank");
      setEnviando(false);
      setModalAberto(false);
      setServicosSelecionados([]);
    }, 800);
  };

  const copiarTexto = async () => {
    try {
      await navigator.clipboard.writeText(textoWhatsApp);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar texto:", err);
    }
  };

  // Contador de serviços selecionados
  const totalSelecionados = servicosSelecionados.length;
  const totalDestaques = servicos.filter((s) => s.destaque).length;

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      id="servicos"
    >
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: primaryColor }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(187,133,41,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: primaryColorLight,
              opacity: Math.random() * 0.3 + 0.1,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border mb-6"
            style={{ borderColor: `${primaryColor}30` }}
          >
            <span
              className="text-sm font-medium flex items-center gap-2"
              style={{ color: primaryColorLight }}
            >
              <FontAwesomeIcon icon={faBolt} className="w-4 h-4" />
              Catálogo Premium Interativo
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Nossos</span>{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColorLight})`,
              }}
            >
              Serviços Exclusivos
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Selecione os serviços que mais se adequam ao seu negócio e receba
            uma cotação personalizada por WhatsApp.
          </p>

          {/* Contador de seleção */}
          {totalSelecionados > 0 && (
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-sm mb-8 animate-fade-in"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold">
                {totalSelecionados}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">
                  {totalSelecionados} serviço
                  {totalSelecionados !== 1 ? "s" : ""} selecionado
                  {totalSelecionados !== 1 ? "s" : ""}
                </p>
                <p className="text-gray-400 text-sm">
                  Pronto para enviar por WhatsApp
                </p>
              </div>
              <button
                onClick={abrirModalWhatsApp}
                className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                Enviar
              </button>
            </div>
          )}
        </div>

        {/* Filtros com funcionalidade de seleção */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`
                  px-5 py-3 rounded-xl border text-sm font-medium
                  transition-all duration-300 flex items-center gap-2
                  ${
                    categoriaAtiva === categoria.id
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }
                `}
                style={
                  categoriaAtiva === categoria.id
                    ? {
                        boxShadow: `0 0 20px ${categoria.cor}40`,
                      }
                    : {}
                }
              >
                <FontAwesomeIcon icon={categoria.icone} className="w-4 h-4" />
                {categoria.nome}
              </button>
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex items-center gap-3">
            <button
              onClick={selecionarTodosDestaques}
              className="px-4 py-3 rounded-xl border border-white/10 text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2 group"
              style={{
                backgroundColor: `${primaryColor}15`,
              }}
            >
              <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
              <span className="hidden sm:inline">Selecionar Destaques</span>
              <span className="sm:hidden">Destaques</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                {totalDestaques}
              </span>
            </button>

            <button
              onClick={limparSelecao}
              className="px-4 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
              <span className="hidden sm:inline">Limpar</span>
            </button>
          </div>
        </div>

        {/* Grid de Serviços com Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {servicosFiltrados.map((servico) => {
            const selecionado = servicosSelecionados.includes(servico.id);

            return (
              <div
                key={servico.id}
                className={`group relative transition-all duration-300 ${
                  selecionado ? "scale-[1.02]" : ""
                }`}
              >
                {/* Checkbox de seleção */}
                <div className="absolute -top-2 -right-2 z-20">
                  <button
                    onClick={() => toggleServicoSelecionado(servico.id)}
                    className={`
                      w-10 h-10 rounded-full border-2 flex items-center justify-center
                      transition-all duration-300 transform hover:scale-110
                      ${selecionado ? "scale-110" : "scale-100"}
                    `}
                    style={{
                      backgroundColor: selecionado
                        ? servico.cor
                        : "rgba(0,0,0,0.7)",
                      borderColor: selecionado
                        ? servico.cor
                        : "rgba(255,255,255,0.2)",
                      boxShadow: selecionado
                        ? `0 0 20px ${servico.cor}80`
                        : "none",
                    }}
                  >
                    {selecionado ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 h-5 text-white"
                      />
                    ) : (
                      <div className="w-5 h-5 border-2 border-white/30 rounded" />
                    )}
                  </button>
                </div>

                {/* Card do Serviço */}
                <div
                  className={`
                    h-full rounded-2xl overflow-hidden border-2
                    bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm
                    transition-all duration-300
                    ${selecionado ? "border-white/40" : "border-white/10"}
                    ${hoveredCard === servico.id ? "border-white/30" : ""}
                  `}
                  onMouseEnter={() => setHoveredCard(servico.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Header com emoji */}
                  <div className="h-48 relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20 transition-all duration-500 group-hover:opacity-30"
                      style={{ backgroundColor: servico.cor }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl transform transition-transform duration-500 group-hover:scale-110">
                        {servico.foto}
                      </div>
                    </div>

                    {/* Badge destaque */}
                    {servico.destaque && (
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold shadow-lg">
                          <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                          <span>DESTAQUE</span>
                        </div>
                      </div>
                    )}

                    {/* Categoria */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                        style={{
                          backgroundColor: `${servico.cor}30`,
                          color: servico.cor,
                        }}
                      >
                        {
                          categorias.find((c) => c.id === servico.categoria)
                            ?.nome
                        }
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${servico.cor}20` }}
                      >
                        <FontAwesomeIcon
                          icon={servico.icone}
                          className="text-xl"
                          style={{ color: servico.cor }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {servico.titulo}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {servico.descricao}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <div className="text-xs text-gray-400 mb-1">Tempo</div>
                        <div className="text-white font-semibold">
                          {servico.tempo}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <div className="text-xs text-gray-400 mb-1">
                          Investimento
                        </div>
                        <div
                          className="font-semibold"
                          style={{ color: servico.cor }}
                        >
                          {servico.investimento}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleServicoSelecionado(servico.id)}
                        className={`
                          flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300
                          ${selecionado ? "opacity-80" : "hover:bg-white/10"}
                        `}
                        style={
                          selecionado
                            ? {
                                backgroundColor: servico.cor,
                                color: "white",
                              }
                            : {
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: "white",
                              }
                        }
                      >
                        {selecionado ? "Selecionado ✓" : "Selecionar"}
                      </button>
                      <button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="w-4 h-4 text-white"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de Ação Flutuante */}
        <div className="sticky bottom-6 lg:bottom-8 z-50 max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 rounded-2xl blur-xl" />
            <div
              className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 shadow-2xl"
              style={{
                boxShadow: `0 20px 60px rgba(37, 211, 102, 0.2)`,
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        Receba sua cotação por WhatsApp
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Selecione os serviços e envie para nossa equipe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {totalSelecionados}
                    </div>
                    <div className="text-xs text-gray-400">Selecionados</div>
                  </div>

                  <button
                    onClick={abrirModalWhatsApp}
                    disabled={totalSelecionados === 0}
                    className={`
                      px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
                      flex items-center gap-3 relative overflow-hidden group
                      ${totalSelecionados === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
                    `}
                    style={{
                      background: `linear-gradient(135deg, #25D366, #128C7E)`,
                      color: "white",
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                      Enviar para WhatsApp
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal WhatsApp */}
      {modalAberto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gray-900/95 backdrop-blur-xl p-6 lg:p-8 shadow-2xl">
              {/* Header do Modal */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      Enviar para WhatsApp
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {totalSelecionados} serviço
                      {totalSelecionados !== 1 ? "s" : ""} selecionado
                      {totalSelecionados !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setModalAberto(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-5 h-5 text-white"
                  />
                </button>
              </div>

              {/* Pré-visualização do texto */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">
                    Pré-visualização:
                  </h4>
                  <button
                    onClick={copiarTexto}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <FontAwesomeIcon
                      icon={copiado ? faCheck : faCopy}
                      className="w-4 h-4"
                      style={{ color: copiado ? "#10B981" : "white" }}
                    />
                    {copiado ? "Copiado!" : "Copiar texto"}
                  </button>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 max-h-96 overflow-y-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap text-sm">
                    {textoWhatsApp}
                  </pre>
                </div>
              </div>

              {/* Serviços selecionados */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">
                  Serviços incluídos:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicos
                    .filter((s) => servicosSelecionados.includes(s.id))
                    .map((servico) => (
                      <div
                        key={servico.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${servico.cor}20` }}
                        >
                          <FontAwesomeIcon
                            icon={servico.icone}
                            className="w-5 h-5"
                            style={{ color: servico.cor }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            {servico.titulo}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {servico.investimento}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleServicoSelecionado(servico.id)}
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 flex items-center justify-center"
                        >
                          <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={enviarWhatsApp}
                  disabled={enviando}
                  className="flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-3 relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, #25D366, #128C7E)`,
                    color: "white",
                  }}
                >
                  {enviando ? (
                    <>
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="w-5 h-5 animate-spin"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                      Abrir WhatsApp
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <button
                  onClick={() => setModalAberto(false)}
                  className="px-8 py-4 rounded-xl border-2 border-white/10 text-white hover:border-white/30 transition-all duration-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default CatalogoServicos;
