import { Product, taxCalculation } from "./06-funtion-destructuring";

const ShoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]


const [total, tax ] = taxCalculation({
    products:ShoppingCart,
    tax: 0.15
})


console.log('Total: ', total)
console.log('Tax: ', tax)