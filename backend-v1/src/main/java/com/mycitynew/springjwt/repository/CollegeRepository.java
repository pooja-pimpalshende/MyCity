package com.mycitynew.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycitynew.springjwt.models.College;

public interface CollegeRepository extends JpaRepository<College, Long>{

}