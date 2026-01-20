'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Settings, Users } from "lucide-react";
import { Button } from "./components/ui/Button";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { dict } = useLanguage();
  const t = dict.home;

  const stats = [
    { label: t.stats.employees, value: "200+", icon: Users },
    { label: t.stats.facility, value: "13,000㎡", icon: Factory },
    { label: t.stats.experience, value: "18 Years", icon: CheckCircle2 }, // Updated to 2026 (2008-2026 = 18)
    { label: t.stats.precision, value: "ISO 9001", icon: Settings },
  ];

  const products = [
    {
      title: t.products.p1_title,
      desc: t.products.p1_desc,
      color: "bg-blue-500",
    },
    {
      title: t.products.p2_title,
      desc: t.products.p2_desc,
      color: "bg-red-500",
    },
    {
      title: t.products.p3_title,
      desc: t.products.p3_desc,
      color: "bg-slate-500",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-black" />
        <div className="absolute inset-0 z-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm font-medium text-white/90">{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {t.hero.title1} <br />
            <span className="text-primary">{t.hero.title2}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto">
                {t.hero.cta_primary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-secondary">
                {t.hero.cta_secondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold text-secondary">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t.products.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.products.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`h-48 ${item.color} w-full relative`}>
                  {/* Placeholder for real image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-bold">
                    Product Image
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-500 mb-6">{item.desc}</p>
                  <Link href="/products" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                    {t.products.learn_more} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Advantage Banner */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.group.title}</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
              {t.group.desc}
            </p>
            <ul className="space-y-4 mb-8">
              {[t.group.loc1, t.group.loc2, t.group.loc3].map((loc, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {loc}
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button>{t.group.cta}</Button>
            </Link>
          </div>
          <div className="md:w-1/2 h-[400px] w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
            <span className="text-white/30 text-2xl font-bold">Factory / Team Photo</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            {t.cta.desc}
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              {t.cta.btn}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
