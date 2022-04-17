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

import com.mycitynew.springjwt.models.College;
import com.mycitynew.springjwt.security.services.CollegeService;


@CrossOrigin
@RestController
public class CollegeController {

	@Autowired
	private CollegeService collegeService;

	@GetMapping("/colleges")
	private List<College> getColleges() {
		return this.collegeService.getColleges();
	}

	@GetMapping("/colleges/{college_id}")
	public College getCollge(@PathVariable String college_id) {
		return this.collegeService.getCollege(Long.parseLong(college_id));
	}

	@PostMapping("/colleges")
	public College addCollege(@RequestBody College college) {
		return this.collegeService.addCollege(college);
	}

	@PutMapping("/colleges")
	public College updateCollege(@RequestBody College college) {
		return this.collegeService.updateCollege(college);
	}

	@DeleteMapping("/colleges/{college_id}")
	public ResponseEntity<HttpStatus> deleteCollege(@PathVariable String college_id) {
		try {
			this.collegeService.deleteCollege(Long.parseLong(college_id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// ---------------------------------------------------------------------------------------------------------------------
	
}