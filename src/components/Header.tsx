import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  onGetStartedClick: () => void;
  onNavigateClick: (sectionId: string) => void;
}

export default function Header({ onGetStartedClick, onNavigateClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", sectionId: "features" },
    { label: "How It Works", sectionId: "how-it-works" },
    { label: "Showcase", sectionId: "transformations" },
    { label: "Reviews", sectionId: "testimonials" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateClick(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100/80 bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex cursor-pointer items-center space-x-2"
        >
          <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
            Drapeify
          </span>
          <span className="flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600">
            <Sparkles className="mr-0.5 h-2.5 w-2.5 text-indigo-600" />
            AI STUDIO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.sectionId)}
              className="font-sans text-sm font-medium text-slate-500 hover:text-slate-900 hover:underline hover:underline-offset-4 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onGetStartedClick}
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 rounded-md hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 px-4 pt-2 pb-6 shadow-xl backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStartedClick();
                }}
                className="w-full rounded-full bg-indigo-600 sm:w-auto text-center text-white py-3 px-4 text-sm font-semibold transition-colors cursor-pointer hover:bg-indigo-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
