import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";
import './index.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import LanguageSwitcher from "./utils/LanguageSwitcher.tsx";
import { Helmet } from 'react-helmet-async';

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
      <Router>

          <Helmet>
              {/* Google Tag Manager */}
              <script>
                  {`
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-MC3P5FCS');
                  `}
              </script>
          </Helmet>

          <ThemeProvider>
              <div className="fixed top-4 right-4 z-50 flex gap-2">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
              </div>

              <I18nextProvider i18n={i18n}>
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                  </Routes>
              </I18nextProvider>
          </ThemeProvider>
      </Router>
  )
}

export default App
