"use client";

import { CarCategory } from "@/types";

interface FiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories: (CarCategory | "All")[] = ["All", "Sport", "Sedan", "Luxury", "Family"];

export default function Filters({ activeCategory, setActiveCategory }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full border transition-all ${
            activeCategory === cat
              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}