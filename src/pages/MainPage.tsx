import { useTranslation } from "react-i18next";
import * as React from "react";
import {useTheme} from "../contexts/ThemeContext.tsx";

const MainPage = () => {
    const { t } = useTranslation("mainPage");
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
            {/* Hero Section */}
            <header className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h1 className={`text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>DevBuddies</h1>
                    <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t("hero-text")}
                    </p>
                    <button className={`${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'} px-8 py-3 rounded-full transition-colors`}>
                        {t("button")}
                    </button>
                </div>
            </header>

            {/* Services Section */}
            <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}">{t("services-title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard
                            icon={<span>🌐</span>}
                            title={t("service-1-title")}
                            description={t("service-1-description")}
                            isDark={isDark}
                        />
                        <ServiceCard
                            icon={<span>⚒️</span>}
                            title={t("service-2-title")}
                            description={t("service-2-description")}
                            isDark={isDark}
                        />
                        <ServiceCard
                            icon={<span>🤖</span>}
                            title={t("service-3-title")}
                            description={t("service-3-description")}
                            isDark={isDark}
                        />
                        <ServiceCard
                            icon={<span>🚀</span>}
                            title={t("service-4-title")}
                            description={t("service-4-description")}
                            isDark={isDark}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Work */}
            <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t("work-title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            image="https://i.imgur.com/MLdGJHY.png"
                            title={t("work-item1-title")}
                            description={t("work-item1-description")}
                            isDark={isDark}
                        />
                        <ProjectCard
                            image=""
                            title={t("work-item2-title")}
                            description={t("work-item2-description")}
                            isDark={isDark}
                        />
                        <ProjectCard
                            image=""
                            title={t("work-item3-title")}
                            description={t("work-item3-description")}
                            isDark={isDark}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

function ServiceCard({ icon, title, description, isDark }: { icon: React.ReactNode; title: string; description: string; isDark: boolean }) {
    return (
        <div className="p-6 text-center">
            <div className="text-5xl mb-4 flex justify-center text-shadow">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={isDark ? 'text-white' : 'text-gray-600'}>{description}</p>
        </div>
    );
}

function ProjectCard({ image, title, description, isDark }: { image: string; title: string; description: string; isDark: boolean }) {
    return (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
            </div>
        </div>
    );
}

export default MainPage;