import React, { useState, useMemo } from 'react';
import { Search, AudioWaveform } from 'lucide-react';
import { siteData } from './data';
import { i18n } from './i18n';
import { Language } from './types';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { LinkCard } from './components/LinkCard';

const App = () => {
  // Try to determine default language from browser, fallback to 'en'
  const getBrowserLang = (): Language => {
    const lang = navigator.language.split('-')[0];
    if (lang === 'ja') return 'ja';
    if (lang === 'zh') return 'zh';
    return 'en';
  };

  const [lang, setLang] = useState<Language>(getBrowserLang());
  const [searchQuery, setSearchQuery] = useState('');

  const t = i18n[lang];

  // Filter logic
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase();
    
    if (!query) return siteData.categories;

    return siteData.categories.map(category => {
      // Check if category title matches
      const categoryTitleMatch = Object.values(category.title).some(t => t.toLowerCase().includes(query));
      
      // Filter items
      const matchingItems = category.items.filter(item => {
        const nameMatch = Object.values(item.name).some(n => n.toLowerCase().includes(query));
        const descMatch = Object.values(item.description).some(d => d.toLowerCase().includes(query));
        const tagMatch = item.tags?.some(tag => tag.toLowerCase().includes(query));
        return nameMatch || descMatch || tagMatch;
      });

      // If category title matches, show all items (unless specific items matched, then logic gets complex, 
      // let's stick to showing category if items match OR if title matches and we want to show all... 
      // Actually, usually search filters down items. Let's return category only if it has matching items).
      
      if (matchingItems.length > 0) {
        return { ...category, items: matchingItems };
      }
      return null;
    }).filter(Boolean) as typeof siteData.categories;
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/70 border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-miku-400 to-miku-500 rounded-xl flex items-center justify-center shadow-lg shadow-miku-500/20 text-white">
                <AudioWaveform className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-miku-600 to-teal-700 tracking-tight">
                  {t.title}
                </h1>
                <p className="text-xs text-miku-700/80 font-medium hidden sm:block">
                  {t.subtitle}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative group">
          <div className="absolute inset-0 bg-miku-400/20 rounded-full blur-xl group-hover:bg-miku-400/30 transition-colors"></div>
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full bg-white/80 border border-white/60 shadow-lg shadow-miku-900/5 focus:outline-none focus:ring-2 focus:ring-miku-400/50 focus:border-miku-300 backdrop-blur-xl text-lg transition-all"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-miku-600/60" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(category => (
              <section key={category.id} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 relative pl-4">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-miku-500 rounded-full"></span>
                    {category.title[lang]}
                  </h2>
                  <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map(item => (
                    <LinkCard key={item.id} item={item} lang={lang} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg">{t.noResults}</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/50 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>{t.footer}</p>
          <div className="mt-2 flex justify-center gap-4 text-xs opacity-70">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;