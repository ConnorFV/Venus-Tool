import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4 text-primary">VENUS TOOL</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional metal mold design and production. Focusing on higher quality and customer satisfaction first.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'Equipment', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
                        <ul className="space-y-2">
                            {['Strip Layout', 'Equipment', 'Plant Environment'].map((item) => (
                                <li key={item}>
                                    <Link href="/products" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    RM 1302 13/F CHEONG K.BUILDING 84-86 DES VOEUX ROAD CENTRAL HK
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">+86-769-82851689</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">fionazhou@venustool.com.cn</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} VENUS TOOL Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
