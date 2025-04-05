import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");

    return (
        <footer id="footer" className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold mb-6">{t("contact-us")}</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center">
                                <img src="/icons/email-outline.svg" alt="Email" className="w-6 h-6 mr-3"/>
                                <a href={`mailto:${t("studiodevbuddies@gmail.com")}`} className="text-gray-300 hover:text-white transition-colors">
                                    {t("studiodevbuddies@gmail.com")}
                                </a>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/icons/discord-outline.svg" alt="Discord" className="w-6 h-6 mr-3"/>
                                <a href={'https://discord.gg/peqJJ5qcSU'} target={"_blank"} rel={"noopener noreferrer"} className="text-gray-300 hover:text-white transition-colors">
                                    Discord
                                </a>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/icons/telegram-outline.svg" alt="Telegram" className="w-5 h-5 mr-3"/>
                                <a href={'https://t.me/+HLBAIEX9p_FmMWQy'} target={"_blank"} rel={"noopener noreferrer"} className="text-gray-300 hover:text-white transition-colors">
                                    Telegram
                                </a>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/icons/vk-outline.svg" alt="VK" className="w-5 h-5 mr-3"/>
                                <a href={'https://vk.com/devbuddies'} target={"_blank"} rel={"noopener noreferrer"} className="text-gray-300 hover:text-white transition-colors">
                                    VK
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">DevBuddies</h2>
                        <p className="mb-8 text-gray-300">{t("tagline")}</p>
                    </div>

                    {/* Legal Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">{t("legal")}</h3>
                        <div className="flex items-center mb-4">
                            <img src="/icons/document-outline.svg" alt="Document" className="w-5 h-5 mr-3"/>
                            <a
                                href={`/docs/offer-agreement_${t("lang-code")}.pdf`}
                                download
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {t("offer-agreement")}
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">{t("warn")}</p>
                    </div>
                </div>

                <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-gray-400">
                    © {new Date().getFullYear()} DevBuddies. {t("rights")}
                </div>
            </div>
        </footer>
    )
}

export default Footer