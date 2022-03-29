package com.mycity.springboot.service;

import java.util.List;

import com.mycity.springboot.model.GovernmentLibrary;

public interface GovernmentLibraryService {
	public GovernmentLibrary saveGovernmentLibrary(GovernmentLibrary governmentLibrary);
	public List<GovernmentLibrary> getAllGovernmentLibrary();
}
