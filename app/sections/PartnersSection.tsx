interface PartnersSectionProps {
  primaryColor?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  primaryColor = "#2563eb", // azul padrão
}) => {
  const partners = [
    {
      name: "Orbitaq",
      logo: "OQ",
      website: "https://orbitaq.com",
      description: "Sites e sistemas",
    },
    // Adicione mais parceiros aqui:
    // { name: "Empresa 2", logo: "E2", website: "#", description: "Marketing" },
    // { name: "Empresa 3", logo: "E3", website: "#", description: "Design" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Nossos <span style={{ color: primaryColor }}>Parceiros</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Empresas que confiam e colaboram conosco
          </p>
        </div>

        {/* Grid de logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                {/* Logo circular cinza */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-3 group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300">
                  <span className="text-gray-700 font-bold text-2xl sm:text-3xl">
                    {partner.logo}
                  </span>
                </div>

                {/* Nome da empresa */}
                <span className="text-gray-800 font-semibold text-base sm:text-lg">
                  {partner.name}
                </span>

                {/* Descrição */}
                {partner.description && (
                  <span className="text-gray-500 text-sm mt-1">
                    {partner.description}
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Mensagem para múltiplos parceiros */}
        {partners.length === 0 && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-6">
              {/* Logos placeholder cinzas */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xl">LOGO</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xl">LOGO</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xl">LOGO</span>
              </div>
            </div>
            <p className="text-gray-500 mt-6">Em breve novos parceiros</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
