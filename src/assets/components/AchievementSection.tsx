import React from "react";
import { useTranslation } from "react-i18next";
import WorldMap from "./WorldMap";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="card bg-pr flex-grow shadow-sm w-full h-full">
    <div className="card-body pt-6 px-6 pb-0 text-center">
      <h2 className="card-title mx-auto text-h5">{value}</h2>
      <p className="text-pSm">{label}</p>
    </div>
  </div>
);

const AchievementSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "500+", label: t("achievement.stats.worker") },
    { value: "120+", label: t("achievement.stats.projects") },
    { value: "80+", label: t("achievement.stats.clients") },
    { value: "30+", label: t("achievement.stats.countries") },
  ];

  return (
    <section
      className="achievementSection mb-10 scroll-mt-16"
      id="achievementSection"
    >
      <div className="flex flex-col bg-pr text-white items-center justify-center gap-4 p-4 min-h-[70vh]">
        {/* Header */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            {t("achievement.header")}
          </h2>
          <p className="text-p py-6 mb-5 max-w-3xl mx-auto text-grayTone leading-relaxed">
            {t("achievement.description")}
          </p>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Chart Placeholder */}
        <div className="flex flex-row items-center justify-center w-full max-w-[1000px] mx-auto">
          <WorldMap />
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-4 p-4 w-full max-w-[1200px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 min-w-[200px] max-w-[250px]">
              <StatCard value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
