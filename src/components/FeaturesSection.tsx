import React from "react";
import { Users, Maximize, Video, Library, Layers, ShoppingBag, ArrowRight } from "lucide-react";
import { enterpriseFeatures } from "../data";

export default function FeaturesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="h-5 w-5 text-indigo-600" />;
      case "Maximize":
        return <Maximize className="h-5 w-5 text-indigo-600" />;
      case "Video":
        return <Video className="h-5 w-5 text-indigo-600" />;
      case "Library":
        return <Library className="h-5 w-5 text-indigo-600" />;
      case "Layers":
        return <Layers className="h-5 w-5 text-indigo-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5 text-indigo-600" />;
      default:
        return <Users className="h-5 w-5 text-indigo-600" />;
    }
  };

  return (
    <section id="features" className="bg-white py-12 sm:py-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-indigo-600">
              UNRIVALED PRECISION
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Enterprise-Grade AI for<br className="hidden sm:inline" /> High-Fashion Retail
            </h2>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseFeatures.map((item) => (
            <div
              key={item.title}
              className="flex flex-col p-8 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 mb-6">
                {getIcon(item.iconName)}
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-950 mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
