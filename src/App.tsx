import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";
import { Globe } from 'lucide-react';
import { useState, useEffect } from "react";
import './index.css';

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {

    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const handleLanguageChange = () => setLanguage(i18n.language);

        i18n.on("languageChanged", handleLanguageChange); // Подписываемся на событие
        return () => {
            i18n.off("languageChanged", handleLanguageChange); // Отписываемся при размонтировании
        };
    }, []);

  return (
      <div>
          <Router>
              <div className="fixed top-4 right-4 z-50">
                  <button
                      onClick={() => changeLanguage(language === 'en' ? 'ru' : 'en')}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                      <Globe className="w-4 h-4" />
                      <span>{language === 'en' ? 'RU' : 'EN'}</span>
                  </button>
              </div>

              <I18nextProvider i18n={i18n}>
                  <Routes>
                          <Route path="/" element={<MainPage />} />
                  </Routes>
              </I18nextProvider>
          </Router>
      </div>
  )
}

export default App
