import React from "react";
import { useTranslation } from "react-i18next";

interface CardProps {
  iconClass: string;
  iconColorClass: string;
  iconBgGradient: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  iconClass,
  iconColorClass,
  iconBgGradient,
  title,
  description,
}) => (
  <div className="group card border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[240px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-acc/50 hover:scale-105">
    <div className="pt-6 px-6 pb-0 flex justify-center">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${iconBgGradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}
      >
        <i className={`${iconClass} text-2xl ${iconColorClass}`}></i>
      </div>
    </div>
    <div className="card-body pt-6 px-6 pb-4 text-center">
      <h3 className="card-title text-h5 text-white mb-3 mx-auto">{title}</h3>
      <p className="text-pSm text-grayTone leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeaturedSection: React.FC = () => {
  const { t } = useTranslation();

  const cardsData: CardProps[] = [
    {
      iconClass: "fab fa-react",
      iconColorClass: "text-white",
      iconBgGradient: "from-acc/20 to-acc/40",
      title: t("featured.cards.react.title"),
      description: t("featured.cards.react.desc"),
    },
    {
      iconClass: "fas fa-code",
      iconColorClass: "text-blue-400",
      iconBgGradient: "from-blue-500/20 to-blue-500/40",
      title: t("featured.cards.web.title"),
      description: t("featured.cards.web.desc"),
    },
    {
      iconClass: "fas fa-mobile-alt",
      iconColorClass: "text-green-400",
      iconBgGradient: "from-green-500/20 to-green-500/40",
      title: t("featured.cards.mobile.title"),
      description: t("featured.cards.mobile.desc"),
    },
    {
      iconClass: "fas fa-cloud",
      iconColorClass: "text-purple-400",
      iconBgGradient: "from-purple-500/20 to-purple-500/40",
      title: t("featured.cards.cloud.title"),
      description: t("featured.cards.cloud.desc"),
    },
  ];

  return (
    <section
      className="featuredSection bg-pr text-white relative overflow-hidden mb-10 scroll-mt-24"
      id="featuredSection"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-acc rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-grayTone rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[70vh] relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            {t("featured.header")}
          </h2>
          <p className="text-p py-6 mb-5 max-w-3xl mx-auto text-grayTone leading-relaxed">
            {t("featured.desc")}
          </p>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1200px] space-y-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 p-4 w-full">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
