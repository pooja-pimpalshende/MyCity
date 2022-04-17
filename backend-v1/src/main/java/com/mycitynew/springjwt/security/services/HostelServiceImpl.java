package com.mycitynew.springjwt.security.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Hostel;
import com.mycitynew.springjwt.repository.HostelRepository;

@Service
public class HostelServiceImpl implements HostelService {

	@Autowired
	private HostelRepository hostelRepository;

//	List<Hostel> list;

	public HostelServiceImpl() {

//		list = new ArrayList<>();
//		list.add(new Hostel(101, "deogiri", 500, "zp", "aurangabad", "aurangabad", "maharashtra", 431150));
//		list.add(new Hostel(102, "vjti", 5040, "sp", "mumbai", "mumbai", "maharashtra", 431120));

	}

	@Override
	public List<Hostel> getHostels() {
		return hostelRepository.findAll();
	}

	@Override
	public Hostel getHostel(long hostel_id) {

//		Hostel c = null;
//		for (Hostel hostel : list) {
//			if (hostel.getId() == hostel_id) {
//				c = hostel;
//				break;
//			}
//		}
		return hostelRepository.getOne(hostel_id);
	}

	@Override
	public Hostel addHostel(Hostel hostel) {
//		list.add(hostel);

		hostelRepository.save(hostel);
		return hostel;
	}

	@Override
	public Hostel updateHostel(Hostel hostel) {
//		list.forEach(e -> {
//			if (e.getId() == hostel.getId()) {
//				e.setHostel_name(hostel.getHostel_name());
//				e.setPhone_no(hostel.getPhone_no());
//				e.setCity(hostel.getCity());
//				e.setDistrict(hostel.getDistrict());
//				e.setPincode(hostel.getPincode());
//				e.setState(hostel.getState());
//
//				e.setStreet(hostel.getStreet());
//
//			}
//		});

		hostelRepository.save(hostel);
		return hostel;
	}

	@Override
	public void deleteHostel(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		Hostel entity=hostelRepository.getOne(parseLong);
		hostelRepository.delete(entity);

	}

}