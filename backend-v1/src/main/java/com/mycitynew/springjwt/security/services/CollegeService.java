package com.mycitynew.springjwt.security.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.College;

@Service
public interface CollegeService {

	public List<College> getColleges();

	public College getCollege(long college_id);

	public College addCollege(College college);

	public College updateCollege(College college);

	public void deleteCollege(long parseLong);

}