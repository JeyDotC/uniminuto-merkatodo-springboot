import { ProductsList } from '/js/components/products/ProductsList.js';

const productsList = document.getElementById('products-list');

const products = [
                      {
                             "id": 1,
                             "productName": "Jabón Líquido",
                             "brandName": "Ariel",
                             "description": "El jabón más hueleroso",
                             "measurement": "litros",
                             "measurementQuantity": 1,
                             "stock": 15,
                             "price": 5200
                         },
                          {
                                 "id": 1,
                                 "productName": "Jabón Líquido",
                                 "brandName": "Ariel",
                                 "description": "El jabón más hueleroso",
                                 "measurement": "litros",
                                 "measurementQuantity": 1,
                                 "stock": 15,
                                 "price": 5200
                             },
                              {
                                     "id": 1,
                                     "productName": "Jabón Líquido",
                                     "brandName": "Ariel",
                                     "description": "El jabón más hueleroso",
                                     "measurement": "litros",
                                     "measurementQuantity": 1,
                                     "stock": 15,
                                     "price": 5200
                                 },
                                  {
                                         "id": 1,
                                         "productName": "Jabón Líquido",
                                         "brandName": "Ariel",
                                         "description": "El jabón más hueleroso",
                                         "measurement": "litros",
                                         "measurementQuantity": 1,
                                         "stock": 15,
                                         "price": 5200
                                     }
                 ];

console.log(ProductsList({ products }));
productsList.replaceChildren(ProductsList({ products }));