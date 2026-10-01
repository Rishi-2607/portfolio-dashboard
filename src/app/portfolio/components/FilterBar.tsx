'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export default function FilterBar({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  searchQuery,
  onCategoryChange,
  onTechnologyChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedTechnology !== 'All' ||
    searchQuery !== '';

  return (
    <div className="
      rounded-2xl p-6 mb-8
      bg-[#111a1e]
      border border-white/10
      shadow-[0_0_25px_rgba(0,0,0,0.4)]
      backdrop-blur-md
    ">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* SEARCH */}
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Search Projects
          </label>
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by project name or description..."
              className="
                relative z-10 w-full pl-10 pr-4 py-2.5 rounded-lg
                bg-white/5 border border-white/10
                text-gray-100 placeholder:text-gray-400
                focus:ring-2 focus:ring-[#C1FF72] focus:border-transparent
                transition-all
              "
            />
          </div>
        </div>

        {/* CATEGORY */}
        <div className="lg:w-64">
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Category
          </label>
          <div className="relative">
            <Icon
              name="FolderIcon"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
            />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="
                relative z-10 w-full pl-10 pr-10 py-2.5 rounded-lg
                bg-[#182428] border border-white/10 text-gray-100
                focus:ring-2 focus:ring-[#C1FF72] focus:border-transparent
                transition-all appearance-none
              "
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-[#111a1e]">
                  {category}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
            />
          </div>
        </div>

        {/* TECHNOLOGY */}
        <div className="lg:w-64">
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Technology
          </label>
          <div className="relative">
            <Icon
              name="CodeBracketIcon"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
            />
            <select
              value={selectedTechnology}
              onChange={(e) => onTechnologyChange(e.target.value)}
              className="
                relative z-10 w-full pl-10 pr-10 py-2.5 rounded-lg
                bg-[#182428] border border-white/10 text-gray-100
                focus:ring-2 focus:ring-[#C1FF72] focus:border-transparent
                transition-all appearance-none
              "
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech} className="bg-[#111a1e]">
                  {tech}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
            />
          </div>
        </div>

        {/* CLEAR FILTERS */}
        {hasActiveFilters && (
          <div className="flex items-end">
            <button
              onClick={onClearFilters}
              className="
                relative z-10 flex items-center gap-2 px-4 py-2.5
                bg-white/5 border border-white/10
                text-gray-100 rounded-lg
                hover:bg-white/10 hover:border-[#C1FF72]/40 hover:text-[#C1FF72]
                transition-all shadow-sm
              "
            >
              <Icon name="XMarkIcon" size={18} />
              <span>Clear</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
