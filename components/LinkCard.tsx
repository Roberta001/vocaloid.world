import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LinkItem, Language } from '../types';
import { IconHelper } from './IconHelper';

interface Props {
  item: LinkItem;
  lang: Language;
}

export const LinkCard: React.FC<Props> = ({ item, lang }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
    >
      <div className="h-full bg-white/70 backdrop-blur-md rounded-xl p-5 border border-white/50 shadow-sm hover:shadow-lg hover:border-miku-300 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2.5 bg-gradient-to-br from-miku-50 to-miku-100 rounded-lg text-miku-600 group-hover:text-miku-700 group-hover:scale-110 transition-transform duration-300">
            <IconHelper name={item.icon} className="w-6 h-6" />
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-miku-500 transition-colors opacity-0 group-hover:opacity-100" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-1.5 group-hover:text-miku-700 transition-colors">
          {item.name[lang]}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.description[lang]}
        </p>

        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium group-hover:bg-miku-50 group-hover:text-miku-600 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};