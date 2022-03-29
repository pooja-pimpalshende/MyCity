package com.mycity.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycity.springboot.model.GovernmentHostel;
import com.mycity.springboot.repository.GovernmentHostelRepository;

@Service
public class GovernmentHostelServiceImpl implements GovernmentHostelService{
		
	@Autowired
	private GovernmentHostelRepository governmenthostelRepository;

	@Override
	public GovernmentHostel saveGovernmentHostel(GovernmentHostel governmenthostel) {
		return governmenthostelRepository.save(governmenthostel);
	}

	@Override
	public List<GovernmentHostel> getAllGovernmentHostel() {
		return governmenthostelRepository.findAll();
	}
	
	
	
}