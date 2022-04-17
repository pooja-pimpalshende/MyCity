package com.mycitynew.springjwt.security.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Stationary;
import com.mycitynew.springjwt.repository.StationaryRepository;

@Service
public class StationaryServiceImpl implements StationaryService {

	@Autowired
	private StationaryRepository stationaryDao;

//	List<Stationary> list;

	public StationaryServiceImpl() {
		
	}

	@Override
	public List<Stationary> getStationarys() {
		return stationaryDao.findAll();
	}

	@Override
	public Stationary getStationary(long stationary_id) {

//		Stationary c = null;
//		for (Stationary stationary : list) {
//			if (stationary.getId() == stationary_id) {
//				c = stationary;
//				break;
//			}
//		}
		return stationaryDao.getOne(stationary_id);
	}

	@Override
	public Stationary addStationary(Stationary stationary) {
//		list.add(stationary);

		stationaryDao.save(stationary);
		return stationary;
	}

	@Override
	public Stationary updateStationary(Stationary stationary) {
//		list.forEach(e -> {
//			if (e.getId() == stationary.getId()) {
//				e.setStationary_name(stationary.getStationary_name());
//				e.setPhone_no(stationary.getPhone_no());
//				e.setCity(stationary.getCity());
//				e.setDistrict(stationary.getDistrict());
//				e.setPincode(stationary.getPincode());
//				e.setState(stationary.getState());
//
//				e.setStreet(stationary.getStreet());
//
//			}
//		});

		stationaryDao.save(stationary);
		return stationary;
	}

	@Override
	public void deleteStationary(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		Stationary entity=stationaryDao.getOne(parseLong);
		stationaryDao.delete(entity);

	}

}