package com.grupo1.Merkatodo.models.repositories;

import com.grupo1.Merkatodo.models.entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface IProductsRepository extends CrudRepository<Product, Integer> {
}
