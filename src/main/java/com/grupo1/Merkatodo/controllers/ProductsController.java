package com.grupo1.Merkatodo.controllers;

import com.grupo1.Merkatodo.models.entities.Product;
import com.grupo1.Merkatodo.models.repositories.IProductsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProductsController {
    private final IProductsRepository productsRepository;

    public ProductsController(IProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @GetMapping("/api/products")
    Iterable<Product> list(@RequestParam Optional<String> listName) {
        var actualListName = listName.orElse("featured");

        if (actualListName.equals("latest")) {
            return productsRepository.listLatestProducts();
        }

        return productsRepository.listFeaturedProducts();
    }

    @PostMapping("/api/products")
    void create(@RequestBody Product product){
        productsRepository.save(product);
    }
}
