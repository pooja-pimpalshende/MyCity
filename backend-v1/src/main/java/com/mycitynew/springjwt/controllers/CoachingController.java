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

import com.mycitynew.springjwt.models.Coaching;
import com.mycitynew.springjwt.security.services.CoachingService;


@CrossOrigin
@RestController
public class CoachingController {

	@Autowired
	private CoachingService coachingService;

	@GetMapping("/coachings")
	private List<Coaching> getCoachings() {
		return this.coachingService.getCoachings();
	}

	@GetMapping("/coachings/{coaching_id}")
	public Coaching getCollge(@PathVariable String coaching_id) {
		return this.coachingService.getCoaching(Long.parseLong(coaching_id));
	}

	@PostMapping("/coachings")
	public Coaching addCoaching(@RequestBody Coaching coaching) {
		return this.coachingService.addCoaching(coaching);
	}

	@PutMapping("/coachings")
	public Coaching updateCoaching(@RequestBody Coaching coaching) {
		return this.coachingService.updateCoaching(coaching);
	}

	@DeleteMapping("/coachings/{coaching_id}")
	public ResponseEntity<HttpStatus> deleteCoaching(@PathVariable String coaching_id) {
		try {
			this.coachingService.deleteCoaching(Long.parseLong(coaching_id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// ---------------------------------------------------------------------------------------------------------------------
	
}