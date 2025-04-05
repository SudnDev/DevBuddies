import {Globe} from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';
import {useEffect, useState} from "react";
import i18n from "../locales/i18n.ts";

const LanguageSwitcher = () => {
    const { theme } = useTheme();

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
        <button
            onClick={() => changeLanguage(language === 'en' ? 'ru' : 'en')}
            className={`flex items-center gap-2 ${theme === "dark" ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer`}
        >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'RU' : 'EN'}</span>
        </button>
    )
}

export default LanguageSwitcher;