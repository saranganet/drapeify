import { StepItem, FeatureItem, TransformItem, MotionItem, TestimonialItem } from "./types";

// Import generated images
import hangerShirtBefore from "./assets/images/hanger_shirt_before_1780429213849.png";
import modelShirtAfter from "./assets/images/model_shirt_after_1780429233052.png";
import sareeGarmentBefore from "./assets/images/bef_sar.png";
import modelSareeAfter from "./assets/images/model_saree_after_1780429274139.png";
import kurtaGarmentBefore from "./assets/images/kurta_garment_before_1780429293311.png";
import modelKurtaAfter from "./assets/images/model_kurta_after_1780429312535.png";
import sunsetModelAfter from "./assets/images/sunset_model_after_1780429336295.png";
import before2 from "./assets/images/before2.png";
import after2 from "./assets/images/after2.png";

export const heroImages = {
  before: hangerShirtBefore,
  after: modelShirtAfter,
};

export const stepsData: StepItem[] = [
  {
    stepNumber: "1",
    title: "Upload Garment",
    description: "Front, back, and intricate detail shots of your garment.",
    iconName: "UploadCloud",
  },
  {
    stepNumber: "2",
    title: "Choose Model",
    description: "Male, female, plus-size, kids, luxury, or ethnic profiles.",
    iconName: "UserSquare",
  },
  {
    stepNumber: "3",
    title: "Choose Poses",
    description: "Walking, sitting, smiling, or cinematic close-ups.",
    iconName: "Accessibility",
  },
  {
    stepNumber: "4",
    title: "Background",
    description: "Studio, desert, palace, or a bespoke luxury villa.",
    iconName: "ImageInline",
  },
  {
    stepNumber: "5",
    title: "Download",
    description: "Catalog images, social media reels, and 4K videos.",
    iconName: "DownloadCloud",
  },
];

export const enterpriseFeatures: FeatureItem[] = [
  {
    title: "Consistent AI Models",
    description: "Maintain brand identity by using the same AI faces across your entire seasonal collection.",
    iconName: "Users",
  },
  {
    title: "Unlimited Poses",
    description: "From editorial runway walks to dynamic street-style movements, capture every angle flawlessly.",
    iconName: "Maximize",
  },
  {
    title: "Motion Fashion",
    description: "Generate hyper-realistic video assets where the garment's physics respond naturally to movement.",
    iconName: "Video",
  },
  {
    title: "Custom Libraries",
    description: "Build a proprietary library of models and backgrounds exclusive to your fashion label.",
    iconName: "Library",
  },
  {
    title: "Batch Generation",
    description: "Transform hundreds of product shots into studio assets simultaneously with one-click workflows.",
    iconName: "Layers",
  },
  {
    title: "Ecommerce-Ready",
    description: "Direct exports formatted for Shopify, Amazon, and luxury marketplaces with background removal.",
    iconName: "ShoppingBag",
  },
];

export const wallTransformations: TransformItem[] = [
  {
    id: "trans-saree",
    title: "Saree Elegance",
    category: "Traditional Wear",
    beforeUrl: sareeGarmentBefore,
    afterUrl: modelSareeAfter,
    beforeLabel: "Flat Lay Shot",
    afterLabel: "Editorial Studio Model",
  },
  {
    id: "trans-saree-new",
    title: "Modern Saree",
    category: "Traditional Wear",
    beforeUrl: before2,
    afterUrl: after2,
    beforeLabel: "Flat Lay Shot",
    afterLabel: "Editorial Studio Model",
  },
  {
    id: "trans-kurta",
    title: "Chikankari Kurta",
    category: "Men's Ethic",
    beforeUrl: kurtaGarmentBefore,
    afterUrl: modelKurtaAfter,
    beforeLabel: "Hanger Photo",
    afterLabel: "Outdoor Campaign Shot",
  },
  {
    id: "trans-gown",
    title: "Off-White Shirt",
    category: "Couture Design",
    beforeUrl: hangerShirtBefore, // We can reuse our hanger shirt as the basic technical layout representation
    afterUrl: sunsetModelAfter,
    beforeLabel: "Raw Asset Pattern",
    afterLabel: "Desert campaign Shot",
  }
];

export const motionShowcases: MotionItem[] = [
  {
    id: "motion-1",
    title: "Model walking",
    imageUrl: modelShirtAfter,
    description: "Standard runway step showing drape dynamics",
  },
  {
    id: "motion-2",
    title: "Saree flowing",
    imageUrl: modelSareeAfter,
    description: "Fluid wave simulator showing pleats motion",
  },
  {
    id: "motion-3",
    title: "Close-up embroidery",
    imageUrl: modelShirtAfter, // Beautiful zoom placeholder
    description: "Texture depth and close-up fabric rendering",
  },
  {
    id: "motion-4",
    title: "360-degree showcase",
    imageUrl: sunsetModelAfter,
    description: "Rotation view showing volume and silhouette",
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "It helped me make shoots for my clothing brand in a very short time. Great work, keep it up!",
    author: "Prasad Shelar",
    role: "Owner",
    company: "My Sachu Boutique",
    rating: 5,
  },
  {
    id: "test-2",
    quote: "Drapeify transformed our entire e-commerce catalog in 48 hours. The quality is brand-perfect and indistinguishable from a million-dollar physical photoshoot.",
    author: "Harsh Patel",
    role: "Marketing Head",
    company: "Heves",
    rating: 5,
  },
  {
    id: "test-3",
    quote: "Great work on models, I have almost stopped new model shoots for catalogs",
    author: "Sanjana Bole",
    role: "CEO",
    company: "Nari Sarees",
    rating: 5,
  }
];
