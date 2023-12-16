package com.grupo1.Merkatodo.models.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("products")
public class Product {
    @Id
    @Column("id")
    private int id;

    @Column("product_name")
    private String productName;
    @Column("brand_name")
    private String brandName;
    @Column("description")
    private String description;
    @Column("measurement")
    private String measurement;
    @Column("measurement_quantity")
    private int measurementQuantity;
    @Column("stock")
    private int stock;
    @Column("price")
    private double price;

    public Product(int id, String productName, String brandName, String description, String measurement, int measurementQuantity, int stock, double price) {
        this.id = id;
        this.productName = productName;
        this.brandName = brandName;
        this.description = description;
        this.measurement = measurement;
        this.measurementQuantity = measurementQuantity;
        this.stock = stock;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getProductName() {
        return productName;
    }

    public String getBrandName() {
        return brandName;
    }

    public String getDescription() {
        return description;
    }

    public String getMeasurement() {
        return measurement;
    }

    public int getMeasurementQuantity() {
        return measurementQuantity;
    }

    public int getStock() {
        return stock;
    }

    public double getPrice() {
        return price;
    }
}
