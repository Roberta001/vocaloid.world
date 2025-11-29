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
          description: { 
            en: "Liberate your music production.", 
            ja: "キミの音楽制作を自由にする", 
            zh: "释放你的音乐创作力。" 
          },
          icon: "Mic2",
          iconUrl: "https://www.vocaloid.com/favicon.ico",
          tags: ["yamaha", "editor"]
        },
        {
          id: "synthv",
          url: "https://dreamtonics.com/synthesizerv/",
          name: { en: "Synthesizer V", ja: "Synthesizer V", zh: "Synthesizer V" },
          description: { 
            en: "The Industry-Standard Song & Vocal Production Software", 
            ja: "業界標準の歌声・ボーカル制作ソフトウェア", 
            zh: "行业标准的歌曲与人声制作软件" 
          },
          icon: "Sparkles",
          iconUrl: "https://dreamtonics.com/wp-content/themes/homepage_theme_240416/assets/img/favicon.ico",
          tags: ["ai", "dreamtonics"]
        },
        {
          id: "ace",
          url: "https://ace-studio.timedomain.cn/",
          name: { en: "ACE Studio", ja: "ACE Studio", zh: "ACE Studio" },
          description: { 
            en: "AI SINGING VOICE GENERATOR", 
            ja: "AI歌声合成ジェネレーター", 
            zh: "AI歌声合成生成器" 
          },
          icon: "Music",
          iconUrl: "https://acestudio.ai/favicon.ico",
          tags: ["ai", "subscription"]
        },
        {
          id: "cevio",
          url: "https://cevio.jp/",
          name: { en: "CeVIO AI", ja: "CeVIO AI", zh: "CeVIO AI" },
          description: { 
            en: "New-gen software reproducing human vocal nuances via AI.", 
            ja: "AI技術により、人間の声質・癖・歌い方・話し方を高精度に再現する新世代の音声創作ソフトウェア。", 
            zh: "利用AI高精度再现人声特质与习惯的新一代语音创作软件。" 
          },
          icon: "Cpu",
          iconUrl: "https://cevio.jp/favicon.ico",
          tags: ["ai"]
        },
        {
          id: "openutau",
          url: "https://www.openutau.com/",
          name: { en: "OpenUtau", ja: "OpenUtau", zh: "OpenUtau" },
          description: { 
            en: "Open singing synthesis platform / Open source UTAU successor", 
            ja: "オープンな歌声合成プラットフォーム / UTAUの後継", 
            zh: "开放歌声合成平台 / 开源UTAU继承者" 
          },
          icon: "Code",
          iconUrl: "https://www.openutau.com/assets/images/favicon.png",
          tags: ["opensource", "free"]
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
          description: { 
            en: "Platform for sharing creative works, assets, and information.", 
            ja: "動画、画像、音楽、ゲーム等の作品公開、及び制作における素材やプログラムの配布、情報共有の場を提供するサイトです。", 
            zh: "作品发布与制作素材、程序分发及信息共享平台。" 
          },
          icon: "Box",
          iconUrl: "https://bowlroll.net/favicon.ico",
          tags: ["mmd", "download"]
        },
        {
          id: "piapronet",
          url: "https://piapro.jp/",
          name: { en: "piapro", ja: "piapro (ピアプロ)", zh: "piapro" },
          description: { en: "Official content collaboration.", ja: "CGM型コンテンツ投稿サイト。", zh: "官方内容投稿与协作平台。" },
          icon: "Palette",
          iconUrl: "https://piapro.jp/r/images/header/favicon.ico",
          tags: ["art", "music"]
        },
        {
          id: "vsqx",
          url: "https://www.vsqx.top/",
          name: { en: "VSQx.top", ja: "VSQx.top", zh: "VSQx.top" },
          description: { 
            en: "Vocaloid technical articles and project file sharing.", 
            ja: "Vocaloid技術記事・プロジェクトファイル共有サイト。", 
            zh: "Vocaloid软件的技术文章、工程文件分享站" 
          },
          icon: "FileAudio",
          iconUrl: "https://vsqx-assets.vsqx.top/icon/icon_10_s.ico",
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
          id: "ivocaloid",
          url: "http://wiki.ivocaloid.com/information:tutorial",
          name: { en: "VOCALOID & UTAU Tutorials", ja: "VOCALOID・UTAU講座まとめ", zh: "VOCALOID、UTAU教程汇总" },
          description: { 
            en: "Comprehensive collection of tutorials.", 
            ja: "VOCALOIDやUTAUの講座・チュートリアル集。", 
            zh: "VOCALOID、UTAU教程汇总。" 
          },
          icon: "Book",
          tags: ["wiki", "learning"]
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
          tags: ["wiki","english"]
        },
        {
          id: "moegirl",
          url: "https://zh.moegirl.org.cn/Vocaloid",
          name: { en: "Moegirl Vocaloid", ja: "萌娘百科 Vocaloid", zh: "萌娘百科 Vocaloid" },
          description: { en: "Anime culture wiki (CN).", ja: "中国のアニメ文化Wiki。", zh: "万物皆可萌的百科全书。" },
          icon: "Globe",
          tags: ["wiki", "chinese"]
        },
        {
          id: "vocawiki",
          url: "https://voca.wiki/",
          name: { en: "Vocawiki", ja: "Vocawiki", zh: "Vocawiki" },
          description: { 
            en: "Wiki for non-Chinese/foreign virtual singers.", 
            ja: "非中国語圏のバーチャルシンガーWiki。", 
            zh: "非中文/外文虚拟歌手Wiki。" 
          },
          icon: "Globe",
          iconUrl: "https://voca.wiki/favicon.ico",
          tags: ["wiki"]
        },
        {
          id: "lisfox",
          url: "https://monitor.lisfox.top/",
          name: { en: "Vocaloid Scanner", ja: "Vocaloid Scanner", zh: "Vocaloid Scanner" },
          description: { 
            en: "Real-time data scanner for Bilibili, YouTube, and Niconico.", 
            ja: "Bilibili/Youtube/Niconicoリアルタイムデータスキャナー。", 
            zh: "Bilibili/Youtube/Niconico实时数据扫描器" 
          },
          icon: "Activity",
          tags: ["data", "tool"]
        },
        {
          id: "vocabili",
          url: "https://vocabili.top/",
          name: { en: "Vocabili Database", ja: "Vocabili データベース", zh: "术力口数据库" },
          description: { 
            en: "Daily statistics for Bilibili virtual singer songs.", 
            ja: "Bilibiliバーチャルシンガー楽曲の日次データ統計。", 
            zh: "bilibili虚拟歌手歌曲每日数据统计" 
          },
          icon: "BarChart",
          iconUrl: "https://vocabili.top/favicon.ico",
          tags: ["statistics", "bilibili"]
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
        },
        {
          id: "qqgroup",
          url: "https://qm.qq.com/q/RkHJSVB7mE",
          name: { 
            en: "Shulikou Gathering (QQ)", 
            ja: "术力口聚集地 (QQ)", 
            zh: "术力口聚集地" 
          },
          description: { 
            en: "A group deeply in love with Vocaloid.", 
            ja: "VOCALOIDを深く愛するグループ。", 
            zh: "这是一个深爱着术力口的群" 
          },
          icon: "MessageSquare",
          iconUrl: "https://p.qlogo.cn/gh/731192205/731192205/640/",
          tags: ["chat", "chinese", "qq"]
        }
      ]
    }
  ]
};