import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 text-slate-600 font-sans">
      {/* Top Main Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex justify-center text-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
              Drapeify
            </span>
            <span className="flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600">
              <Sparkles className="mr-0.5 h-2.5 w-2.5 text-indigo-600" />
              AI STUDIO
            </span>
          </div>
          <p className="mt-4 font-sans text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            Drapeify (also known as Drapify) AI-driven fashion studio helps modern fashion brands, makers, and retailers turn flat apparel lays into high-impact, studio-quality editorial campaigns with zero photo logistics.
          </p>
        </div>
      </div>

      {/* Bottom copyright row */}
      <div className="mt-12 flex flex-col items-center justify-center border-t border-slate-100 pt-8 pb-4">
        <span className="font-sans text-sm text-slate-400">
          © 2026 Drapeify AI. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
