'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Globe2, Trophy, Users2 } from 'lucide-react';

export default function AboutPage() {
    const { dict } = useLanguage();
    const t = dict.about;

    // Icon mapping for culture values
    const cultureIcons = [Trophy, Users2, Globe2, Building2];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t.intro}
                    </p>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-2">{t.history.title}</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

                        {t.history.events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <span className="text-2xl font-bold text-primary block mb-2">{event.year}</span>
                                        <p className="text-gray-600 font-medium">{event.desc}</p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10" />

                                {/* Spacer */}
                                <div className="w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Culture */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-2">{t.culture.title}</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.culture.values.map((item, index) => {
                            const Icon = cultureIcons[index % cultureIcons.length];
                            return (
                                <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
