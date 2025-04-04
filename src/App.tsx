import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";
import './index.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import LanguageSwitcher from "./utils/LanguageSwitcher.tsx";

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
      <div>
          <Router>
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
      </div>
  )
}

export default App
