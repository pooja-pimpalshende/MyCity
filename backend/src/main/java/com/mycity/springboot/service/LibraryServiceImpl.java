package com.mycity.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycity.springboot.model.Library;
import com.mycity.springboot.repository.LibraryRepository;

@Service
public class LibraryServiceImpl implements LibraryService {

	@Autowired
	private LibraryRepository libraryRepository;
	
	@Override
	public Library saveLibrary(Library library) {
		return libraryRepository.save(library);
	}

	@Override
	public List<Library> getAllLibrary() {
		return libraryRepository.findAll();
	}

}
