import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import useLocalStorage from 'use-local-storage';

// Типы для контекста
type ThemeContextType = {
    theme: string | undefined;
    setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
};

// Типизация пропсов для ThemeProvider
type ThemeProviderProps = {
    children: ReactNode; // Указываем тип для children
};

// Создаем контекст
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Компонент-поставщик контекста
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Используем useLocalStorage для хранения текущей темы
    const [theme, setTheme] = useLocalStorage<string | undefined>('theme', 'light'); // По умолчанию светлая тема

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для доступа к контексту
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
