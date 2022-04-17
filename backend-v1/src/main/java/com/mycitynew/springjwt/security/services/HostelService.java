package com.mycitynew.springjwt.security.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Hostel;

@Service
public interface HostelService {

	public List<Hostel> getHostels();

	public Hostel getHostel(long hostel_id);

	public Hostel addHostel(Hostel hostel);

	public Hostel updateHostel(Hostel hostel);

	public void deleteHostel(long parseLong);

}