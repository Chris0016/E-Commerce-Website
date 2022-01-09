package com.webapps.ecommerce.controller;

import java.util.List;

import com.webapps.ecommerce.exception.ResourceNotFoundException;
import com.webapps.ecommerce.model.Product;
import com.webapps.ecommerce.repository.ProductRepository;

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
public class ProductContoller {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/products/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> products = productRepository.search(category);

        if (products.isEmpty())
            throw new ResourceNotFoundException("Category " + category + " does not exist.");

        return ResponseEntity.ok(products);
    }

    @GetMapping("/product/{prodId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long prodId) {
        Product product = productRepository.findById(prodId)
                .orElseThrow(() -> new ResourceNotFoundException("The product is not found for id: " + prodId));

        return ResponseEntity.ok(product);
    }

}