package com.lyonsdenliquor;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;



@Controller
@RequestMapping(path="/api") 
public class ApiController {
	
	@Autowired
	InventoryRepository inventoryRepo;
	
	CSVWriter csvWriter = new CSVWriter();
	
	
	@PostMapping (path="/newReceiving")
	public @ResponseBody String inputNewReceiving (@RequestBody Inventory input) {
		Inventory newInv = new Inventory();
		newInv.setBarcode(input.getBarcode());
		newInv.setCost(input.getCost());
		newInv.setItemVendNo(input.getItemVendNo());
		newInv.setVendor(input.getVendor());
		newInv.setQuantity(input.getQuantity());
		inventoryRepo.save(newInv);
		return "success";
	}
	
	@GetMapping(path="/printReport")
	public void printReport() throws IOException {
		List<Inventory> invReport = (List<Inventory>) inventoryRepo.findAll();
		String csvFileLocation = "/report.csv";
		FileWriter writer = new FileWriter(csvFileLocation);
			csvWriter.writeLine(writer, Arrays.asList("Barcode","Vendor","Vendor Item Number",
					"Quantity", "Cost"));
		for (Inventory i: invReport) {
			List<String> line = new ArrayList();
			line.add(i.getBarcode());
			line.add(i.getVendor());
			line.add(i.getItemVendNo());
			line.add(String.valueOf(i.getQuantity()));
			line.add(String.valueOf(i.getCost()));
			csvWriter.writeLine(writer, line);
			
		}
		writer.flush();
		writer.close();
	}

}
