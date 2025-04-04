import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light'); // по умолчанию светлая тема

    // Переключение темы
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 ${theme === "dark" ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all`}
        >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
);
};

export default ThemeSwitcher;
