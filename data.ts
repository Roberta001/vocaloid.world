import { SiteConfig } from './types';

export const siteData: SiteConfig = {
  categories: [
    {
      id: "editors",
      title: {
        en: "Vocal Synthesizers & Editors",
        ja: "歌声合成ソフトウェア",
        zh: "歌声合成软件与编辑器"
      },
      items: [
        {
          id: "vocaloid",
          url: "https://www.vocaloid.com/",
          name: { en: "VOCALOID Official", ja: "VOCALOID 公式", zh: "VOCALOID 官网" },
          description: { en: "The standard for vocal synthesis.", ja: "歌声合成のスタンダード。", zh: "歌声合成技术的行业标准。" },
          icon: "Mic2",
          tags: ["yamaha", "editor"]
        },
        {
          id: "synthv",
          url: "https://dreamtonics.com/synthesizerv/",
          name: { en: "Synthesizer V", ja: "Synthesizer V", zh: "Synthesizer V" },
          description: { en: "AI-driven realistic vocals.", ja: "AI技術によるリアルな歌声。", zh: "AI驱动的逼真歌声合成软件。" },
          icon: "Sparkles",
          tags: ["ai", "dreamtonics"]
        },
        {
          id: "piapro",
          url: "https://piapro.net/intl/en.html",
          name: { en: "Piapro Studio", ja: "Piapro Studio", zh: "Piapro Studio" },
          description: { en: "Crypton's vocal editor plugin.", ja: "クリプトン製ボーカルエディタ。", zh: "Crypton Future Media开发的编辑器插件。" },
          icon: "Music",
          tags: ["miku", "plugin"]
        },
        {
          id: "cevio",
          url: "https://cevio.jp/",
          name: { en: "CeVIO AI", ja: "CeVIO AI", zh: "CeVIO AI" },
          description: { en: "Voice creation utilizing AI.", ja: "AI技術を活用した音声創作。", zh: "利用AI技术的语音创作软件。" },
          icon: "Cpu",
          tags: ["ai"]
        },
        {
          id: "utau",
          url: "http://utau-synth.com/",
          name: { en: "UTAU", ja: "UTAU", zh: "UTAU" },
          description: { en: "Free singing voice synthesis tool.", ja: "歌声合成ツール（フリーソフト）。", zh: "经典的免费歌声合成工具。" },
          icon: "Download",
          tags: ["free", "legacy"]
        },
        {
          id: "openutau",
          url: "https://www.openutau.com/",
          name: { en: "OpenUtau", ja: "OpenUtau", zh: "OpenUtau" },
          description: { en: "Modern open-source editor for UTAU.", ja: "UTAUのためのモダンなオープンソースエディタ。", zh: "现代化的开源UTAU编辑器。" },
          icon: "Code",
          tags: ["opensource"]
        }
      ]
    },
    {
      id: "databases",
      title: {
        en: "Databases & Wikis",
        ja: "データベース・Wiki",
        zh: "数据库与维基"
      },
      items: [
        {
          id: "vocadb",
          url: "https://vocadb.net/",
          name: { en: "VocaDB", ja: "VocaDB", zh: "VocaDB" },
          description: { en: "Extensive discography database.", ja: "包括的な楽曲データベース。", zh: "最全面的Vocaloid歌曲资料库。" },
          icon: "Database",
          tags: ["info", "lyrics"]
        },
        {
          id: "fandom",
          url: "https://vocaloid.fandom.com/",
          name: { en: "Vocaloid Wiki", ja: "Vocaloid Wiki", zh: "Vocaloid 维基" },
          description: { en: "Community encyclopedia.", ja: "コミュニティ百科事典。", zh: "社区维护的百科全书。" },
          icon: "Book",
          tags: ["wiki"]
        },
        {
          id: "moegirl",
          url: "https://zh.moegirl.org.cn/Vocaloid",
          name: { en: "Moegirl Vocaloid", ja: "萌娘百科 Vocaloid", zh: "萌娘百科 Vocaloid" },
          description: { en: "Anime culture wiki (CN).", ja: "中国のアニメ文化Wiki。", zh: "万物皆可萌的百科全书。" },
          icon: "Globe",
          tags: ["wiki", "chinese"]
        }
      ]
    },
    {
      id: "resources",
      title: {
        en: "Resources & Assets",
        ja: "素材・リソース",
        zh: "资源与素材"
      },
      items: [
        {
          id: "bowlroll",
          url: "https://bowlroll.net/",
          name: { en: "BowlRoll", ja: "BowlRoll", zh: "BowlRoll" },
          description: { en: "MMD models and data repository.", ja: "MMDモデル等のデータ配布所。", zh: "MMD模型与数据分发站。" },
          icon: "Box",
          tags: ["mmd", "download"]
        },
        {
          id: "piapronet",
          url: "https://piapro.jp/",
          name: { en: "piapro", ja: "piapro (ピアプロ)", zh: "piapro" },
          description: { en: "Content collaboration site.", ja: "CGM型コンテンツ投稿サイト。", zh: "官方内容投稿与协作平台。" },
          icon: "Palette",
          tags: ["art", "music"]
        },
        {
          id: "vsqx",
          url: "https://vsqx.top/",
          name: { en: "VSQx.top", ja: "VSQx.top", zh: "VSQx.top" },
          description: { en: "Motion and project file sharing.", ja: "プロジェクトファイル共有。", zh: "工程文件与调教分享。" },
          icon: "FileAudio",
          tags: ["ust", "vsqx"]
        }
      ]
    },
    {
      id: "community",
      title: {
        en: "Communities",
        ja: "コミュニティ",
        zh: "社区与讨论"
      },
      items: [
        {
          id: "reddit",
          url: "https://www.reddit.com/r/Vocaloid/",
          name: { en: "r/Vocaloid", ja: "r/Vocaloid", zh: "Reddit Vocaloid版" },
          description: { en: "International discussion board.", ja: "国際的な掲示板。", zh: "国际讨论版块。" },
          icon: "MessageSquare",
          tags: ["forum"]
        },
        {
          id: "bilibili",
          url: "https://www.bilibili.com/v/music/vocaloid/",
          name: { en: "Bilibili Vocaloid", ja: "Bilibili", zh: "哔哩哔哩 Vocaloid区" },
          description: { en: "Major Chinese video platform.", ja: "中国の動画プラットフォーム。", zh: "最大的中文Vocaloid视频社区。" },
          icon: "Tv",
          tags: ["video", "chinese"]
        },
        {
          id: "niconico",
          url: "https://www.nicovideo.jp/genre/vocaloid",
          name: { en: "Niconico", ja: "ニコニコ動画", zh: "Niconico动画" },
          description: { en: "The birthplace of Vocaloid culture.", ja: "ボカロ文化の発祥地。", zh: "Vocaloid文化的发源地。" },
          icon: "Video",
          tags: ["video", "japanese"]
        }
      ]
    }
  ]
};