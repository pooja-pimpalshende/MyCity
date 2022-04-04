package com.mycity.springboot;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.mycity.springboot.repository.HostelRepository;
import com.mycity.springboot.repository.LibraryRepository;
import com.mycity.springboot.repository.GovernmentHostelRepository;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@SpringBootApplication
public class BackendApplication implements WebMvcConfigurer {

	//CommandLineRunner provides run method
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private HostelRepository hostelRepository;
	
	@Autowired
	private GovernmentHostelRepository governmenthostelRepository;
	
	@Autowired
	private LibraryRepository libraryRepository;
	
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        exposeDirectory("hostel-photos", registry);
        exposeDirectory("privatelibrary-photos", registry);
        exposeDirectory("governmentlibrary-photos", registry);
    }
	
	
	private void exposeDirectory(String dirName, ResourceHandlerRegistry registry) {
        Path uploadDir = Paths.get(dirName);
        String uploadPath = uploadDir.toFile().getAbsolutePath();
         
        if (dirName.startsWith("../")) dirName = dirName.replace("../", "");
         
        registry.addResourceHandler("/" + dirName + "/**").addResourceLocations("file:/"+ uploadPath + "/");
    }

}
