import { VisualMode, GeneratedContent } from "../types";

// Contenido estático predefinido que mantiene el tono del "Director Creativo"
// Reemplaza la generación dinámica por IA
const STATIC_CONTENT: Record<VisualMode, GeneratedContent> = {
  photo: {
    headline: "Perfección Tangible",
    subheadline: "Cada puntada revela una obsesión absoluta por el detalle inmaculado.",
    ctaText: "Sentir la Textura"
  },
  video: {
    headline: "Legado en Movimiento",
    subheadline: "Historia viva forjada a mano para el viaje del caballero moderno.",
    ctaText: "Ver la Maestría"
  },
  abstract: {
    headline: "Ingeniería del Estilo",
    subheadline: "Fusión inteligente de estructura arquitectónica y diseño funcional.",
    ctaText: "Analizar Forma"
  },
  minimal: {
    headline: "Esencia Pura",
    subheadline: "Confianza absoluta sin adornos. Donde menos es definitivamente más.",
    ctaText: "Descubrir"
  }
};

export const generateHeroContent = async (mode: VisualMode): Promise<GeneratedContent> => {
  // Simulamos un breve tiempo de carga para mantener la fluidez de la UI
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return STATIC_CONTENT[mode];
};