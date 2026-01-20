'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Anvil, Gauge, Ruler } from 'lucide-react';

export default function EquipmentPage() {
    const { dict } = useLanguage();
    const t = dict.equipment;

    const sections = [
        { key: 'press', icon: Anvil, imageColor: 'bg-blue-100' },
        { key: 'cnc', icon: Gauge, imageColor: 'bg-orange-100' },
        { key: 'qc', icon: Ruler, imageColor: 'bg-green-100' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Content Sections */}
            <div className="flex flex-col">
                {sections.map((section, index) => {
                    // @ts-ignore
                    const data = t.sections[section.key];
                    const isEven = index % 2 === 0;

                    return (
                        <section key={section.key} className={`py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="container mx-auto px-4 md:px-6">
                                <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                    {/* Text Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-1 space-y-6"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                            <section.icon className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-secondary">{data.title}</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {data.desc}
                                        </p>

                                        {/* Demo Specs List (Static for now, can be dynamic later) */}
                                        <ul className="space-y-3 pt-4">
                                            <li className="flex items-center gap-3 text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>High Precision Capability</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>Advanced Automation Integration</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>Certified Operational Standards</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Image Placeholder */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="flex-1 w-full"
                                    >
                                        <div className={`aspect-video rounded-2xl overflow-hidden shadow-lg ${section.imageColor} flex items-center justify-center relative group`}>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                            <span className="text-secondary/20 text-3xl font-bold uppercase tracking-widest">
                                                {data.title} Image
                                            </span>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    );
}
