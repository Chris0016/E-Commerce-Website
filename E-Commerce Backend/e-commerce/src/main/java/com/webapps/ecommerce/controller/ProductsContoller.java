package com.webapps.ecommerce.controller;

import java.util.List;

import com.webapps.ecommerce.exception.ResourceNotFoundException;
import com.webapps.ecommerce.model.Products;
import com.webapps.ecommerce.repository.ProductsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductsContoller {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @GetMapping("/products/{category}")
    public ResponseEntity<List<Products>> getProductsByCategory(@PathVariable String category) {
        List<Products> products = productsRepository.search(category);

        if (products.isEmpty())
            throw new ResourceNotFoundException("Category " + category + " does not exist.");

        return ResponseEntity.ok(products);
    }
}