package com.mycitynew.springjwt.security.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Stationary;

@Service
public interface StationaryService {

	public List<Stationary> getStationarys();

	public Stationary getStationary(long stationary_id);

	public Stationary addStationary(Stationary stationary);

	public Stationary updateStationary(Stationary stationary);

	public void deleteStationary(long parseLong);

}