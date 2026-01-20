'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';

import Link from 'next/link';

export default function ProductsPage() {
    const { dict } = useLanguage();
    const t = dict.products;
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: t.categories.all },
        { id: 'progressive', label: t.categories.progressive },
        { id: 'transfer', label: t.categories.transfer },
        { id: 'tandem', label: t.categories.tandem },
        { id: 'others', label: t.categories.others },
    ];

    const filteredItems = filter === 'all'
        ? t.items
        : t.items.filter(item => item.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="sticky top-[72px] z-40 bg-white border-b shadow-sm py-4">
                <div className="container mx-auto px-4 md:px-6 overflow-x-auto no-scrollbar">
                    <div className="flex justify-center min-w-max gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat.id
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="flex-grow py-16 container mx-auto px-4 md:px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for Product Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                        <Box className="w-12 h-12 opacity-20" />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                        {categories.find(c => c.id === item.category)?.label}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                                        {item.desc}
                                    </p>
                                    <Link href={`/products/${item.id}`} className="w-full block">
                                        <Button variant="outline" size="sm" className="w-full justify-between group/btn pointer-events-none">
                                            {dict.common.more_details}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
}
