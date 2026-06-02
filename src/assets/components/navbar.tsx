import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import placeholderIcon from "../images/plachholder_icon.jpg";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // auto-close mobile menu
    }
  };

  return (
    <section className="navbarSection" dir="ltr">
      {/* Top Navbar */}
      <div className="navbar bg-pr text-white shadow-sm fixed top-0 left-0 right-0 z-50">
        {/* Left: Hamburger & Logo */}
        <div className="navbar-start">
          {/* Mobile hamburger icon */}
          <div className="lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <a
              className="btn btn-ghost text-xl flex items-center gap-2"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src={placeholderIcon}
                alt="Site Logo"
                className="w-6 h-6 object-cover"
              />
              <span lang="en">{t("siteName")}</span>
            </a>
          </div>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => scrollToSection("hero")}>{t("nav.item1")}</a>
            </li>

            <li className="dropdown dropdown-hover">
              <a tabIndex={0} className="cursor-pointer">
                {t("nav.item2")}
              </a>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-pr text-white rounded-box shadow-lg w-52 mt-4 z-[60]"
              >
                <li>
                  <a onClick={() => scrollToSection("usedTechSection")}>
                    {t("nav.submenu.usedTech")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("featuredSection")}>
                    {t("nav.submenu.featured")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("servicesSection")}>
                    {t("nav.submenu.services")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("achievementSection")}>
                    {t("nav.submenu.achievement")}
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("projectsSection")}>
                    {t("nav.submenu.projects")}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a onClick={() => scrollToSection("contact")}>{t("nav.item3")}</a>
            </li>
          </ul>
        </div>

        {/* Right: Language Button */}
        <div className="navbar-end">
          <button className="btn" onClick={toggleLanguage}>
            {i18n.language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - dropdown below navbar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-pr text-white p-4 shadow-md mt-[4rem] fixed w-full z-40">
          <ul className="menu menu-vertical space-y-2">
            <li>
              <a onClick={() => scrollToSection("hero")}>{t("nav.item1")}</a>
            </li>

            <li>
              <details>
                <summary>{t("nav.item2")}</summary>
                <ul className="pl-4">
                  <li>
                    <a onClick={() => scrollToSection("usedTechSection")}>
                      {t("nav.submenu.usedTech")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection("featuredSection")}>
                      {t("nav.submenu.featured")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection("servicesSection")}>
                      {t("nav.submenu.services")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection("achievementSection")}>
                      {t("nav.submenu.achievement")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection("projectsSection")}>
                      {t("nav.submenu.projects")}
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a onClick={() => scrollToSection("contact")}>{t("nav.item3")}</a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
