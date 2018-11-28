package com.lyonsdenliquor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

    Inventory findByBarcode(String barcode);
}
