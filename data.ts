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
          id: "ace",
          url: "https://ace-studio.timedomain.cn/",
          name: { en: "ACE Studio", ja: "ACE Studio", zh: "ACE Studio" },
          description: { en: "Next-gen AI vocal synthesis.", ja: "次世代AI歌声合成。", zh: "新一代AI歌声合成引擎。" },
          icon: "Music",
          tags: ["ai", "subscription"]
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
          id: "openutau",
          url: "https://www.openutau.com/",
          name: { en: "OpenUtau", ja: "OpenUtau", zh: "OpenUtau" },
          description: { en: "Modern open-source UTAU editor.", ja: "UTAUのためのモダンなエディタ。", zh: "现代化的开源UTAU编辑器。" },
          icon: "Code",
          tags: ["opensource", "free"]
        },
        {
          id: "piapro",
          url: "https://piapro.net/intl/en.html",
          name: { en: "Piapro Studio", ja: "Piapro Studio", zh: "Piapro Studio" },
          description: { en: "Crypton's vocal editor plugin.", ja: "クリプトン製ボーカルエディタ。", zh: "Crypton Future Media开发的编辑器插件。" },
          icon: "Music",
          tags: ["miku", "plugin"]
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
          description: { en: "Official content collaboration.", ja: "CGM型コンテンツ投稿サイト。", zh: "官方内容投稿与协作平台。" },
          icon: "Palette",
          tags: ["art", "music"]
        },
        {
          id: "vsqx",
          url: "https://vsqx.top/",
          name: { en: "VSQx.top", ja: "VSQx.top", zh: "VSQx.top" },
          description: { en: "Motion and project files.", ja: "プロジェクトファイル共有。", zh: "工程文件与调教分享。" },
          icon: "FileAudio",
          tags: ["ust", "vsqx"]
        }
      ]
    },
    {
      id: "tutorials",
      title: {
        en: "Tutorials & Guides",
        ja: "チュートリアル・講座",
        zh: "教程与指南"
      },
      items: [
        {
          id: "bili_tutorial",
          url: "https://search.bilibili.com/all?keyword=vocaloid%20%E6%95%99%E7%A8%8B",
          name: { en: "Bilibili Tutorials", ja: "Bilibili 講座", zh: "Bilibili 教程搜索" },
          description: { en: "Video tutorials (Chinese).", ja: "中国語圏の動画講座。", zh: "海量中文Vocaloid调教教程。" },
          icon: "Tv",
          tags: ["video", "learning"]
        },
        {
          id: "yt_tutorial",
          url: "https://www.youtube.com/results?search_query=vocaloid+tuning+tutorial",
          name: { en: "YouTube Tutorials", ja: "YouTube 講座", zh: "YouTube 教程搜索" },
          description: { en: "Global video tutorials.", ja: "世界中の動画講座。", zh: "全球用户的视频教程。" },
          icon: "Video",
          tags: ["video", "learning"]
        },
        {
          id: "wiki_tutorial",
          url: "https://vocaloid.fandom.com/wiki/Category:Tutorials",
          name: { en: "Wiki Guides", ja: "Wiki ガイド", zh: "Wiki 文字教程" },
          description: { en: "Written technical guides.", ja: "技術的な解説記事。", zh: "技术文档与文字指南。" },
          icon: "Book",
          tags: ["text", "guide"]
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
      id: "community",
      title: {
        en: "Communities",
        ja: "コミュニティ",
        zh: "社区与讨论"
      },
      items: [
        {
          id: "discord",
          url: "https://discord.gg/vocaloid",
          name: { en: "Discord Server", ja: "Discord サーバー", zh: "Discord 频道" },
          description: { en: "r/Vocaloid official Discord.", ja: "r/Vocaloid 公式Discord。", zh: "国际Vocaloid交流频道。" },
          icon: "MessageSquare",
          tags: ["chat", "global"]
        },
        {
          id: "reddit",
          url: "https://www.reddit.com/r/Vocaloid/",
          name: { en: "r/Vocaloid", ja: "r/Vocaloid", zh: "Reddit 讨论区" },
          description: { en: "International discussion board.", ja: "国際的な掲示板。", zh: "国际讨论版块。" },
          icon: "Globe",
          tags: ["forum"]
        },
        {
          id: "bilibili",
          url: "https://www.bilibili.com/v/music/vocaloid/",
          name: { en: "Bilibili Vocaloid", ja: "Bilibili", zh: "哔哩哔哩 Vocaloid区" },
          description: { en: "Major Chinese community.", ja: "中国の動画コミュニティ。", zh: "最大的中文Vocaloid视频社区。" },
          icon: "Tv",
          tags: ["video", "chinese"]
        }
      ]
    }
  ]
};