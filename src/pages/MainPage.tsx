import { useTranslation } from "react-i18next";
import { Code2, Rocket, Users, Zap } from 'lucide-react';
import * as React from "react";

const MainPage = () => {
    const { t } = useTranslation("mainPage");

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-6">DevBuddies</h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        {t("hero-text")}
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                        {t("button")}
                    </button>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">{t("services-title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard
                            icon={<Code2 className="w-8 h-8" />}
                            title={t("service-1-title")}
                            description={t("service-1-description")}
                        />
                        <ServiceCard
                            icon={<Zap className="w-8 h-8" />}
                            title={t("service-2-title")}
                            description={t("service-2-description")}
                        />
                        <ServiceCard
                            icon={<Users className="w-8 h-8" />}
                            title={t("service-3-title")}
                            description={t("service-3-description")}
                        />
                        <ServiceCard
                            icon={<Rocket className="w-8 h-8" />}
                            title={t("service-4-title")}
                            description={t("service-4-description")}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default MainPage;