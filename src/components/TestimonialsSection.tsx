import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "../data";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16 text-slate-900 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by the World's Best
          </h2>
          <p className="mt-4 font-sans text-lg text-slate-400">
            Fashion lines and e-commerce leaders are eliminating physical logistics for their digital campaigns.
          </p>
        </div>

        {/* Carousel / Card */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 sm:p-14 shadow-sm">
            {/* Top quote icon decoration */}
            <div className="absolute top-6 right-8 text-indigo-100">
              <Quote className="h-20 w-20 transform translate-x-2 -translate-y-2" />
            </div>

            {/* Stars rating */}
            <div className="flex space-x-1 mb-8">
              {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-indigo-600 text-indigo-600"
                />
              ))}
            </div>

            {/* Quote body */}
            <blockquote className="font-serif text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
              "{testimonialsData[activeIndex].quote}"
            </blockquote>

            {/* Author info */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-150 pt-8">
              <div>
                <cite className="font-serif text-lg font-bold not-italic text-slate-900">
                  {testimonialsData[activeIndex].author}
                </cite>
                <p className="font-sans text-sm text-slate-500 mt-1">
                  {testimonialsData[activeIndex].role}, <span className="font-semibold text-indigo-600">{testimonialsData[activeIndex].company}</span>
                </p>
              </div>

              {/* Slider Arrows */}
              <div className="flex space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="rounded-full border border-slate-200 bg-white p-2.5 hover:bg-slate-50 hover:text-indigo-600 transition duration-200 cursor-pointer text-slate-700"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="rounded-full border border-slate-200 bg-white p-2.5 hover:bg-slate-50 hover:text-indigo-600 transition duration-200 cursor-pointer text-slate-700"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "w-8 bg-indigo-600" : "w-2.5 bg-slate-200"
                }`}
                aria-label={`Jump to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
