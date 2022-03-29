package com.mycity.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycity.springboot.model.GovernmentLibrary;
import com.mycity.springboot.model.Library;
import com.mycity.springboot.service.GovernmentLibraryService;
import com.mycity.springboot.service.LibraryService;

@RestController
@RequestMapping("/library")
@CrossOrigin
public class LibraryController {
		
		@Autowired
		private LibraryService libraryService;
		
		@Autowired
		private GovernmentLibraryService governmentlibraryService;
		
		@PostMapping("/private")
		public Library add(@RequestBody Library library) {
			return libraryService.saveLibrary(library);	
		}
		
		@GetMapping("/private")
		public List<Library> getLibrary(){
			return libraryService.getAllLibrary();
		}
		
		@PostMapping("/government")
		public GovernmentLibrary add(@RequestBody GovernmentLibrary library) {
			return governmentlibraryService.saveGovernmentLibrary(library);
		}
		
		@GetMapping("/government")
		public List<GovernmentLibrary> getGovernmentLibrary(){
			return governmentlibraryService.getAllGovernmentLibrary();
		}
	}


