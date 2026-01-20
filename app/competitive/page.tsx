'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Globe2,
    Lightbulb,
    TrendingUp,
    Users,
    Wrench
} from 'lucide-react';

export default function CompetitivePage() {
    const { dict } = useLanguage();
    const t = dict.competitive;

    const icons = [Wrench, Globe2, Lightbulb, TrendingUp, Users, CheckCircle2];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-secondary text-white py-20 relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Advantages Grid */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Trust Indicators (Optional placeholder) */}
            <section className="py-20 bg-white border-t">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <p className="text-gray-400 font-medium uppercase tracking-widest mb-8">Trusted by Global Leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        {/* Logos would go here */}
                        <div className="text-2xl font-bold font-serif">VOLKSWAGEN</div>
                        <div className="text-2xl font-bold font-serif">TOYOTA</div>
                        <div className="text-2xl font-bold font-serif">FORD</div>
                        <div className="text-2xl font-bold font-serif">GENERAL MOTORS</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
