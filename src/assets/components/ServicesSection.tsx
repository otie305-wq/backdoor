import React from "react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  title: string;
  description: string;
  iconClass: string;
  iconColorClass: string;
  iconBgGradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconClass,
  iconColorClass,
  iconBgGradient,
}) => {
  return (
    <div className="group card min-h-[360px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-acc/50 hover:scale-105">
      <figure className="pt-8 px-8 pb-0 flex justify-center">
        <div
          className={`w-32 h-32 bg-gradient-to-br ${iconBgGradient} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}
        >
          <i className={`${iconClass} text-4xl ${iconColorClass}`}></i>
        </div>
      </figure>
      <div className="card-body p-8 text-center">
        <h3 className="card-title mx-auto text-h5 text-white mb-4">{title}</h3>
        <p className="text-pSm text-grayTone leading-relaxed mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services: ServiceCardProps[] = [
    {
      title: t("services.list.web.title"),
      description: t("services.list.web.desc"),
      iconClass: "fas fa-code",
      iconColorClass: "text-white",
      iconBgGradient: "from-acc/20 to-acc/40",
    },
    {
      title: t("services.list.mobile.title"),
      description: t("services.list.mobile.desc"),
      iconClass: "fas fa-mobile-alt",
      iconColorClass: "text-blue-400",
      iconBgGradient: "from-blue-500/20 to-blue-500/40",
    },
    {
      title: t("services.list.design.title"),
      description: t("services.list.design.desc"),
      iconClass: "fas fa-palette",
      iconColorClass: "text-purple-400",
      iconBgGradient: "from-purple-500/20 to-purple-500/40",
    },
    {
      title: t("services.list.cloud.title"),
      description: t("services.list.cloud.desc"),
      iconClass: "fas fa-cloud",
      iconColorClass: "text-cyan-400",
      iconBgGradient: "from-cyan-500/20 to-cyan-500/40",
    },
    {
      title: t("services.list.api.title"),
      description: t("services.list.api.desc"),
      iconClass: "fas fa-cogs",
      iconColorClass: "text-green-400",
      iconBgGradient: "from-green-500/20 to-green-500/40",
    },
    {
      title: t("services.list.consulting.title"),
      description: t("services.list.consulting.desc"),
      iconClass: "fas fa-lightbulb",
      iconColorClass: "text-yellow-400",
      iconBgGradient: "from-yellow-500/20 to-yellow-500/40",
    },
  ];

  return (
    <section
      className="servicesSection bg-pr text-white relative overflow-hidden mb-10 scroll-mt-16"
      id="servicesSection"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-72 h-72 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 border border-acc rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-grayTone rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[70vh] relative z-10">
        {/* Header */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            {t("services.header")}
          </h2>
          <p className="text-p py-6 mb-5 max-w-3xl mx-auto text-grayTone leading-relaxed">
            {t("services.desc")}
          </p>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
