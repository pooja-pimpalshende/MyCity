package com.mycity.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycity.springboot.model.Library;


public interface LibraryRepository extends JpaRepository<Library, Integer> {

}
