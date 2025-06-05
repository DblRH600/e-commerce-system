// import { Products } from '../models/Product'

export class appError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'appError';
    }
}

export function errorHandler(error: unknown): void {
    if (error instanceof appError) {
        console.error(`[ App Error ]: ${error.message}`);
    } else {
        console.error(`[ Unknown Error ]: `, error)
    }
}