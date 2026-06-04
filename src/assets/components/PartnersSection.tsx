import React from "react";
import { useTranslation } from "react-i18next";
import batechLogo from "../images/BATECH.svg";

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="partnersSection bg-pr text-white py-16 mb-10 scroll-mt-16"
      id="partnersSection"
    >
      <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            {t("partners.header")}
          </h2>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://ba-tech.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={batechLogo}
              alt="BA Tech"
              className="h-36 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
