import React, { useState, useEffect } from 'react';
import i18n from '../locales/i18n';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSelector = () => {
    const { theme } = useTheme();
    const [language, setLanguage] = useState(i18n.language);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleLanguageChange = () => setLanguage(i18n.language);
        i18n.on("languageChanged", handleLanguageChange);
        return () => {
            i18n.off("languageChanged", handleLanguageChange);
        };
    }, []);

    return (
        <div className="settings-section">
            <select
                id="language-select"
                value={language}
                onChange={handleChange}
                className={`p-2 rounded shadow-md transition-all 
                ${theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-900 hover:bg-gray-100"}`}
            >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="kz">KZ</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
