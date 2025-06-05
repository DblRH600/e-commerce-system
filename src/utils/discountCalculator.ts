// import { Products } from '../models/Product';

export function discountCalculator (price: number, discountPercentage: number): number {
    return Number(((price * discountPercentage) / 100).toFixed(2));
}