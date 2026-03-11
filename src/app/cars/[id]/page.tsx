// src/app/cars/[id]/page.tsx
import { mockCars } from '@/data/cars';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function CarDetails({ params }: { params: { id: string } }) {
  // Находим нужную машину по id из URL
  const car = mockCars.find(c => c.id === params.id);

  // Если машина не найдена (например, ввели /cars/lamborghini) — покажем 404
  if (!car) notFound();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 md:p-20">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to Catalog
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Левая колонка: Картинка */}
        <div className="rounded-3xl overflow-hidden bg-slate-800 aspect-video flex items-center justify-center border border-slate-700">
           <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
        </div>

        {/* Правая колонка: Инфо */}
        <div>
          <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold">
            {car.category}
          </span>
          <h1 className="text-6xl font-black mt-4 uppercase">
            {car.brand} <br />
            <span className="text-slate-500">{car.model}</span>
          </h1>
          
          <div className="mt-8 space-y-4">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Year</span>
              <span className="font-bold">{car.year}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Engine</span>
              <span className="font-bold">{car.specs.engine}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Power</span>
              <span className="font-bold text-orange-400">{car.specs.hp} HP</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">Total Price</p>
              <p className="text-4xl font-black">${car.pricePerDay} <span className="text-lg font-normal text-slate-500">/day</span></p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              Confirm Rental
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}