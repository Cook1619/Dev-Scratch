interface Product {
    name: string;
    price: number;
    quantity: number;
}

const printProductSummary = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`);
}



