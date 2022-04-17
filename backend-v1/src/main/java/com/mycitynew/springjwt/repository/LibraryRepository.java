package com.mycitynew.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycitynew.springjwt.models.Library;

public interface LibraryRepository extends JpaRepository<Library, Long>{

}