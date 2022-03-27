package com.mycity.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycity.springboot.model.Hostel;
import com.mycity.springboot.repository.HostelRepository;

@Service
public class HostelServiceImpl implements HostelService{
	
	@Autowired
	private HostelRepository hostelRepository;
	
	@Override
	public Hostel saveHostel(Hostel hostel) {
		return hostelRepository.save(hostel);
	}

	@Override
	public List<Hostel> getAllHostel() {
		return hostelRepository.findAll();
	}

}
