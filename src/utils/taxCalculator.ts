// import { Products } from '../models/Product';

export function taxCalculator (price: number, category: string): number {
    if (category == 'groceries') {
        return Number((price * 0.03).toFixed(2));
    } else {
        return Number((price * 0.0475).toFixed(2));
    }
}

