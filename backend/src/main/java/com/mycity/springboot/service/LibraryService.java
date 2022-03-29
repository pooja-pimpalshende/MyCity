package com.mycity.springboot.service;

import java.util.List;

import com.mycity.springboot.model.Library;


public interface LibraryService {
	public Library saveLibrary(Library library);
	public List<Library> getAllLibrary();
}
