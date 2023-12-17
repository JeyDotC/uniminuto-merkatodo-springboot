import { div } from '/js/lib/dom.js';
import { ProductCard } from '/js/components/products/ProductCard.js';

export function ProductsList({ products }) {
    const productRows = products.reduce((accumulate, item, index) => {
       if(index % 2 === 0){
           accumulate.push([products[index], products[index+1]].filter(Boolean));
       }
       return accumulate;
     },[]);


    return div({},
        ...productRows.map((productsRow) => div({className: "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"},
            ...productsRow.map((product) => ProductCard(product))
        ))
    );
}