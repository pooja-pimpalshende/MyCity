package com.mycitynew.springjwt.security.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Library;

@Service
public interface LibraryService {

	public List<Library> getLibrarys();

	public Library getLibrary(long library_id);

	public Library addLibrary(Library library);

	public Library updateLibrary(Library library);

	public void deleteLibrary(long parseLong);

}