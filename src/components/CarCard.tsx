// src/components/CarCard.tsx
import { Car } from '@/types';
import { Fuel, Gauge, CarFront } from 'lucide-react'; // Иконки

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300">
      {/* Изображение */}
      <div className="relative h-48 bg-slate-700 overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
          {car.year}
        </div>
      </div>

      {/* Инфо */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{car.brand} {car.model}</h3>
            <p className="text-slate-400 text-sm">{car.category}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-blue-400">${car.pricePerDay}</span>
            <span className="text-slate-500 text-sm block">/ day</span>
          </div>
        </div>

        {/* Характеристики */}
        <div className="grid grid-cols-3 gap-4 border-t border-slate-700 pt-4 mt-4">
          <div className="flex flex-col items-center gap-1">
            <Gauge size={18} className="text-slate-400" />
            <span className="text-[10px] uppercase text-slate-500">Power</span>
            <span className="text-xs font-semibold">{car.specs.hp} hp</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Fuel size={18} className="text-slate-400" />
            <span className="text-[10px] uppercase text-slate-500">Engine</span>
            <span className="text-xs font-semibold truncate w-full text-center">{car.specs.engine}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CarFront size={18} className="text-slate-400" />
            <span className="text-[10px] uppercase text-slate-500">Gearbox</span>
            <span className="text-xs font-semibold">{car.specs.transmission[0]}</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors">
          Rent Now
        </button>
      </div>
    </div>
  );
}