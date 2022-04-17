package com.mycity.springboot.service;

import java.util.List;

import com.mycity.springboot.model.GovernmentHostel;

public interface GovernmentHostelService {
		
		public GovernmentHostel saveGovernmentHostel(GovernmentHostel governmenthostel);
		public List<GovernmentHostel> getAllGovernmentHostel();
}

