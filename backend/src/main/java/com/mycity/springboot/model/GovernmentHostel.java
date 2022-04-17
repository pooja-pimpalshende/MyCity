package com.mycity.springboot.model;

	import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="governmenthostel")
public class GovernmentHostel {
	
		
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Integer id;
		
		@Column(name="name")
		private String name;
		
		@Column(name="address")
		private String address;
	
		@Column(name="email")
		private String email;
		
		@Column(name="phone")
		private long phone;
		
		@Column(nullable = true , length = 64)
		private String photos;
		
		public GovernmentHostel() {
			
		}

		public Integer getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		
		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public long getPhone() {
			return phone;
		}
		public void setPhone(long phone) {
			this.phone = phone;
		}

		public String getPhotos() {
			return photos;
		}

		public void setPhotos(String photos) {
			this.photos = photos;
		}

		@Transient
		public String getPhotosImagePath() {
			
			if (photos == null) return null;
	        
	        return "/hostel-photos/" + id + "/" + photos;
		}
	
}