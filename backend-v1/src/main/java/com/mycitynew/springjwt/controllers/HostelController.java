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

import com.mycitynew.springjwt.models.Hostel;
import com.mycitynew.springjwt.security.services.HostelService;


//import com.mycity.springboot.model.GovernmentHostel;


@RestController
@CrossOrigin
public class HostelController {
	
	@Autowired
	private HostelService hostelService;

	@GetMapping("/hostels")
	private List<Hostel> getHostels() {
		return this.hostelService.getHostels();
	}

	@GetMapping("/hostels/{hostel_id}")
	public Hostel getCollge(@PathVariable String hostel_id) {
		return this.hostelService.getHostel(Long.parseLong(hostel_id));
	}

	@PostMapping("/hostels")
	public Hostel addHostel(@RequestBody Hostel hostel) {
		return this.hostelService.addHostel(hostel);
	}

	@PutMapping("/hostels")
	public Hostel updateHostel(@RequestBody Hostel hostel) {
		return this.hostelService.updateHostel(hostel);

	}

	@DeleteMapping("/hostels/{hostel_id}")
	public ResponseEntity<HttpStatus> deleteHostel(@PathVariable String hostel_id) {
		try {
			this.hostelService.deleteHostel(Long.parseLong(hostel_id));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}













//package com.mycity.springboot.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.mycity.springboot.model.Hostel;
//import com.mycity.springboot.service.HostelService;
//
//@CrossOrigin
//@RestController
//public class HostelController {
//
//	@Autowired
//	private HostelService hostelService;
//
//	@GetMapping("/hostels")
//	private List<Hostel> getHostels() {
//		return this.hostelService.getHostels();
//	}
//
//	@GetMapping("/hostels/{hostel_id}")
//	public Hostel getCollge(@PathVariable String hostel_id) {
//		return this.hostelService.getHostel(Long.parseLong(hostel_id));
//	}
//
//	@PostMapping("/hostels")
//	public Hostel addHostel(@RequestBody Hostel hostel) {
//		return this.hostelService.addHostel(hostel);
//	}
//
//	@PutMapping("/hostels")
//	public Hostel updateHostel(@RequestBody Hostel hostel) {
//		return this.hostelService.updateHostel(hostel);
//
//	}
//
//	@DeleteMapping("/hostels/{hostel_id}")
//	public ResponseEntity<HttpStatus> deleteHostel(@PathVariable String hostel_id) {
//		try {
//			this.hostelService.deleteHostel(Long.parseLong(hostel_id));
//			return new ResponseEntity<>(HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//
//	// ---------------------------------------------------------------------------------------------------------------------
//
//	
//}