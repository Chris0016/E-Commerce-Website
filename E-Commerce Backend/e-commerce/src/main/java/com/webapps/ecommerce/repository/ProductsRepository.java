package com.webapps.ecommerce.repository;

import java.util.List;

import com.webapps.ecommerce.model.Products;

import org.hibernate.query.NativeQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    @Query(value = "SELECT * FROM PRODUCTS p WHERE p.category LIKE %?1%", nativeQuery = true)
    public List<Products> search(String keyword);
}
