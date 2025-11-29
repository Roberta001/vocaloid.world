export type Language = 'en' | 'ja' | 'zh';

export interface LocalizedString {
  en: string;
  ja: string;
  zh: string;
}

export interface LinkItem {
  id: string;
  url: string;
  name: LocalizedString;
  description: LocalizedString;
  icon?: string; // Icon identifier (Lucide)
  iconUrl?: string; // URL for custom image icon
  tags?: string[];
}

export interface Category {
  id: string;
  title: LocalizedString;
  items: LinkItem[];
}

export interface SiteConfig {
  categories: Category[];
}

export interface I18nContent {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  footer: string;
  noResults: string;
  languageName: string;
  themeToggle: string;
}