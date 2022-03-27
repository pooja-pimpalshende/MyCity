package com.mycity.springboot.service;

import java.util.List;
import com.mycity.springboot.model.Hostel;

public interface HostelService {
	
	public Hostel saveHostel(Hostel hostel);
	public List<Hostel> getAllHostel();
}
