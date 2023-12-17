package com.grupo1.Merkatodo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("/admin")
    public String index() {
        return "Admin/index";
    }
}
