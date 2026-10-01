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
          className={`px-6 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${
            activeCategory === category
              ? 'bg-[#C1FF72] text-[#090e11] font-bold shadow-lg shadow-[#C1FF72]/20 border border-[#C1FF72]'
              : 'bg-[#111a1e] text-gray-300 border border-white/10 hover:bg-[#182428] hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
