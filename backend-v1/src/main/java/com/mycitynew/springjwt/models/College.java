package com.mycitynew.springjwt.models;

import java.util.Arrays;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "college") 
//uniqueConstraints = { 
//  @UniqueConstraint(columnNames = "college_name"),
//  @UniqueConstraint(columnNames = "email") 
//})
public class College {

	@Id
	@GeneratedValue
	private long id;
	
//	@Column(unique=true, length = 45)
//	@NotEmpty(message ="Name can't be blank")
//	@Length(min = 10, max=100, message = "Name to short!!!!")
	private String college_name;
	
//	@Column(length =20)
//	@NotEmpty(message = "Mobile no must be supplied")
//	@Length(min =10, max=10, message = "Invalid mobile length!!!!")
	private long phone_no;
	
//	@NotBlank
//	@Size(max = 50)
//	@Email
	private String email;
	
//	@Column(length =20)
//	@NotEmpty(message = "Street no must be supplied")
//	@Length(min =3, max=40, message = "Invalid Street length!!!!")
	private String street;
	
//	@Column(length =20)
//	@NotEmpty(message = "Street no must be supplied")
//	@Length(min =3, max=20, message = "Invalid Street length!!!!")
	private String city;
	
//	@Column(length =20)
//	@NotEmpty(message = "Street no must be supplied")
//	@Length(min =3, max=20, message = "Invalid Street length!!!!")
	private String district;
	
//	@Column(length =20)
//	@NotEmpty(message = "Street no must be supplied")
//	@Length(min =5, max=20, message = "Invalid Street length!!!!")
	private String state;
	
//	@Column(length =10)
//	@NotEmpty(message = "Pincode no must be supplied")
//	@Length(min =6, max=6, message = "Invalid pincode length!!!!")
	private long pincode;

	@Lob
	private String image;

	public College() {
		super();
		// TODO Auto-generated constructor stub
	}

	public College(long id, String college_name, long phone_no, String email, String street, String city,
			String district, String state, long pincode, String image) {
		super();
		this.id = id;
		this.college_name = college_name;
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

	public String getCollege_name() {
		return college_name;
	}

	public void setCollege_name(String college_name) {
		this.college_name = college_name;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "College [id=" + id + ", college_name=" + college_name + ", phone_no=" + phone_no + ", email=" + email
				+ ", street=" + street + ", city=" + city + ", district=" + district + ", state=" + state + ", pincode="
				+ pincode + ", image=" + image + "]";
	}

	@Transient
	public String getPhotosImageForm()
	{
		if (image == null ){
			return null;
		}
		else {
			return "/college-files";
		}
	}
	
	
}