export type VisualMode = 'photo' | 'video' | 'abstract' | 'minimal';

export interface GeneratedContent {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export interface HeroProps {
  mode: VisualMode;
  content: GeneratedContent | null;
  loading: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}