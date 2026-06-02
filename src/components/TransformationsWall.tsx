import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { wallTransformations } from "../data";
import { Layers, Sparkles } from "lucide-react";

export default function TransformationsWall() {
  return (
    <section id="transformations" className="bg-slate-950 text-white py-12 sm:py-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-indigo-900/40 border border-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-indigo-400" />
            EDITORIAL CATALOG MATRICES
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The Wall of Transformations
          </h2>
          <p className="mt-4 font-sans text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Witness the seamless transition from flat product photography to premium editorial campaigns. Hover or drag the slider button on any clothing asset below.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {wallTransformations.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-2xl bg-slate-900/40 border border-slate-900 p-4 transition-all duration-300 hover:border-slate-800"
            >
              {/* Product Slider Representation */}
              <div className="relative mb-4 rounded-xl overflow-hidden shadow-lg border border-slate-900">
                <BeforeAfterSlider
                  id={`wall-slider-${item.id}`}
                  beforeImage={item.beforeUrl}
                  afterImage={item.afterUrl}
                  beforeLabel={item.beforeLabel || "PRODUCT SHOT"}
                  afterLabel={item.afterLabel || "AI MODEL"}
                  aspectRatioClassName="aspect-[3/4]"
                />
              </div>

              {/* Text content details */}
              <div className="mt-2 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="rounded-full bg-slate-800/80 p-1.5 text-slate-400 group-hover:text-white transition-colors">
                  <Layers className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
