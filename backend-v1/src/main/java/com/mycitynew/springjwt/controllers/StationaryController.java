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

import com.mycitynew.springjwt.models.Stationary;
import com.mycitynew.springjwt.security.services.StationaryService;



@CrossOrigin
@RestController
public class StationaryController {

	@Autowired
	private StationaryService stationaryService;

	@GetMapping("/stationarys")
	private List<Stationary> getStationarys() {
		return this.stationaryService.getStationarys();
	}

	@GetMapping("/stationarys/{stationary_id}")
	public Stationary getCollge(@PathVariable String stationary_id) {
		return this.stationaryService.getStationary(Long.parseLong(stationary_id));
	}

	@PostMapping("/stationarys")
	public Stationary addStationary(@RequestBody Stationary stationary) {
		return this.stationaryService.addStationary(stationary);
	}

	@PutMapping("/stationarys")
	public Stationary updateStationary(@RequestBody Stationary stationary) {
		return this.stationaryService.updateStationary(stationary);

	}

	@DeleteMapping("/stationarys/{stationary_id}")
	public ResponseEntity<HttpStatus> deleteStationary(@PathVariable String stationary_id) {
		try {
			this.stationaryService.deleteStationary(Long.parseLong(stationary_id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// ---------------------------------------------------------------------------------------------------------------------

	
}