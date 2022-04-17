package com.mycitynew.springjwt.security.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Library;
import com.mycitynew.springjwt.repository.LibraryRepository;

@Service
public class LibraryServiceImpl implements LibraryService {

	@Autowired
	private LibraryRepository libraryDao;

//	List<Library> list;

	public LibraryServiceImpl() {

//		list = new ArrayList<>();
//		list.add(new Library(101, "deogiri", 500, "zp", "aurangabad", "aurangabad", "maharashtra", 431150));
//		list.add(new Library(102, "vjti", 5040, "sp", "mumbai", "mumbai", "maharashtra", 431120));

	}

	@Override
	public List<Library> getLibrarys() {
		return libraryDao.findAll();
	}

	@Override
	public Library getLibrary(long library_id) {

//		Library c = null;
//		for (Library library : list) {
//			if (library.getId() == library_id) {
//				c = library;
//				break;
//			}
//		}
		return libraryDao.getOne(library_id);
	}

	@Override
	public Library addLibrary(Library library) {
//		list.add(library);

		libraryDao.save(library);
		return library;
	}

	@Override
	public Library updateLibrary(Library library) {
//		list.forEach(e -> {
//			if (e.getId() == library.getId()) {
//				e.setLibrary_name(library.getLibrary_name());
//				e.setPhone_no(library.getPhone_no());
//				e.setCity(library.getCity());
//				e.setDistrict(library.getDistrict());
//				e.setPincode(library.getPincode());
//				e.setState(library.getState());
//
//				e.setStreet(library.getStreet());
//
//			}
//		});

		libraryDao.save(library);
		return library;
	}

	@Override
	public void deleteLibrary(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		Library entity=libraryDao.getOne(parseLong);
		libraryDao.delete(entity);

	}

}