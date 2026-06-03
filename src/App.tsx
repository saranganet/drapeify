import React, { useState } from "react";
import Header from "./components/Header";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import WorkflowSection from "./components/WorkflowSection";
import FeaturesSection from "./components/FeaturesSection";
import TransformationsWall from "./components/TransformationsWall";
import MotionFashionSection from "./components/MotionFashionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

// Import components icon values etc.
import { Sparkles, Play, ArrowRight, X, Film, CheckCircle2 } from "lucide-react";

// Import generated hero images
import hangerShirtBefore from "./assets/images/before.png";
import modelShirtAfter from "./assets/images/after.png";

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    setShowContactModal(true);
  };

  return (
    <div id="hero" className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      {/* Top sticky navigation header */}
      <Header 
        onGetStartedClick={handleGetStarted} 
        onNavigateClick={handleNavigate} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* HER0 SECTION */}
        <section className="relative overflow-hidden bg-white pt-16 pb-12 sm:pb-16">
          {/* Subtle background details */}
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-50/40 blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 items-center">
              
              {/* Left Column: Copy Content (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* AI Label badge */}
                <div className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-700">
                    AI-POWERED FASHION STUDIO
                  </span>
                </div>

                {/* Main Heading title */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                  Turn Product Photos Into <br />
                  <span className="text-indigo-600 relative inline-block">
                    Studio-Quality <br className="sm:hidden" />
                    Fashion Models
                  </span>
                </h1>

                {/* Subtext description */}
                <p className="font-sans text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
                  Upload your garment flat lays or hanger shots. Choose a demographic model. Select poses and backgrounds. Get catalog-ready stunning e-commerce photoshoot images and reels in minutes. Eliminate model bookings and travel logistics.
                </p>

                {/* CTA Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGetStarted}
                    className="group rounded-full hover:bg-indigo-700 text-white font-bold text-sm px-7 py-4 cursor-pointer transition-all duration-300 flex items-center justify-center bg-indigo-600"
                  >
                    <span>Generate Free Sample</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Small Trust Metrics */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-lg">
                  <div>
                    <span className="block font-serif text-2xl font-bold text-slate-900">10x</span>
                    <span className="text-xs text-slate-400">Faster turnarounds</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-slate-900">4K UHD</span>
                    <span className="text-xs text-slate-400">High Resolution</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-slate-900">-90%</span>
                    <span className="text-xs text-slate-400">Operational costs</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero interactive slider (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[400px]">
                  
                  {/* Outer decorative borders (Editorial touch) */}
                  <div className="absolute -inset-4 rounded-3xl border border-dashed border-slate-200 pointer-events-none" />
                  
                  {/* Slider */}
                  <BeforeAfterSlider
                    id="hero-main-slider"
                    beforeImage={hangerShirtBefore}
                    afterImage={modelShirtAfter}
                    beforeLabel="FLAT GARMENT SHOT"
                    afterLabel="STUDIO MODEL POSE"
                    aspectRatioClassName="aspect-[3/4]"
                  />

                  {/* Tiny caption label */}
                  <div className="mt-4 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      Drag handlebar to split before / after
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WORKFLOW SECTION ("Five Steps to Perfection") */}
        <WorkflowSection />

        {/* FEATURES GRID SECTION */}
        <FeaturesSection />

        {/* TRANSFORMATIONS WALL SECTION (DARK BG) */}
        <TransformationsWall />

        {/* MOTION VIDEOS SECTION */}
        <MotionFashionSection />

        {/* CLIENT TRUST / REVIEWS SECTION */}
        <TestimonialsSection />



      </main>

      {/* Contact Section at the Bottom */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Ready to upgrade your studio?
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Get in touch with our team to explore how Drapeify can transform your fashion catalog.
          </p>
          <button
            onClick={() => setShowContactModal(true)}
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-8 py-3.5 shadow-lg transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer Details */}
      <Footer />

      {/* Contact Us Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <h4 className="font-serif text-lg font-bold text-slate-950">Contact Us</h4>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-50 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-left">
              <a
                href="https://wa.me/919435205638"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowContactModal(false)}
                className="w-full flex items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-sm px-4 py-2.5 cursor-pointer shadow-md transition-colors"
              >
                Chat on WhatsApp
              </a>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs">or send a message</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600" placeholder="Name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600" placeholder="Email" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600" rows={4} placeholder="Message"></textarea>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-4 py-2.5 mt-2 cursor-pointer shadow-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
