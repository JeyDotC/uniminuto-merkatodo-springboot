import { ProductsList } from '/js/components/products/ProductsList.js';
import { list } from '/js/api/products.js';

async function Index() {
    const productsList = document.getElementById('products-list');

    const products = await list();

    productsList.replaceChildren(ProductsList({ products }));

}

Index();