package com.lyonsdenliquor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ActiveReport {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
	private Boolean isRunning;
	
	public Boolean getIsRunning() {
		return isRunning;
	}
	public void setIsRunning(Boolean isRunning) {
		this.isRunning = isRunning;
	}
	

}
