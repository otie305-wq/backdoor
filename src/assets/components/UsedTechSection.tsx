import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

interface TechCardProps {
  title: string;
  description: string;
  iconClass: string;
  iconColorClass: string;
  iconBgGradient: string;
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  iconClass,
  iconColorClass,
  iconBgGradient,
}) => {
  const isRTL = i18n.language === "ar";

  return (
    <div className="group card border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-acc/50 hover:scale-105">
      <div className="pt-6 px-6 pb-0 flex justify-start">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${iconBgGradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}
        >
          <i className={`${iconClass} text-xl ${iconColorClass}`}></i>
        </div>
      </div>
      <div
        className={`card-body p-4 text-left ${isRTL ? "text-right" : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h3 className="card-title text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-grayTone leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const UsedTechSection: React.FC = () => {
  const { t } = useTranslation();

  const techList = [
    {
      title: t("usedTech.cards.react.title"),
      description: t("usedTech.cards.react.desc"),
      iconClass: "fab fa-react",
      iconColorClass: "text-white",
      iconBgGradient: "from-acc/20 to-acc/40",
    },
    {
      title: t("usedTech.cards.nextjs.title"),
      description: t("usedTech.cards.nextjs.desc"),
      iconClass: "fab fa-js-square",
      iconColorClass: "text-black",
      iconBgGradient: "from-white/20 to-white/40",
    },
    {
      title: t("usedTech.cards.typescript.title"),
      description: t("usedTech.cards.typescript.desc"),
      iconClass: "fab fa-js-square",
      iconColorClass: "text-blue-400",
      iconBgGradient: "from-blue-500/20 to-blue-500/40",
    },
    {
      title: t("usedTech.cards.tailwind.title"),
      description: t("usedTech.cards.tailwind.desc"),
      iconClass: "fab fa-css3-alt",
      iconColorClass: "text-cyan-400",
      iconBgGradient: "from-cyan-500/20 to-cyan-500/40",
    },
    {
      title: t("usedTech.cards.node.title"),
      description: t("usedTech.cards.node.desc"),
      iconClass: "fab fa-node-js",
      iconColorClass: "text-green-400",
      iconBgGradient: "from-green-500/20 to-green-500/40",
    },
  ];

  return (
    <section
      className="usedTechSection bg-pr text-white relative overflow-hidden mb-10 scroll-mt-16"
      id="usedTechSection"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[70vh] relative z-10">
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            {t("usedTech.header")}
          </h2>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard {...techList[0]} />

            {/* Powered By */}
            <div className="order-first lg:order-none">
              <img
                src="/pb4.svg"
                alt="Powered By"
                className="max-h-200 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>

            {techList.slice(1).map((tech, index) => (
              <TechCard key={index + 1} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechSection;
