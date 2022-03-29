package com.mycity.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycity.springboot.model.GovernmentLibrary;
import com.mycity.springboot.repository.GovernmentLibraryRepository;

@Service
public class GovernmentLibraryServiceImpl implements GovernmentLibraryService {

	@Autowired
	private GovernmentLibraryRepository governmentLibraryRepository;
	
	@Override
	public GovernmentLibrary saveGovernmentLibrary(GovernmentLibrary governmentLibrary) {
		return governmentLibraryRepository.save(governmentLibrary);
	}

	@Override
	public List<GovernmentLibrary> getAllGovernmentLibrary() {
		return governmentLibraryRepository.findAll();
	}

}