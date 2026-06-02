import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 border-acc/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-pr rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-lg hover:scale-105"
        >
          <i className="fas fa-times text-black text-lg"></i>
        </button>

        <div className="p-8">
          {/* Header with Focus */}
          <div className="mb-6 p-6 bg-gradient-to-r from-acc/10 to-acc/5 rounded-xl border border-acc/20 backdrop-blur-sm flex items-center justify-center">
            <h4 className="text-xl font-heading font-bold text-white flex items-center justify-center gap-2">
              <i className="fas fa-comments text-acc"></i>
              {t("contact.getInTouch")}
            </h4>
          </div>

          {/* Contact Methods Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
            <h5 className="text-lg font-heading font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fas fa-address-book text-acc"></i>
              {t("contact.ContactMethods")}
            </h5>

            {/* Contact Number Display */}
            <div className="text-center mb-6">
              <h6 className="text-white/80 text-sm mb-2">
                {t("contact.ContactNumber")}
              </h6>
              <p className="text-white text-2xl font-mono font-semibold tracking-wide">
                +966 59 940 9680
              </p>
            </div>

            {/* Contact Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wa.me/966599409680"
                className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20 hover:from-green-500/20 hover:to-green-500/10 transition-all duration-300 group hover:scale-105"
              >
                <i className="fab fa-whatsapp text-2xl text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-green-400 font-medium text-sm group-hover:text-green-300">
                  {t("contact.whatsapp")}
                </span>
                <i className="fas fa-external-link-alt text-xs text-green-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </a>

              <a
                href="https://t.me/+966599409680"
                className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/10 transition-all duration-300 group hover:scale-105"
              >
                <i className="fab fa-telegram text-2xl text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300">
                  {t("contact.telegram")}
                </span>
                <i className="fas fa-external-link-alt text-xs text-blue-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </a>

              <a
                href="tel:+966599409680"
                className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 group hover:scale-105"
              >
                <i className="fas fa-phone text-2xl text-white mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-white font-medium text-sm group-hover:text-white/90">
                  {t("contact.call")}
                </span>
                <i className="fas fa-external-link-alt text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
            <h5 className="text-lg font-heading font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fas fa-edit text-acc"></i>
              {t("contact.SendMessage")}
            </h5>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"></i>
                <input
                  name="name"
                  type="text"
                  placeholder={t("contact.name")}
                  className="w-full p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-acc/50 focus:border-acc/50 transition-all duration-300 backdrop-blur-sm"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <i className="fas fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"></i>
                <input
                  name="phone"
                  type="text"
                  placeholder={t("contact.phone")}
                  className="w-full p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-acc/50 focus:border-acc/50 transition-all duration-300 backdrop-blur-sm"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <i className="fas fa-message absolute left-4 top-6 text-white/60"></i>
                <textarea
                  name="message"
                  placeholder={t("contact.message")}
                  className="w-full p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-acc/50 focus:border-acc/50 transition-all duration-300 backdrop-blur-sm resize-none"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-100 text-pr font-semibold py-4 px-6 rounded-xl hover:from-grayTone hover:to-gray-200 hover:scale-[1.02] transition-all duration-300 shadow-lg border-0 flex items-center justify-center gap-3 group"
              >
                <i className="fas fa-paper-plane text-pr group-hover:translate-x-1 transition-transform duration-300"></i>
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
