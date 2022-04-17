package com.mycitynew.springjwt.models;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "library", 
uniqueConstraints = { 
  @UniqueConstraint(columnNames = "library_name"),
  @UniqueConstraint(columnNames = "email") 
})
public class Library {

	@Id
	@GeneratedValue
	private long id;
	
	@Column(unique=true, length = 45)
	@NotEmpty(message ="Name required")
	@Length(min = 10, max=100, message = "Name to short!!!!")
	private String library_name;
	
	@Column(length =20)
	@NotNull(message = "Mobile required")
//	@Length(min =10, max=10, message = "Invalid mobile length!!!!")
	private long phone_no;
	
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;
	
	@Column(length =20)
	@NotEmpty(message = "Street no required")
	@Length(min =3, max=40, message = "Invalid Street length!!!!")
	private String street;
	
	@Column(length =20)
	@NotEmpty(message = "City name required")
	@Length(min =3, max=20, message = "Invalid Street length!!!!")
	private String city;
	
	@Column(length =20)
	@NotEmpty(message = "District required")
	@Length(min =3, max=20, message = "Invalid Street length!!!!")
	private String district;
	
	@Column(length =20)
	@NotEmpty(message = "State required")
	@Length(min =5, max=20, message = "Invalid Street length!!!!")
	private String state;
	
	@Column(length =10)
	@NotNull(message = "Pincode required")
	private long pincode;

	@Lob
	private byte[] image;

	public Library() {
		super();
		
	}

	public Library(long id, String library_name, long phone_no, String email, String street, String city,
			String district, String state, long pincode, byte[] image) {
		super();
		this.id = id;
		this.library_name = library_name;
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

	public String getLibrary_name() {
		return library_name;
	}

	public void setLibrary_name(String library_name) {
		this.library_name = library_name;
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
		return "Library [id=" + id + ", library_name=" + library_name + ", phone_no=" + phone_no + ", email=" + email
				+ ", street=" + street + ", city=" + city + ", district=" + district + ", state=" + state + ", pincode="
				+ pincode + ", image=" + Arrays.toString(image) + "]";
	}

	
	
}