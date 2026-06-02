import React from "react";
import { useTranslation } from "react-i18next";

const FooterSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="footerSection">
      <footer className="footer footer-horizontal footer-center bg-pr text-white rounded p-10 scroll-mt-16">
        {/* <nav dir="ltr">
          <div className="grid grid-flow-col gap-6 text-xl">
            <a href="#" aria-label={t("footer.social.twitter")}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label={t("footer.social.youtube")}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label={t("footer.social.facebook")}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </nav> */}
        <aside>
          <p>
            © {new Date().getFullYear()} -{" "}
            {t("footer.rights", { company: "backdoor" })}
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default FooterSection;
