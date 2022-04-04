package com.mycity.springboot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mycity.springboot.model.GovernmentLibrary;
import com.mycity.springboot.model.Hostel;
import com.mycity.springboot.model.Library;
import com.mycity.springboot.service.FileUploadUtil;
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
		public Library add(Library library, @RequestParam("LibraryImage") MultipartFile multipartFile) throws IOException{

			String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
			library.setPhotos(fileName);
	         
	        Library savedLibrary = libraryService.saveLibrary(library);	
	 
	        String uploadDir = "./privatelibrary-photos/" + savedLibrary.getId();
	 
	        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
	        
	        return savedLibrary;
	        	
		}
		
		@GetMapping("/private")
		public List<Library> getLibrary(){
			return libraryService.getAllLibrary();
		}
		
		@PostMapping("/government")
		public GovernmentLibrary add(GovernmentLibrary library, @RequestParam("LibraryImage") MultipartFile multipartFile) throws IOException{

			String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
			library.setPhotos(fileName);
	         
			GovernmentLibrary savedGovernmentLibrary = governmentlibraryService.saveGovernmentLibrary(library);
	 
	        String uploadDir = "./governmentlibrary-photos/" + savedGovernmentLibrary.getId();
	 
	        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
	        
	        return savedGovernmentLibrary;
	        	
		}
		
		@GetMapping("/government")
		public List<GovernmentLibrary> getGovernmentLibrary(){
			return governmentlibraryService.getAllGovernmentLibrary();
		}
	}


