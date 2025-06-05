// import functions to run main.ts file
import { Products } from './models/Product';
import { fetchProducts } from './services/apiService';
import { taxCalculator } from './utils/taxCalculator';
import { discountCalculator } from './utils/discountCalculator';
import { errorHandler } from './utils/errorHandler';

async function main() {
    try {
        const productData = await fetchProducts();
        const products = productData.map((data: any) => new products(data));

        products.forEach((product: any) => {
            product.displayDetails();

            const discountPrice = product.getPriceWithDiscount();
            const discountValue = discountCalculator(product.price, product.discountPercentage);
            const taxValue = taxCalculator(discountPrice, product.category);

            console.log(`Discount Value: $${discountValue}`);
            console.log(`Price After Discount: $${discountPrice}`);
            console.log(`Taxes: $${taxValue}`)
            console.log(`Final Price: $${(discountPrice + taxValue).toFixed(2)}`);

        });
    } catch (error) {
        errorHandler(error);
    }
}

main();