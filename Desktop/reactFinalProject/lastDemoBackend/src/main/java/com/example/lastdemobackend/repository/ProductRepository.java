package com.example.lastdemobackend.repository;

import com.example.lastdemobackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <Product, Long> {
    public Product findByPrice(long price);
    public List<Product> findByOwner(String owner);
}
