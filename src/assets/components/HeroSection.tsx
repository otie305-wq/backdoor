import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="heroSection mb-10" id="hero">
      <div className="hero bg-pr text-white min-h-screen relative overflow-hidden">
        <div className="hero-content text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-h1 font-heading font-bold tracking-tighter mb-10 bg-gradient-to-r from-white via-acc to-white bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-p py-6 mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              {t("hero.description")}
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn bg-white text-pr font-semibold px-8 py-3 rounded-lg hover:bg-grayTone hover:scale-105 transition-all duration-300 shadow-lg border-0">
                {t("hero.getStarted")}
              </button>
              <button className="btn btn-outline text-white border-white px-8 py-3 rounded-lg hover:bg-grayTone hover:text-pr hover:border-white transition-all duration-300 hover:scale-105">
                {t("hero.learnMore")}
              </button>
            </div> */}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-acc to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
