package com.example.lastdemobackend.controller;

import com.example.lastdemobackend.exception.ResourceNotFoundException;
import com.example.lastdemobackend.model.Product;
import com.example.lastdemobackend.model.User;
import com.example.lastdemobackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    

    //get all products

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with this id: "+ id));
        return ResponseEntity.ok(product);
    }
    @GetMapping("/products/price/{price}")
    public ResponseEntity<Product> getProductByPrice(@PathVariable long price){
        return new ResponseEntity<Product>(productRepository.findByPrice(price), HttpStatus.OK);
    }
    @GetMapping("/products/owner")
    public List<Product> getProductByOwner(@RequestParam String owner){
        return productRepository.findByOwner(owner);
    }

    //delete
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with this id: "+ id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
/*
    @GetMapping("/products/email")
    public ResponseEntity<Product> getProductByEmail(@RequestParam String email){
        return new ResponseEntity<Product>(productRepository.findByEmail(email), HttpStatus.OK);
    }


    @PutMapping ("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails){
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with this id: "+ id));

        product.setName_product(productDetails.getName_product());
        product.setPrice(productDetails.getPrice());
        product.setStock(productDetails.getStock());
        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }*/
}
