package com.grupo1.Merkatodo.controllers;

import com.grupo1.Merkatodo.models.entities.Product;
import com.grupo1.Merkatodo.models.repositories.IProductsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {
    private final IProductsRepository productsRepository;

    public ProductsController(IProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @GetMapping("/api/products")
    Iterable<Product> list() {
        return productsRepository.findAll();
    }
}
