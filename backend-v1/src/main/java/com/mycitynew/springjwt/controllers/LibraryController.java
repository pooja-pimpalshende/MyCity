package com.mycitynew.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycitynew.springjwt.models.Library;
import com.mycitynew.springjwt.security.services.LibraryService;


@CrossOrigin
@RestController
public class LibraryController {

	@Autowired
	private LibraryService libraryService;

	@GetMapping("/librarys")
	private List<Library> getLibrarys() {
		return this.libraryService.getLibrarys();
	}

	@GetMapping("/librarys/{library_id}")
	public Library getCollge(@PathVariable String library_id) {
		return this.libraryService.getLibrary(Long.parseLong(library_id));
	}

	@PostMapping("/librarys")
	public Library addLibrary(@RequestBody Library library) {
		return this.libraryService.addLibrary(library);
	}

	@PutMapping("/librarys")
	public Library updateLibrary(@RequestBody Library library) {
		return this.libraryService.updateLibrary(library);

	}

	@DeleteMapping("/librarys/{library_id}")
	public ResponseEntity<HttpStatus> deleteLibrary(@PathVariable String library_id) {
		try {
			this.libraryService.deleteLibrary(Long.parseLong(library_id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// ---------------------------------------------------------------------------------------------------------------------

	
}