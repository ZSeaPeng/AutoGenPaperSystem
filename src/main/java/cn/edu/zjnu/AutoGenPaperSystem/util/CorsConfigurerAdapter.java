package cn.edu.zjnu.AutoGenPaperSystem.util;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by zseapeng on 2016/11/12.
 */
public class CorsConfigurerAdapter extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/api/*").allowedOrigins("*");
    }
}