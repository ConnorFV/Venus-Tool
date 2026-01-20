'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { lang, setLang, dict } = useLanguage();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const NAV_LINKS = [
        { name: dict.nav.home, href: '/' },
        { name: dict.nav.product, href: '/products' },
        { name: dict.nav.equipment, href: '/equipment' },
        { name: dict.nav.competitive, href: '/competitive' },
        { name: dict.nav.about, href: '/about' },
        { name: dict.nav.contact, href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Simplified logic: Always transparent at the top (overlay mode), solid when scrolled.
    // This requires all pages to have a dark header/hero section.
    const isTransparent = !isScrolled;

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isTransparent
                    ? 'bg-transparent py-6'
                    : 'bg-white/90 backdrop-blur-md shadow-sm py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Text Color */}
                    <div className={clsx(
                        "text-2xl font-bold tracking-tighter transition-colors",
                        isTransparent ? "text-white" : "text-primary"
                    )}>
                        VENUS<span className={isTransparent ? "text-white" : "text-secondary"}>TOOL</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-primary',
                                isTransparent ? 'text-white' : 'text-secondary'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                        className={clsx(
                            'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                            isTransparent ? 'text-white' : 'text-secondary'
                        )}
                    >
                        <Globe className="w-4 h-4" />
                        {lang === 'en' ? 'EN' : '中文'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={clsx(
                        "md:hidden transition-colors",
                        isTransparent ? "text-white" : "text-secondary"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-secondary font-medium hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t">
                                <button
                                    onClick={() => {
                                        setLang(lang === 'en' ? 'zh' : 'en');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-secondary font-medium"
                                >
                                    <Globe className="w-4 h-4" />
                                    切换语言 / Switch Language
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
