import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; page?: string }[];
  onNavigate: (page: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs font-medium text-slate-500 flex-wrap">
          <li className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1 hover:text-navy transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </button>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !item.page ? (
                  <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.page!)}
                    className="hover:text-navy transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
