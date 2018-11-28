package com.lyonsdenliquor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Inventory {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String barcode;
    private String vendor;
    private int quantity;
    private String itemVendNo;
    private double cost;

    
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id=id;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getItemVendNo() {
		return itemVendNo;
	}

	public void setItemVendNo(String itemVendNo) {
		this.itemVendNo = itemVendNo;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}
}

