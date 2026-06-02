import React from "react";
import { Film, Sparkles } from "lucide-react";

export default function MotionFashionSection() {
  return (
    <section id="motion-fashion" className="bg-slate-50 py-12 sm:py-16 text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <Film className="mr-1.5 h-3.5 w-3.5 text-indigo-600" />
            AI VIDEO GENERATION
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Motion Fashion
          </h2>
          <p className="mt-4 font-sans text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Breathe life into your products with AI video generation. Hyper-realistic fabric physics, waves, and 360° runway flows — coming soon.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl rounded-3xl border border-dashed border-indigo-200 bg-white px-10 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100">
              <Film className="h-7 w-7 text-indigo-500" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Coming Soon</h3>
            <p className="mt-3 font-sans text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
              We're crafting cinematic AI-generated fashion videos. Stay tuned for the full Motion Fashion experience.
            </p>
            <span className="mt-6 inline-flex items-center rounded-full bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold text-indigo-700 tracking-widest uppercase">
              <Sparkles className="mr-1.5 h-3 w-3" />
              In Development
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
