package com.mycity.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.mycity.springboot.repository.HostelRepository;
import com.mycity.springboot.repository.LibraryRepository;
import com.mycity.springboot.repository.GovernmentHostelRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

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
	public void run(String... args) throws Exception {
//		this.hostelRepository.save(new Hostel(1,"Hostel1","Pune"));
		
	}

}
