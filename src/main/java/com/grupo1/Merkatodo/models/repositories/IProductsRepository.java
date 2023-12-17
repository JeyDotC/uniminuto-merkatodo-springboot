package com.grupo1.Merkatodo.models.repositories;

import com.grupo1.Merkatodo.models.entities.Product;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface IProductsRepository extends CrudRepository<Product, Integer> {
    @Query("SELECT * FROM Products p ORDER BY id DESC LIMIT 6")
    Iterable<Product> listFeaturedProducts();

    @Query("SELECT * FROM Products p ORDER BY id DESC LIMIT 20")
    Iterable<Product> listLatestProducts();
}
