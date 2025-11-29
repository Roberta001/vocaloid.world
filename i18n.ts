import { I18nContent, Language } from './types';

export const i18n: Record<Language, I18nContent> = {
  en: {
    title: "Vocaloid.World",
    subtitle: "Navigate the digital singer ecosystem",
    searchPlaceholder: "Search resources, editors, wikis...",
    footer: "© 2024 Vocaloid.World. Created for the community.",
    noResults: "No results found matching your query.",
    languageName: "English",
    themeToggle: "Toggle Theme"
  },
  ja: {
    title: "Vocaloid.World",
    subtitle: "デジタルシンガーの世界をナビゲート",
    searchPlaceholder: "リソース、エディタ、Wikiを検索...",
    footer: "© 2024 Vocaloid.World. コミュニティのために作成されました。",
    noResults: "条件に一致する結果が見つかりませんでした。",
    languageName: "日本語",
    themeToggle: "テーマ切り替え"
  },
  zh: {
    title: "Vocaloid.World",
    subtitle: "连接虚拟歌姬的数字生态",
    searchPlaceholder: "搜索编辑器、资源站、百科...",
    footer: "© 2024 Vocaloid.World. 为社区而生。",
    noResults: "未找到匹配的结果。",
    languageName: "简体中文",
    themeToggle: "切换主题"
  }
};