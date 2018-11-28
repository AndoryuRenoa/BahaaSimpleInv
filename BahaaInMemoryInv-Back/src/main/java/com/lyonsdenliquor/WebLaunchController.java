package com.lyonsdenliquor;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebLaunchController {
	
	@RequestMapping("/")
	public String home(Model model) {
              return "forward:/index.html";
       }
	
	@GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
  
}
