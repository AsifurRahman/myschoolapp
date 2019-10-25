package com.asif.schoolapp.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class indexController {

    @GetMapping("/")
    public String index(){
        return "index";
    }


    @GetMapping("/student")
    public String student(){
        return "student";
    }
}
