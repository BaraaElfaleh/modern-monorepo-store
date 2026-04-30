import React from 'react';
import { useCategories } from '../hooks/useCategories';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const { categories, loading, error } = useCategories();

  if (loading) return (
    <div className="flex gap-3 overflow-x-auto py-6 no-scrollbar">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="h-10 w-24 bg-surface-muted animate-pulse" 
          style={{ borderRadius: 'var(--radius-button)' }} 
        />
      ))}
    </div>
  );
  
  if (error) return null;

  return (
    <nav className="w-full overflow-x-auto no-scrollbar py-6">
      <div className="flex items-center gap-3 w-max px-1">
        {/* زر الكل - All */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-2 text-sm font-medium transition-all border ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary shadow-soft scale-105'
              : 'bg-surface text-text-muted border-border hover:border-primary/30 hover:text-primary hover:bg-surface-muted'
          }`}
          style={{ 
            borderRadius: 'var(--radius-button)',
            transitionDuration: 'var(--transition-base)' 
          }}
        >
          All Collections
        </button>

        {/* قائمة التصنيفات */}
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-6 py-2 text-sm font-medium whitespace-nowrap transition-all border ${
              activeCategory === category.slug
                ? 'bg-primary text-primary-foreground border-primary shadow-soft scale-105'
                : 'bg-surface text-text-muted border-border hover:border-primary/30 hover:text-primary hover:bg-surface-muted'
            }`}
            style={{ 
              borderRadius: 'var(--radius-button)',
              transitionDuration: 'var(--transition-base)'
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};