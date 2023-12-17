import { ProductTableRow } from '/js/components/products/ProductTableRow.js';
import { list } from '/js/api/products.js';

async function Admin() {
    const context = document.getElementById('products');

    const productsList = context.querySelector('table#products-list > tbody');

    const products = await list();

    productsList.replaceChildren(...products.map(ProductTableRow));
}

Admin();