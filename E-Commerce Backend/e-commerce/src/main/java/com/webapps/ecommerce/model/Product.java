package com.webapps.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.SecondaryTable;
import javax.persistence.Table;

@Entity
@Table(name = "products")
// @SecondaryTable(name = "categories")
// @SecondaryTable(name = "vendors")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prod_name")
    private String prodName;

    @Column(name = "category")
    private String category;

    @Column(name = "price")
    private Long price;

    @Column(name = "description")
    private String description;

    // Create Secondary table with list of vendors and have this column be in link.
    // and also change to vendor_ID
    @Column(name = "vendor")
    private String vendorName;

    public Product(Long id, String prodName, String category, Long price, String description, String vendorName) {
        this.id = id;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.description = description;
        this.vendorName = vendorName;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

}
