package com.mycity.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mycity.springboot.model.GovernmentHostel;

@Repository
public interface GovernmentHostelRepository extends JpaRepository<GovernmentHostel, Integer> {
	
}
