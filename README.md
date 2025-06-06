# Module 6: SBA E-Commerce System

Building an e-commerce architect to demonstrate typescript logic and understanding

## Table of contents

- [Overview](#overview)
  - [Project Planning](#Project-Planning)  
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

In this assessment, you will apply the skills you’ve developed throughout the TypeScript and Advanced JavaScript module to build a functional, real-world application. This project will test your understanding of TypeScript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction. You will have 5.5 hours to complete this assessment.

You will create an **E-commerce Product Management System** using TypeScript. The final deliverable will include a **GitHub repository** with your project and a **written reflection** on your approach and the challenges you faced.

## Project-Planning

API Research:
- [x] Research and analyze the [Dummy JSON Products API](https://dummyjson.com/docs/products) .
- [x] You will be implementing features that interact with this API.
- [x] Utilize the async/await method

Project Planning:
- [x] Based on your API research, plan the structure of your project. You will need to create API requests, handle errors, and display product information.
- [x] Before you begin coding, create a project plan and outline the steps you’ll take to implement the API interactions and display product data.
    - [] Examine the "Products" API to see what info is 'stored' in its object(s)
    - [x] Create a class based on this info
    - [x] Need to create if statement to calculate different tax prices
        - [x] default: 4.75% (0.0475)
        - [x] grocer tax: 3% (0.03)
- [x] Ensure you have thoroughly read through the requirements for the project below before you begin planning it.

### The challenge

Users should be able to:

- [x] Ping the *[Dummy JSON Products API](https://dummyjson.com/docs/products)* and **Fetch** / **Interact** with its features.
- [x] Simulate **Adding** an entry to the API.
    - [x] Calculate the **Discounted Price** and the **Taxes based on Category**
- [x] Simulate **Deleting** an entry from the API.
- [x] Simutate **Modifying** an API entry.
- [x] Run an **Error Handling** function capture different *error types*
- [] **Test** and **Debug** the code to ensure it functions as intended

### Links

- Solution URL: [GitHub: E-Commerce-System](https://github.com/DblRH600/e-commerce-system)

## My process

- Reference the instructions: [SBA: TypeScript and Advanced JavaScript](https://ps-lms.vercel.app/curriculum/se/413/sba)

### Built with

- Typescript

### What I learned

I've learned how JavaScript can be written to **fetch** data from 3rd party APIs. In addition, how to write functions ustilizing **async** and **await** to minimize lad time by allowing other functions run/process without waiting for the fetch function to return before other functions can run. I learned how to wrap errors in **try**/**catch** statements to prevent/limit errors from affecting the user. Also, learned to utilize **TypeScript** to also minimize errors.

To see how you can add code snippets, see below:

```ts
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
```

### Continued development

Further understanding of TypeScript, async functions, try/catch blocks; and debugging errors.

### Useful resources

- [TypeScript: Handbook](https://www.typescriptlang.org/docs/handbook/interfaces.html) - This helps a reader who completes the walkthrough should be able to:
    - Read and understand commonly-used TypeScript syntax and patterns
    - Explain the effects of important compiler options
    - Correctly predict type system behavior in most cases

- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) - This is an amazing article which helped me "learn about synchronous and asynchronous programming, why we often need to use asynchronous techniques, and the problems related to the way asynchronous functions have historically been implemented in JavaScript."

## Acknowledgments

Thanks to our RTT-23 Instructor Abraham Tavarez and Teaching Assistant Colton Wright for the helpful direction and work arounds to help the code to function.

