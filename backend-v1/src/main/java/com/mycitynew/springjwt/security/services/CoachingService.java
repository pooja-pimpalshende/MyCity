package com.mycitynew.springjwt.security.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycitynew.springjwt.models.Coaching;

@Service
public interface CoachingService {

	public List<Coaching> getCoachings();

	public Coaching getCoaching(long coaching_id);

	public Coaching addCoaching(Coaching coaching);

	public Coaching updateCoaching(Coaching coaching);

	public void deleteCoaching(long parseLong);

}