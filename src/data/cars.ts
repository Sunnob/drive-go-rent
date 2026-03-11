import { Car } from '@/types';

export const mockCars: Car[] = [
  {
    id: 'm3-g80',
    brand: 'BMW',
    model: 'M3 G80',
    year: 2024,
    pricePerDay: 450,
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=M3+G80',
    category: 'Sport',
    specs: { hp: 510, engine: '3.0L I6 S58', transmission: 'Automatic' },
    isAvailable: true,
  },
  {
    id: 'camry-2026',
    brand: 'Toyota',
    model: 'Camry',
    year: 2026,
    pricePerDay: 130,
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Camry+2026',
    category: 'Sedan',
    specs: { hp: 225, engine: '2.5L Hybrid', transmission: 'Automatic' },
    isAvailable: true,
  },
  // Добавь сюда M5 F90 и E63 по аналогии, если хочешь
];