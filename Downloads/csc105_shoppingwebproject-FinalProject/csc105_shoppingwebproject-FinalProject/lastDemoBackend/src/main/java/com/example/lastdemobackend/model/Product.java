package com.example.lastdemobackend.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long product_id;

    @Column (name = "Title")
    private String title;
    @Column (name = "Owner")
    private String owner;
    @Column (name = "Price")
    private long price;
    @Column (name = "Date")
    private String date;
    @Column (name = "Discount")
    private long discount;
    @Column (name = "Stock")
    private long stock;

    public Product(){

    }

    public Product(String title, String owner, long price, String date, long discount, long stock) {
        this.title = title;
        this.owner = owner;
        this.price = price;
        this.date = date;
        this.discount = discount;
        this.stock = stock;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String added_at) {
        this.date = added_at;
    }

    public long getDiscount() {
        return discount;
    }

    public void setDiscount(long discount) {
        this.discount = discount;
    }

    public long getStock() {
        return stock;
    }

    public void setStock(long stock) {
        this.stock = stock;
    }
}
