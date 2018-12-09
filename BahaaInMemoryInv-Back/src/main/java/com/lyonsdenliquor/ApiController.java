package com.lyonsdenliquor;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
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

import com.lyonsdenliquor.types.Barcode;



@Controller
@RequestMapping(path="/api") 
public class ApiController {
	
	@Autowired
	InventoryRepository inventoryRepo;
	
	CSVWriter csvWriter = new CSVWriter();
	String vendor;
	
	@PostMapping (path="/barcode")
	public @ResponseBody String readBarcode(@RequestBody Barcode barcode) {
		String output;
		String output2="";
		try {
			
			URL url = new URL("http://localhost:9004/barcode?barcode="+barcode.getBarcode());
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			if (conn.getResponseCode() != 200) {
				return "failure in Database Reader Writer. Is it turned on?";
            }
			InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            while ((output = br.readLine()) != null) {
                System.out.println(output);
                output2 = output;
            }
            return output2;
		}
		catch (Exception e) {
			return "error" + e;
		}	
	}
	@GetMapping (path="/vendors")
	public @ResponseBody String getVendors() {
		String output;
		String output2="";
		try {
			
			URL url = new URL("http://localhost:9004/vendors");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			if (conn.getResponseCode() != 200) {
				return "failure in Database Reader Writer. Is it turned on?";
            }
			InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            while ((output = br.readLine()) != null) {
                System.out.println(output);
                output2 = output;
            }
            return output2;
		}
		catch (Exception e) {
			return "error" + e;
		}	
	}
	
	@PostMapping (path="/newReceiving")
	public @ResponseBody String inputNewReceiving (@RequestBody Inventory input) {
		vendor = input.getVendor();
		Inventory newInv = new Inventory();
		newInv.setBarcode(input.getBarcode());
		try {
			newInv.setItemVendNo(input.getItemVendNo());
		} catch (Exception e) {
			newInv.setItemVendNo("null");
		}
		newInv.setVendor(input.getVendor());
		newInv.setQuantity(input.getQuantity());
		newInv.setInvoiceNumber(input.getInvoiceNumber());
		newInv.setItemNo(input.getItemNo());
		System.out.println(input.getItemNo());
		inventoryRepo.save(newInv);
		return "success";
	}
	
	@GetMapping(path="/printReport")
	public String printReport() throws IOException {
		System.out.println("Attempting to Write");
		Iterable<Inventory> invReport = inventoryRepo.findAll();
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");
		vendor.replaceAll("\\s+","");	
		String csvFileLocation = "./"+vendor+"InventoryReport"+dateFormat.format(date)+".csv";
		FileWriter writer = new FileWriter(csvFileLocation, true);
			csvWriter.writeLine(writer, Arrays.asList("item_no", "qty_recvd", "_cost"));
			
			// header would be "item_no","qty_recvd", "_cost"
			//need to convert all units to single to go under "qty_recvd"
		for (Inventory i: invReport) {
			System.out.println(i.getItemNo());
			List<String> line = new ArrayList<String>();
			line.add(i.getItemNo());
			line.add(String.valueOf(i.getQuantity()));
			line.add(String.valueOf(i.getLastCost()));
			csvWriter.writeLine(writer, line);
			System.out.println("File Written to "+csvFileLocation);
		
		}
		writer.flush();
		writer.close();
		for (Inventory i: invReport) {
			inventoryRepo.delete(i);
		}
		return "success";
	}
	
	public String getItemNumber(String barcode) {
		String output;
		String output2="";
		try {
			
			URL url = new URL("http://localhost:9004/getItemNo?barcode="+barcode);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			if (conn.getResponseCode() != 200) {
				return "failure in Database Reader Writer. Is it turned on?";
            }
			InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader br = new BufferedReader(in);
            while ((output = br.readLine()) != null) {
                System.out.println(output);
                output2 = output;
            }
            return output2;
		}
		catch (Exception e) {
			return "error" + e;
		}
	}
	
	@RequestMapping(path="/all")
	public @ResponseBody Iterable <Inventory> getAll() {
			return inventoryRepo.findAll();
		
	}

}
