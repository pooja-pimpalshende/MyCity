package com.mycity.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycity.springboot.model.GovernmentHostel;
import com.mycity.springboot.model.Hostel;
import com.mycity.springboot.repository.HostelRepository;
import com.mycity.springboot.service.GovernmentHostelService;
import com.mycity.springboot.service.HostelService;

@RestController
@RequestMapping("/hostel")
@CrossOrigin
public class HostelController {
	
	@Autowired
	private HostelService hostelService;
	
	@Autowired
	private GovernmentHostelService governmenthostelService;
	
	@PostMapping("/private")
	public Hostel add(@RequestBody Hostel hostel) {
		return hostelService.saveHostel(hostel);	
	}
	
	@GetMapping("/private")
	public List<Hostel> getHostel(){
		return hostelService.getAllHostel();
	}
	
	@PostMapping("/government")
	public GovernmentHostel add(@RequestBody GovernmentHostel hostel) {
		return governmenthostelService.saveGovernmentHostel(hostel);
	}
	
	@GetMapping("/government")
	public List<GovernmentHostel> getGovernmentHostel(){
		return governmenthostelService.getAllGovernmentHostel();
	}
}
