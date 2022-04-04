package com.mycity.springboot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import com.mycity.springboot.model.GovernmentHostel;
import com.mycity.springboot.model.Hostel;
import com.mycity.springboot.repository.HostelRepository;
import com.mycity.springboot.service.FileUploadUtil;
import com.mycity.springboot.service.GovernmentHostelService;
import com.mycity.springboot.service.HostelService;

@RestController
@RequestMapping("/hostel")
@CrossOrigin
public class HostelController {
	
	@Autowired
	private HostelService hostelService;
	
	@Autowired
	private GovernmentHostelService governmenthostelService;
	
	@PostMapping("/private")
	public Hostel add(Hostel hostel, @RequestParam("HostelImage") MultipartFile multipartFile) throws IOException{

		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        hostel.setPhotos(fileName);
         
        Hostel savedHostel = hostelService.saveHostel(hostel);
 
        String uploadDir = "./hostel-photos/" + savedHostel.getId();
 
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        
        return savedHostel;
        	
	}
	
	@GetMapping("/private")
	public List<Hostel> getHostel(){
		return hostelService.getAllHostel();
	}
	
	@PostMapping("/government")
	public GovernmentHostel add(GovernmentHostel hostel, @RequestParam("HostelImage") MultipartFile multipartFile) throws IOException{

		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        hostel.setPhotos(fileName);
         
        GovernmentHostel savedGovernmentHostel = governmenthostelService.saveGovernmentHostel(hostel);
 
        String uploadDir = "./hostel-photos/" + savedGovernmentHostel.getId();
 
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        
        return savedGovernmentHostel;
        	
	}
	
	@GetMapping("/government")
	public List<GovernmentHostel> getGovernmentHostel(){
		return governmenthostelService.getAllGovernmentHostel();
	}
}
