import React, { useState } from "react";
import { Upload, Sparkles, RotateCcw, Check, Sparkle, HelpCircle, Loader2 } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

// Import generated images
import hangerShirtBefore from "../assets/images/hanger_shirt_before_1780429213849.png";
import modelShirtAfter from "../assets/images/model_shirt_after_1780429233052.png";
import sareeGarmentBefore from "../assets/images/saree_garment_before_1780429253368.png";
import modelSareeAfter from "../assets/images/model_saree_after_1780429274139.png";
import kurtaGarmentBefore from "../assets/images/kurta_garment_before_1780429293311.png";
import modelKurtaAfter from "../assets/images/model_kurta_after_1780429312535.png";
import sunsetModelAfter from "../assets/images/sunset_model_after_1780429336295.png";

interface Garment {
  id: string;
  name: string;
  beforeImg: string;
  defaultAfterImg: string;
  type: string;
}

interface ModelProfile {
  id: string;
  name: string;
  tags: string[];
}

interface PoseSetting {
  id: string;
  name: string;
}

interface BackgroundSetting {
  id: string;
  name: string;
  afterImgMap: { [garmentId: string]: string };
}

export default function InteractivePlayground() {
  const garments: Garment[] = [
    { id: "shirt", name: "White Linen Shirt", beforeImg: hangerShirtBefore, defaultAfterImg: modelShirtAfter, type: "Shirt" },
    { id: "saree", name: "Red Zari Saree", beforeImg: sareeGarmentBefore, defaultAfterImg: modelSareeAfter, type: "Saree" },
    { id: "kurta", name: "Navy Blue Kurta", beforeImg: kurtaGarmentBefore, defaultAfterImg: modelKurtaAfter, type: "Kurta" },
  ];

  const models: ModelProfile[] = [
    { id: "mod-1", name: "Elena (Classic European Profile)", tags: ["Sophisticated", "Paris", "Editorial"] },
    { id: "mod-2", name: "Aarav (Modern Indian Profile)", tags: ["Urban", "Regal", "Expressive"] },
    { id: "mod-3", name: "Chloe (Avant-garde Profile)", tags: ["High contrast", "Milan", "Bold"] },
  ];

  const poses: PoseSetting[] = [
    { id: "pose-1", name: "Editorial Runway Walk" },
    { id: "pose-2", name: "Symmetric Studio Posing" },
    { id: "pose-3", name: "Cinematic Relaxed Close-up" },
  ];

  const backgrounds: BackgroundSetting[] = [
    { 
      id: "bg-villa", 
      name: "Luxury Stone Villa (Bespoke)", 
      afterImgMap: { shirt: modelShirtAfter, saree: modelSareeAfter, kurta: modelKurtaAfter } 
    },
    { 
      id: "bg-desert", 
      name: "Vivid Desert Sand Dunes (Sunset)", 
      afterImgMap: { shirt: sunsetModelAfter, saree: modelSareeAfter, kurta: modelKurtaAfter } 
    },
    { 
      id: "bg-palace", 
      name: "Regal Marble Palace Corridor", 
      afterImgMap: { shirt: modelShirtAfter, saree: modelSareeAfter, kurta: modelKurtaAfter } 
    },
  ];

  // State
  const [selectedGarment, setSelectedGarment] = useState<Garment>(garments[0]);
  const [selectedModel, setSelectedModel] = useState<ModelProfile>(models[0]);
  const [selectedPose, setSelectedPose] = useState<PoseSetting>(poses[0]);
  const [selectedBackground, setSelectedBackground] = useState<BackgroundSetting>(backgrounds[0]);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [activeStepText, setActiveStepText] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  
  // Custom uploaded garment option (simulation)
  const [customGarmentName, setCustomGarmentName] = useState("");
  const [customGarmentImg, setCustomGarmentImg] = useState<string | null>(null);

  const startGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    setHasGenerated(false);

    const steps = [
      { progress: 15, text: "Syncing product catalog coordinates..." },
      { progress: 35, text: "Isolating garment from product background..." },
      { progress: 55, text: "Assembling fabric drape & physics matrices..." },
      { progress: 80, text: "Diffusing AI model skin & natural lighting shades..." },
      { progress: 95, text: "Optimizing 4K resolution & color match values..." },
      { progress: 100, text: "Campaign Photoshoot complete!" }
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      if (currentStepIdx < steps.length) {
        setGenerationProgress(steps[currentStepIdx].progress);
        setActiveStepText(steps[currentStepIdx].text);
        currentStepIdx++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        setHasGenerated(true);
      }
    }, 600);
  };

  const resetWorkspace = () => {
    setSelectedGarment(garments[0]);
    setSelectedModel(models[0]);
    setSelectedPose(poses[0]);
    setSelectedBackground(backgrounds[0]);
    setHasGenerated(false);
    setCustomGarmentImg(null);
    setCustomGarmentName("");
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomGarmentName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setCustomGarmentImg(reader.result as string);
        // Create custom garment object
        const customObj: Garment = {
          id: "custom",
          name: file.name.substring(0, 20) + "...",
          beforeImg: reader.result as string,
          defaultAfterImg: selectedGarment.defaultAfterImg, // reuse current default after
          type: "Custom"
        };
        setSelectedGarment(customObj);
      };
      reader.readAsDataURL(file);
    }
  };

  // Get resulting After Image based on selections
  const getOutputAfterImg = () => {
    if (selectedGarment.id === "custom") {
      // Re-route to current background's shirt/saree or sunset depending on preference
      return selectedBackground.afterImgMap["shirt"];
    }
    return selectedBackground.afterImgMap[selectedGarment.id] || selectedGarment.defaultAfterImg;
  };

  return (
    <section id="playground" className="bg-white py-20 sm:py-28 text-slate-900 border-t border-slate-100 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <Sparkle className="mr-1.5 h-3.5 w-3.5 text-indigo-500 fill-indigo-500" />
            LIVE CAMPAIGN STUDIO
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            AI Interactive Studio
          </h2>
          <p className="mt-4 font-sans text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Interact with our AI engine in real-time. Choose or upload a flat garment asset, select high-fashion profiles, choose camera poses, and generate your custom catalog model photoshoot instantly.
          </p>
        </div>

        {/* Main Workspace Frame */}
        <div className="grid gap-12 lg:grid-cols-12 items-start bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* LEFT: Controls Panel (5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            
            {/* Step 1: Select or Upload Garment */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                01. SELECT & UPLOAD GARMENT
              </label>
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                {garments.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedGarment(g);
                    }}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedGarment.id === g.id && !customGarmentImg
                        ? "border-indigo-600 bg-indigo-50/40 text-indigo-700 font-semibold"
                        : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-slate-100/50"
                    }`}
                  >
                    <span className="text-[11px] truncate w-full">{g.name}</span>
                  </button>
                ))}
              </div>

              {/* Upload custom button */}
              <label className="relative flex items-center justify-center border border-dashed border-slate-300 rounded-xl p-3 hover:border-indigo-500 hover:bg-slate-50 cursor-pointer transition-colors text-slate-600">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCustomUpload}
                />
                <Upload className="h-4 w-4 mr-2 text-slate-400" />
                <span className="text-xs font-medium">
                  {customGarmentImg ? customGarmentName : "Upload Custom Garment"}
                </span>
                {customGarmentImg && (
                  <span className="ml-2 rounded-full bg-emerald-50 text-emerald-700 p-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </label>
            </div>

            {/* Step 2: Select AI Model Profile */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                02. SELECT AI MODEL PROFILE
              </label>
              <div className="flex flex-col space-y-2">
                {models.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModel(mod)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedModel.id === mod.id
                        ? "border-indigo-600 bg-indigo-50/20 text-indigo-950 font-medium shadow-sm shadow-indigo-500/5"
                        : "border-slate-150 bg-white hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">{mod.name}</span>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {mod.tags.map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedModel.id === mod.id && (
                      <div className="h-5 w-5 rounded-full bg-indigo-650 flex items-center justify-center text-white bg-indigo-600">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Camera Pose */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                03. SELECT CAMERA POSE
              </label>
              <div className="grid grid-cols-1 gap-2">
                {poses.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPose(p)}
                    className={`flex items-center p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                      selectedPose.id === p.id
                        ? "border-indigo-600 bg-indigo-50/20 text-indigo-700"
                        : "border-slate-150 bg-white hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <div className={`h-2.5 w-2.5 rounded-full mr-2.5 ${selectedPose.id === p.id ? 'bg-indigo-600 animate-pulse' : 'bg-slate-300'}`} />
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Choose Background */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                04. SELECT SCENIC BACKGROUND
              </label>
              <div className="grid grid-cols-1 gap-2">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBackground(bg)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs font-semibold cursor-pointer ${
                      selectedBackground.id === bg.id
                        ? "border-indigo-600 bg-indigo-50/20 text-indigo-700"
                        : "border-slate-150 bg-white hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <span>{bg.name}</span>
                    {selectedBackground.id === bg.id && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTION FOOTER BUTTONS */}
            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={resetWorkspace}
                className="flex items-center justify-center border border-slate-200 text-slate-600 hover:text-slate-900 rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Reset controls"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              <button
                disabled={isGenerating}
                onClick={startGeneration}
                className="flex-1 flex items-center justify-center rounded-xl bg-indigo-650 hover:bg-indigo-700 active:bg-indigo-850 bg-indigo-600 text-white font-bold text-sm tracking-wide py-3 shadow-lg shadow-indigo-500/10 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 fill-white" />
                    Generate Campaign
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT: Display Workspace (7 columns) */}
          <div className="lg:col-span-7 flex flex-col h-full items-center justify-center">
            
            {/* Generating Loader Box */}
            {isGenerating && (
              <div className="relative aspect-[3/4] w-full max-w-[420px] rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col items-center justify-center p-8 text-center text-white overflow-hidden animate-pulse">
                {/* Background wash glow */}
                <div className="absolute top-0 right-0 h-48 w-48 bg-indigo-600/20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-48 w-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-900/60 border border-indigo-500/30">
                    <Loader2 className="h-7 w-7 text-indigo-400 animate-spin" />
                  </div>

                  <h3 className="font-serif text-lg font-bold">Modelify Render Engine</h3>
                  <p className="mt-2 text-xs text-indigo-300 font-mono tracking-wider">
                    {activeStepText}
                  </p>

                  {/* Progress bar container */}
                  <div className="mt-8 h-1 w-56 rounded-full bg-slate-850 overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 transition-all duration-300 ease-out"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                  <span className="mt-2 text-[10px] text-slate-500 font-mono">
                    {generationProgress}% ASSEMBLED
                  </span>
                </div>
              </div>
            )}

            {/* Idle State / Preview Card */}
            {!isGenerating && !hasGenerated && (
              <div className="flex flex-col items-center w-full max-w-[420px]">
                <div className="relative aspect-[3/4] w-full rounded-2xl bg-white border border-slate-200/50 shadow-md flex flex-col items-center justify-center text-center p-6 text-slate-500 overflow-hidden">
                  <img
                    src={selectedGarment.beforeImg}
                    alt="Current Garment Preview"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover brightness-95 opacity-50 blur-sm scale-102 pointer-events-none"
                  />
                  
                  {/* Clean central floating card guidance */}
                  <div className="relative z-10 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-slate-100 p-6 max-w-xs flex flex-col items-center">
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 font-bold text-lg border border-indigo-100">
                      ?
                    </div>
                    <span className="font-serif text-sm font-bold text-slate-900">Configure Workspace</span>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      Selected: <strong className="text-slate-800">{selectedGarment.name}</strong> to be worn by <strong className="text-slate-800">{selectedModel.name.split(" ")[0]}</strong>.
                    </p>
                    <button
                      onClick={startGeneration}
                      className="mt-4 flex items-center rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-md hover:bg-indigo-700 cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5 mr-1 bg-indigo-600" />
                      Shoot campaign
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-[11px] text-slate-400 font-medium">
                  <HelpCircle className="h-3.5 w-3.5 mr-1" /> Choose parameters on left, then press Generate Campaign to render.
                </div>
              </div>
            )}

            {/* Generated Campaign Shot (With Interactive Slider) */}
            {!isGenerating && hasGenerated && (
              <div className="flex flex-col items-center w-full max-w-[420px] animate-in fade-in duration-500">
                <div className="w-full">
                  <BeforeAfterSlider
                    id="playground-result-slider"
                    beforeImage={selectedGarment.beforeImg}
                    afterImage={getOutputAfterImg()}
                    beforeLabel="PRODUCT SOURCE"
                    afterLabel={`${selectedModel.name.split(" ")[0].toUpperCase()} • ${selectedBackground.name.split(" (")[0].toUpperCase()}`}
                    aspectRatioClassName="aspect-[3/4]"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center w-full">
                  <div className="rounded-full bg-green-50 text-green-700 py-1.5 px-3 text-[11px] font-bold border border-green-100 flex items-center shadow-sm">
                    <Check className="h-3.5 w-3.5 mr-1 inline bg-green-50" />
                    Ready for 4K Download
                  </div>
                  <button
                    onClick={startGeneration}
                    className="rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 hover:bg-indigo-100/50 py-1.5 px-3.5 text-[11px] font-bold transition-all cursor-pointer inline-flex items-center"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Re-render variations
                  </button>
                  <button
                    onClick={resetWorkspace}
                    className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 py-1.5 px-3.5 text-[11px] font-bold transition-all cursor-pointer"
                  >
                    Clear Workspace
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
