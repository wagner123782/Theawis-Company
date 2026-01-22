"use client";

const PorqueEscolher = () => {
  const primaryColor = "#bb8529";

  const beneficios = [
    {
      id: 1,
      titulo: "Resultados Comprovados",
      descricao:
        "Entregamos métricas claras e crescimento mensurável para cada projeto.",
      pontos: [
        "ROI transparente",
        "Métricas em tempo real",
        "Crescimento sustentável",
      ],
    },
    {
      id: 2,
      titulo: "Expertise Especializada",
      descricao:
        "Time com anos de experiência em transformação digital e cases de sucesso.",
      pontos: [
        "Equipe certificada",
        "Metodologia própria",
        "Cases comprovados",
      ],
    },
    {
      id: 3,
      titulo: "Parceria Completa",
      descricao:
        "Acompanhamos do planejamento à execução, com suporte contínuo.",
      pontos: [
        "Processo end-to-end",
        "Suporte dedicado",
        "Relatórios periódicos",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Por que escolher
            <span className="font-medium block" style={{ color: primaryColor }}>
              a Theawis Company
            </span>
          </h2>
          <p className="text-gray-600">
            Diferenciais que fazem nossa abordagem ser única e eficaz
          </p>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div key={beneficio.id} className="group">
              <div className="h-full p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200">
                {/* Número do card */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    0{index + 1}
                  </div>
                  <div className="h-px flex-1 bg-gray-200 group-hover:bg-gray-300 transition-colors" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {beneficio.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 text-sm mb-6">
                  {beneficio.descricao}
                </p>

                {/* Pontos chave */}
                <ul className="space-y-2">
                  {beneficio.pontos.map((ponto, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <span className="text-sm text-gray-700">{ponto}</span>
                    </li>
                  ))}
                </ul>

                {/* Divisor sutil */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Diferencial exclusivo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Minimalista */}
      </div>
    </section>
  );
};

export default PorqueEscolher;
