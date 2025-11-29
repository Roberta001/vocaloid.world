import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { i18n } from '../i18n';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors backdrop-blur-sm border border-miku-200 text-miku-800"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{i18n[currentLang].languageName}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-miku-100 overflow-hidden z-50">
          {(Object.keys(i18n) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                currentLang === lang
                  ? 'bg-miku-50 text-miku-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {i18n[lang].languageName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};