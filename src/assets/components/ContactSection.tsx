import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactPopup from "./ContactPopup";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="contactSection bg-pr py-16 scroll-mt-16" id="contact">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="relative bg-pr rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 items-center gap-6 p-8">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {t("contact.question")}
              </h3>
              <p className="text-gray-300">{t("contact.description")}</p>
            </div>

            {/* Button */}
            <div className="flex justify-start sm:justify-end">
              <button
                className="btn bg-white text-pr font-semibold px-8 py-3 rounded-lg hover:bg-grayTone hover:scale-105 transition-all duration-300 shadow-lg border-0"
                onClick={() => setShowPopup(true)}
              >
                {t("contact.button")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default ContactSection;
