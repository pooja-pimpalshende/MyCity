package com.mycity.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycity.springboot.model.GovernmentLibrary;

public interface GovernmentLibraryRepository extends JpaRepository<GovernmentLibrary, Integer> {

}
