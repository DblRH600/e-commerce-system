import { dimensions, reviews, meta } from "./Product-Types"

export class Products {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: reviews;
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: meta;
    thumbnail: string;
    images: string[]


    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        tags: string[],
        brand: string,
        sku: string,
        weight: number,
        dimensions: dimensions,
        warrantyInformation: string,
        shippingInformation: string,
        availabilityStatus: string,
        reviews: reviews,
        returnPolicy: string,
        minimumOrderQuantity: number,
        meta: meta,
        thumbnail: string,
        images: string[],
    ) {
        this.id = id || Math.random() * 1000000 + 1;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.meta = meta;
        this.thumbnail = thumbnail;
        this.images = images;
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discountPercentage)/100;
    };

    displayDetails(): void {
        console.log(`Category--${this.category}: ProductId: ${this.id} (SKU:${this.sku}), Product Name: ${this.title}, Price: $${this.price} vs Discount Price:$${this.discountPercentage}`);
        console.log(`Pakcaged Shipping (Weight: ${this.weight} + Dimensions: ${this.dimensions})`) 
    }

}

