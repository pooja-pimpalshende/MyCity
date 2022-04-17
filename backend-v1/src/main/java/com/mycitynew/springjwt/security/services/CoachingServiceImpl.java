package com.mycitynew.springjwt.security.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Coaching;
import com.mycitynew.springjwt.repository.CoachingRepository;

@Service
public class CoachingServiceImpl implements CoachingService {

	@Autowired
	private CoachingRepository coachingRepository;

//	List<Coaching> list;

	public CoachingServiceImpl() {

//		list = new ArrayList<>();
//		list.add(new Coaching(101, "deogiri", 500, "zp", "aurangabad", "aurangabad", "maharashtra", 431150));
//		list.add(new Coaching(102, "vjti", 5040, "sp", "mumbai", "mumbai", "maharashtra", 431120));

	}

	@Override
	public List<Coaching> getCoachings() {
		return coachingRepository.findAll();
	}

	@Override
	public Coaching getCoaching(long coaching_id) {

//		Coaching c = null;
//		for (Coaching coaching : list) {
//			if (coaching.getId() == coaching_id) {
//				c = coaching;
//				break;
//			}
//		}
		return coachingRepository.getOne(coaching_id);
	}

	@Override
	public Coaching addCoaching(Coaching coaching) {
//		list.add(coaching);

		coachingRepository.save(coaching);
		return coaching;
	}

	@Override
	public Coaching updateCoaching(Coaching coaching) {
//		list.forEach(e -> {
//			if (e.getId() == coaching.getId()) {
//				e.setCoaching_name(coaching.getCoaching_name());
//				e.setPhone_no(coaching.getPhone_no());
//				e.setCity(coaching.getCity());
//				e.setDistrict(coaching.getDistrict());
//				e.setPincode(coaching.getPincode());
//				e.setState(coaching.getState());
//
//				e.setStreet(coaching.getStreet());
//
//			}
//		});

		coachingRepository.save(coaching);
		return coaching;
	}

	@Override
	public void deleteCoaching(long parseLong) {
//		list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		Coaching entity=coachingRepository.getOne(parseLong);
		coachingRepository.delete(entity);

	}

}