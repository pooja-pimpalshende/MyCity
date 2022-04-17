package com.mycitynew.springjwt.security.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.College;
import com.mycitynew.springjwt.repository.CollegeRepository;

@Service
public class CollegeServiceImpl implements CollegeService {

	@Autowired
	private CollegeRepository collegeRepository;

//	List<College> list;

	public CollegeServiceImpl() {

//		list = new ArrayList<>();
//		list.add(new College(101, "deogiri", 500, "zp", "aurangabad", "aurangabad", "maharashtra", 431150));
//		list.add(new College(102, "vjti", 5040, "sp", "mumbai", "mumbai", "maharashtra", 431120));

	}

	@Override
	public List<College> getColleges() {
		return collegeRepository.findAll();
	}

	@Override
	public College getCollege(long college_id) {

//		College c = null;
//		for (College college : list) {
//			if (college.getId() == college_id) {
//				c = college;
//				break;
//			}
//		}
		return collegeRepository.getOne(college_id);
	}

	@Override
	public College addCollege(College college) {
//		list.add(college);

		collegeRepository.save(college);
		return college;
	}

	@Override
	public College updateCollege(College college) {
//		list.forEach(e -> {
//			if (e.getId() == college.getId()) {
//				e.setCollege_name(college.getCollege_name());
//				e.setPhone_no(college.getPhone_no());
//				e.setCity(college.getCity());
//				e.setDistrict(college.getDistrict());
//				e.setPincode(college.getPincode());
//				e.setState(college.getState());
//
//				e.setStreet(college.getStreet());
//
//			}
//		});

		collegeRepository.save(college);
		return college;
	}

	@Override
	public void deleteCollege(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		College entity=collegeRepository.getOne(parseLong);
		collegeRepository.delete(entity);

	}

}