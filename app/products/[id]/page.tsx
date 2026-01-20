'use client';

import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, CheckCircle2, Factory } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const { dict } = useLanguage();
    // In a real app, we would fetch product data based on params.id
    // For this demo, we'll use a mock product object or find it from the dictionary if possible
    // Since dictionary structure is flat in items array, let's find it.

    const product = dict.products.items.find((p: any) => p.id === params.id) || dict.products.items[0];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero / Header */}
            <section className="bg-secondary text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Link href="/products" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span className="bg-primary/20 px-3 py-1 rounded-full text-primary border border-primary/20 uppercase tracking-wider font-semibold">
                            {product.category}
                        </span>
                        <span>ID: {product.id.toUpperCase()}</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image Gallery (Placeholder) */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                                <Factory className="w-20 h-20 opacity-20" />
                            </div>
                            <span className="relative z-10 font-bold text-gray-300 text-2xl">Main View</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                                    <span className="text-xs text-gray-400">View {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Product Description</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {product.desc}
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Technical Specifications</h2>
                            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                                <div className="grid grid-cols-2 border-b border-gray-100 p-4 bg-gray-50">
                                    <span className="font-semibold text-gray-700">Material</span>
                                    <span className="text-gray-600">High-Grade Carbide / Steel</span>
                                </div>
                                <div className="grid grid-cols-2 border-b border-gray-100 p-4">
                                    <span className="font-semibold text-gray-700">Precision</span>
                                    <span className="text-gray-600">±0.002 mm</span>
                                </div>
                                <div className="grid grid-cols-2 border-b border-gray-100 p-4 bg-gray-50">
                                    <span className="font-semibold text-gray-700">Speed</span>
                                    <span className="text-gray-600">Up to 1200 SPM</span>
                                </div>
                                <div className="grid grid-cols-2 p-4">
                                    <span className="font-semibold text-gray-700">Application</span>
                                    <span className="text-gray-600">Automotive / Electronics</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {['High Durability', 'Optimized for Mass Production', 'Low Maintenance', 'Customizable Design'].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t">
                            <Link href="/contact">
                                <Button size="lg" className="w-full md:w-auto">Request a Quote</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
