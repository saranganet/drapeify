import React from "react";
import { UploadCloud, Users, Accessibility, ImageIcon, DownloadCloud } from "lucide-react";
import { stepsData } from "../data";

export default function WorkflowSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "UploadCloud":
        return <UploadCloud className="h-6 w-6 text-indigo-600" />;
      case "UserSquare":
        return <Users className="h-6 w-6 text-indigo-600" />;
      case "Accessibility":
        return <Accessibility className="h-6 w-6 text-indigo-600" />;
      case "ImageInline":
        return <ImageIcon className="h-6 w-6 text-indigo-600" />;
      case "DownloadCloud":
        return <DownloadCloud className="h-6 w-6 text-indigo-600" />;
      default:
        return <UploadCloud className="h-6 w-6 text-indigo-600" />;
    }
  };

  return (
    <section id="how-it-works" className="bg-slate-50 py-12 sm:py-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
            SIMPLE WORKFLOW
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Five Steps to Perfection
          </h2>
          <p className="mt-4 font-sans text-lg text-slate-500 leading-relaxed">
            The digital atelier at your fingertips. From flat lay to high-fashion in five simple interactions. Change model poses, age, ethnic profile, and settings in clicks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-350 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 transition-colors duration-300">
                <span className="group-hover:hidden">
                  {getIcon(step.iconName)}
                </span>
                <span className="hidden group-hover:block font-bold text-white text-lg">
                  {step.stepNumber}
                </span>
              </div>

              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                STEP 0{step.stepNumber}
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow Connector for Desktop list */}
              {idx < stepsData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-10 text-slate-300 transform translate-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
