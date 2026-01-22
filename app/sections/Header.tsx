"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTimes,
  faBars,
  faHome,
  faBriefcase,
  faUsers,
  faEnvelope,
  faPhone,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Atualizar seção ativa
      const sections = ["inicio", "servicos", "sobre", "contato"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar sidebar ao clicar fora (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const menuButton = document.getElementById("menu-button");

      if (
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Bloquear scroll quando sidebar está aberta
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Cores personalizadas
  const primaryColor = "#bb8529";
  const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#9c6c21";

  const navItems = [
    { id: "inicio", label: "Início", icon: faHome },
    { id: "servicos", label: "Serviços", icon: faBriefcase },
    { id: "sobre", label: "Sobre", icon: faUsers },
    { id: "contato", label: "Contato", icon: faEnvelope },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajuste para o header fixo
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-xl py-3 border-b border-white/5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="/img/WhatsApp_Image_2026-01-17_at_23.30.02-removebg-preview.png"
                alt="Theawis Company"
                loading="lazy"
                className={`transition-all duration-500 ease-in-out object-contain
                  ${isScrolled ? "h-12 max-w-[180px]" : "h-16 max-w-[200px]"}`}
              />
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-white/90 hover:text-white drop-shadow-md"
                  } ${activeSection === item.id ? "text-white font-semibold" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeSection === item.id
                          ? primaryColorLight
                          : isScrolled
                            ? "white"
                            : primaryColorLight,
                    }}
                  />
                </a>
              ))}

              {/* Botão Fale Conosco */}
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contato");
                }}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 inline-block text-center hover:scale-105 hover:shadow-xl ${
                  isScrolled
                    ? `bg-gradient-to-r from-[#bb8529] to-[#9c6c21] text-white shadow-lg hover:from-[#d49a3a] hover:to-[#bb8529]`
                    : "bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-[#bb8529] hover:border-[#bb8529]/50 shadow-lg"
                }`}
                style={
                  isScrolled
                    ? {
                        background: `linear-gradient(135deg, ${primaryColor}, ${primaryColorDark})`,
                      }
                    : {}
                }
              >
                Fale Conosco
              </a>
            </nav>

            {/* Menu Mobile Button */}
            <button
              id="menu-button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`md:hidden p-3 rounded-lg transition-all duration-300 relative z-50 ${
                isScrolled
                  ? "bg-white/5 hover:bg-white/10 border border-white/10"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20"
              } ${isSidebarOpen ? "!bg-white/20" : ""}`}
              aria-label="Menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isSidebarOpen ? "rotate-45 top-3 bg-white" : "bg-white"
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isSidebarOpen ? "opacity-0" : "opacity-100 bg-white"
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isSidebarOpen ? "-rotate-45 top-3 bg-white" : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay para mobile */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 md:hidden ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Mobile */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-900 to-black border-l border-white/10 shadow-2xl transition-all duration-300 z-50 md:hidden ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Header da Sidebar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/img/WhatsApp_Image_2026-01-17_at_23.30.02-removebg-preview.png"
              alt="Theawis Company"
              className="h-12 max-w-[150px] object-contain"
            />
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navegação Mobile */}
        <nav className="p-6 space-y-2">
          <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 font-semibold">
              Navegação
            </h3>
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 group ${
                    activeSection === item.id
                      ? "bg-white/10 border-l-4"
                      : "hover:bg-white/5"
                  }`}
                  style={{
                    borderLeftColor:
                      activeSection === item.id ? primaryColor : "transparent",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-[#bb8529]/20 to-[#9c6c21]/20"
                          : "bg-white/5"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`w-4 h-4 transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-[#d49a3a]"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div>
                      <span
                        className={`font-medium block ${
                          activeSection === item.id
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`w-4 h-4 transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-[#d49a3a]"
                        : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
              Fale direto no WhatsApp
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Converse com nossa equipe para tirar dúvidas
            </p>
            <a
              href="https://wa.me/5562991502275"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsSidebarOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              Abrir WhatsApp
            </a>
          </div>

          {/* Contato rápido */}
          <div className="mt-6 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
              Contato Rápido
            </h4>
            <a
              href="tel:+5562991502275"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#bb8529]/20 to-[#9c6c21]/20 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-4 h-4 text-[#d49a3a]"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">Telefone</p>
                <p className="text-white font-medium">(62) 99150-2275</p>
              </div>
            </a>
          </div>
        </nav>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        /* Melhorias para scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Otimização para mobile */
        @media (max-width: 768px) {
          #mobile-sidebar {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
