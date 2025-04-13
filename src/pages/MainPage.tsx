import { useTranslation } from "react-i18next";
import * as React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Star } from "lucide-react";
import Footer from "../utils/Footer";
import LanguageSelector from "../components/LanguageSelector";

const MainPage = () => {
    const { t } = useTranslation("mainPage");
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>

            <header className={`min-h-screen flex flex-col items-center justify-center relative ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>

                <div className="absolute top-4 right-4">
                    <LanguageSelector />
                </div>
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h1 className={`text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>DevBuddies</h1>
                    <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t("hero-text")}
                    </p>
                    <button
                        onClick={() => {
                            const footer = document.getElementById('footer');
                            if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                                footer.classList.add('highlight-footer');
                                // Удаляем подсветку через 1.5 секунды
                                setTimeout(() => {
                                    footer.classList.remove('highlight-footer');
                                }, 1500);
                            }
                        }}
                        className={`${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'} px-8 py-3 rounded-full transition-colors cursor-pointer`}
                    >
                        {t("button")}
                    </button>
                </div>
            </header>

            {/* Services Section */}
            <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDark ? 'text-white text-shadow-dark' : 'text-gray-900 text-shadow-white'}`}>{t("services-title")}</h2>
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
                <div className="max-w-full mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t("work-title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 w-full justify-center items-center">
                        <ProjectCard
                            image="./projects/republic.png"
                            title={t("work-item1-title")}
                            description={t("work-item1-description")}
                            isDark={isDark}
                        />
                        <ProjectCard
                            image="./projects/ss14.png"
                            title={t("work-item2-title")}
                            description={t("work-item2-description")}
                            isDark={isDark}
                        />
                        <ProjectCard
                            image="./projects/craftnet.png"
                            title={t("work-item3-title")}
                            description={t("work-item3-description")}
                            isDark={isDark}
                        />
                        <ProjectCard
                            image="./projects/univer.png"
                            title={t("work-item4-title")}
                            description={t("work-item4-description")}
                            isDark={isDark}
                        />
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t("reviews-title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        <ReviewCard
                            author={t("review-1-author")}
                            role={t("review-1-role")}
                            content={t("review-1-content")}
                            rating={5}
                            image={"./reviews/sacred.png"}
                            isDark={isDark}
                        />
                        <ReviewCard
                            author={t("review-2-author")}
                            role={t("review-2-role")}
                            content={t("review-2-content")}
                            rating={5}
                            image={"./reviews/trillp.jpg"}
                            isDark={isDark}
                        />
                        <ReviewCard
                            author={t("review-3-author")}
                            role={t("review-3-role")}
                            content={t("review-3-content")}
                            rating={5}
                            image={"./reviews/onikot.jpg"}
                            isDark={isDark}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

function ServiceCard({ icon, title, description, isDark }: { icon: React.ReactNode; title: string; description: string; isDark: boolean }) {
    return (
        <div className="p-6 text-center">
            <div className={`text-5xl mb-4 flex justify-center ${isDark ? 'text-shadow-white' : 'text-shadow-dark'}`}>{icon}</div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-shadow-white' : 'text-shadow-dark'}`}>{title}</h3>
            <p className={isDark ? 'text-white text-shadow-white' : 'text-gray-600 text-shadow-dark'}>{description}</p>
        </div>
    );
}

function ProjectCard({ image, title, description, isDark }: { image: string; title: string; description: string; isDark: boolean }) {
    return (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-72 mx-auto`}>
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
            </div>
        </div>
    );
}

function ReviewCard({ author, role, content, rating, image, isDark, className }: { author: string; role: string; content: string; rating: number; image: string; isDark: boolean; className?: string; }) {
    return (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg ${className}`}>
            <div className="flex items-center mb-4">
                <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{author}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{role}</p>
                </div>
            </div>
            <div className="flex mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{content}</p>
        </div>
    );
}

export default MainPage;