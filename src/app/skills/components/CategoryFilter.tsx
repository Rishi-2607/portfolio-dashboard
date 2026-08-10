'use client';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  className = '',
}: CategoryFilterProps) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center mb-12 ${className}`}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-2xl font-medium text-sm transition-all duration-200 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 text-white shadow-[0_0_15px_rgba(128,90,250,0.5)]'
              : 'bg-gray-900 text-gray-300 border border-white/10 hover:bg-gray-800 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
