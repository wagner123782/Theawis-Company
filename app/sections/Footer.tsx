"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCopyright,
  faArrowRight,
  faShieldAlt,
  faRocket,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Cores personalizadas
  const primaryColor = "#bb8529"; // rgb(187, 133, 41)
  const primaryColorLight = "#d49a3a";
  const primaryColorDark = "#9c6c21";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      {/* Elementos decorativos */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: primaryColorLight,
              opacity: Math.random() * 0.2 + 0.05,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Seção principal do footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Coluna 1 - Logo e Sobre */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-auto h-auto">
                  <img
                    src="/img/WhatsApp_Image_2026-01-17_at_23.30.02-removebg-preview.png"
                    alt="Theawis Company"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Transformamos ideias em realidade digital. Especialistas em
                estratégia, design e tecnologia para negócios que desejam se
                destacar no mercado digital.
              </p>

              <div className="space-y-3">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: primaryColor }}
                  />
                  O que pensamos
                </h3>
                <p className="text-gray-400 text-sm italic">
                  "Acreditamos na inovação como ferramenta de transformação e no
                  design como expressão da excelência."
                </p>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div className="space-y-6">
              <h3
                className="text-white font-bold text-lg border-l-4 pl-3"
                style={{ borderColor: primaryColor }}
              >
                Navegação
              </h3>

              <ul className="space-y-3">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Serviços", href: "#servicos" },
                  { label: "Portfólio", href: "#portfolio" },
                  { label: "Sobre Nós", href: "#sobre" },
                  { label: "Metodologia", href: "#metodologia" },
                  { label: "Depoimentos", href: "#depoimentos" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        style={{ color: primaryColor }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold text-sm mb-3">
                  Certificações
                </h4>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-gray-400">
                    Google Partner
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-gray-400">
                    Meta Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Serviços */}
            <div className="space-y-6">
              <h3
                className="text-white font-bold text-lg border-l-4 pl-3"
                style={{ borderColor: primaryColor }}
              >
                Nossos Serviços
              </h3>

              <ul className="space-y-3">
                {[
                  { label: "Estratégia Digital", icon: faRocket },
                  { label: "Design & Branding", icon: faUsers },
                  { label: "Marketing Digital", icon: faShieldAlt },
                  { label: "Desenvolvimento Web", icon: faLightbulb },
                  { label: "E-commerce", icon: faRocket },
                  { label: "Consultoria", icon: faUsers },
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="w-4 h-4"
                        style={{ color: primaryColorLight }}
                      />
                    </div>
                    <span className="text-gray-400 text-sm">
                      {service.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="w-5 h-5"
                    style={{ color: primaryColor }}
                  />
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Segurança Garantida
                    </p>
                    <p className="text-gray-400 text-xs">
                      Dados protegidos e privacidade respeitada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 4 - Contato */}
            <div className="space-y-6">
              <h3
                className="text-white font-bold text-lg border-l-4 pl-3"
                style={{ borderColor: primaryColor }}
              >
                Atendimento
              </h3>

              <div className="space-y-4">
                {/* Telefone */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-4 h-4"
                      style={{ color: primaryColorLight }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <a
                      href="tel:+5562991502275"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      +55 (62) 99150-2275
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Seg a Sex: 9h-18h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 h-4"
                      style={{ color: primaryColorLight }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:theawiscompany@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      theawiscompany@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-4 h-4"
                      style={{ color: primaryColorLight }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Localização</p>
                    <p className="text-gray-400">Goiânia - GO, Brasil</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Atendimento nacional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="my-12 border-t border-white/10" />

          {/* Redes Sociais e Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Redes Sociais */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">
                Conecte-se Conosco
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: faInstagram,
                    label: "Instagram",
                    color: "#E4405F",
                    href: "#",
                  },

                  {
                    icon: faYoutube,
                    label: "YouTube",
                    color: "#FF0000",
                    href: "#",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-white/20">
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-2 py-1 bg-black/80 rounded text-xs text-white whitespace-nowrap">
                        {social.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-white/10 py-8" id="contato">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Termos de Uso
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Cookies
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Mapa do Site
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-400 text-sm">
                  Sistema Online • 24/7
                </span>
              </div>
            </div>

            {/* Aviso de direitos */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-gray-500 text-xs">
                Todas as marcas, logos e conteúdos são propriedade da THEAWIS
                COMPANY®.
                <br />
                Proibida a reprodução total ou parcial sem autorização expressa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
