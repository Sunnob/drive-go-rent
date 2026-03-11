"use client"; // Добавляем в самое начало

import { useState } from 'react';
import { mockCars } from '@/data/cars';
import CarCard from '@/components/CarCard';
import Filters from '@/components/Filters';

export default function HomePage() {
  const [category, setCategory] = useState("All");

  // Логика фильтрации
  const filteredCars = category === "All" 
    ? mockCars 
    : mockCars.filter(car => car.category === category);

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 pb-20">
      <div className="relative py-20 px-8 text-center bg-gradient-to-b from-blue-900/20 to-transparent">
        <h1 className="text-6xl font-black tracking-tight text-white mb-4 italic">
          DRIVE <span className="text-blue-500">GO</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">Premium Car Rental for 2026</p>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <Filters activeCategory={category} setActiveCategory={setCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No cars found in this category.
          </div>
        )}
      </div>
    </main>
  );
}