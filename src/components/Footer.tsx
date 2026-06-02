import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 text-slate-600 font-sans">
      {/* Top Main Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex justify-center text-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
              Modelify
            </span>
            <span className="flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600">
              <Sparkles className="mr-0.5 h-2.5 w-2.5 text-indigo-600" />
              AI STUDIO
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Modelify AI-driven fashion studio helps modern fashion brands, makers, and retailers turn flat apparel lays into high-impact, studio-quality editorial campaigns with zero photo logistics.
          </p>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="bg-slate-100/60 border-t border-slate-200/50 py-8 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <span>© 2026 Modelify AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
