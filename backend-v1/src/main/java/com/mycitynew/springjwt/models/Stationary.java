package com.mycitynew.springjwt.models;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Stationary {

	@Id
	@GeneratedValue
	private long id;
	private String stationary_name;
	private long phone_no;
	private String email;
	private String street;
	private String city;
	private String district;
	private String state;
	private long pincode;

	@Lob
	private byte[] image;

	public Stationary() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Stationary(long id, String stationary_name, long phone_no, String email, String street, String city,
			String district, String state, long pincode, byte[] image) {
		super();
		this.id = id;
		this.stationary_name = stationary_name;
		this.phone_no = phone_no;
		this.email = email;
		this.street = street;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pincode = pincode;
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStationary_name() {
		return stationary_name;
	}

	public void setStationary_name(String stationary_name) {
		this.stationary_name = stationary_name;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Stationary [id=" + id + ", stationary_name=" + stationary_name + ", phone_no=" + phone_no + ", email=" + email
				+ ", street=" + street + ", city=" + city + ", district=" + district + ", state=" + state + ", pincode="
				+ pincode + ", image=" + Arrays.toString(image) + "]";
	}

	
	
}