// import { Products } from '../models/Product'

// const API_URL = 'https://dummyjson.com/products';

export async function fetchProducts() {
    // institute a try block to assist with error handling
    try {
        const res = await fetch('https://dummyjson.com/products');

        if (!res.ok) {
             throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        // console.log("Fetched Products: ", res.json())
        return data.products

    } catch (error) {
        // console.error('Error fetching Product data: ', error)
         throw new Error(`Error fetching Product data: ${error}`)
    }
}