import { I18nContent, Language } from './types';

export const i18n: Record<Language, I18nContent> = {
  en: {
    title: "Vocaloid.World",
    subtitle: "VOCALOID Navigation Site",
    searchPlaceholder: "Search resources, editors, wikis...",
    footer: "© 2025 Vocaloid.World. All rights reserved.",
    noResults: "No results found matching your query.",
    languageName: "English",
    themeToggle: "Toggle Theme"
  },
  ja: {
    title: "Vocaloid.World",
    subtitle: "VOCALOID ナビゲーションサイト",
    searchPlaceholder: "リソース、エディタ、Wikiを検索...",
    footer: "© 2025 Vocaloid.World. All rights reserved.",
    noResults: "条件に一致する結果が見つかりませんでした。",
    languageName: "日本語",
    themeToggle: "テーマ切り替え"
  },
  zh: {
    title: "Vocaloid.World",
    subtitle: "VOCALOID导航站",
    searchPlaceholder: "搜索编辑器、资源站、百科...",
    footer: "© 2025 Vocaloid.World. 保留所有权利。",
    noResults: "未找到匹配的结果。",
    languageName: "简体中文",
    themeToggle: "切换主题"
  }
};