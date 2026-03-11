export type CarCategory = 'Sedan' | 'Sport' | 'Luxury' | 'Family';

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  imageUrl: string;
  category: CarCategory;
  specs: {
    hp: number;
    engine: string;
    transmission: 'Automatic' | 'Manual';
  };
  isAvailable: boolean;
}