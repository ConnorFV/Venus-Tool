'use client';

import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function ContactPage() {
    const { dict } = useLanguage();
    const t = dict.contact;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-secondary text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t.subtitle}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">{t.info.hk}</h3>
                                    <p className="text-gray-600">RM 1302 13/F CHEONG K.BUILDING 84-86 DES VOEUX ROAD CENTRAL HK</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">{t.info.dg_wisdom}</h3>
                                    <p className="text-gray-600">Tangxia Town, Dongguan City</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">{t.info.dg_haorui}</h3>
                                    <p className="text-gray-600">Hengli Town, Dongguan City</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">{t.info.phone}</h3>
                                    <p className="text-gray-600">+86-769-82851689</p>
                                    <p className="text-gray-600">135-2869-8401 (Mrs. Fiona)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">{t.info.email}</h3>
                                    <p className="text-gray-600">fionazhou@venustool.com.cn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-secondary mb-6">{t.subtitle}</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.first_name}</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.last_name}</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.email}</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.subject}</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.message}</label>
                                <textarea rows={4} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"></textarea>
                            </div>
                            <Button className="w-full">{t.form.submit}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
