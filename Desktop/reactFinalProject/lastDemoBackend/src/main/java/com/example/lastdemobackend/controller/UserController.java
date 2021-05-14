package com.example.lastdemobackend.controller;


import com.example.lastdemobackend.exception.ResourceNotFoundException;
import com.example.lastdemobackend.model.User;
import com.example.lastdemobackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //get all users

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    //get user by email
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with this id: "+ id));
        return ResponseEntity.ok(user);
    }

    @GetMapping("/users/email")
    public ResponseEntity<User> getUserByEmail(@RequestParam String email){
        return new ResponseEntity<User>(userRepository.findByEmail(email), HttpStatus.OK);
    }

    @GetMapping("/users/emailandpassword")
    public ResponseEntity<User> getUserByEmail(@RequestParam String email, @RequestParam String password){
        return new ResponseEntity<User>(userRepository.findByEmailAndPassword(email, password), HttpStatus.OK);
        /*User user = userRepository.findByEmailAndPassword(email, password);
        user.setName("Oppa");
        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);*/
    }

    //update employee rest api
    @PutMapping ("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not exist with this id: "+ id));

        user.setName(userDetails.getName());
        user.setAddress(userDetails.getAddress());
        user.setEmail(userDetails.getEmail());
        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
}
