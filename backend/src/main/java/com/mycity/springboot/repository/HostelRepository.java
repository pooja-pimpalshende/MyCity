package com.mycity.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mycity.springboot.model.Hostel;

@Repository
public interface HostelRepository extends JpaRepository<Hostel, Integer> {

}
