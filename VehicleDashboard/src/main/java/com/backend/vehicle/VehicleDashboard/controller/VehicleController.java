package com.backend.vehicle.VehicleDashboard.controller;

import com.backend.vehicle.VehicleDashboard.entity.Vehicle;
import com.backend.vehicle.VehicleDashboard.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "vehicle/api")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {

    private VehicleService vs;

    @PostMapping
    public void addVehicle(@RequestBody Vehicle vh){
        vs.newVehicle(vh);

    }

    @GetMapping
    public List<Vehicle> getAllVehicles(){
        return vs.getAllVehicles();
    }

    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable int id){
        vs.deleteVehicleById(id);

    }

    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable int id){
        return vs.getVehicleById(id);

    }

    @PutMapping
    public void updateVehicle(@RequestBody Vehicle vh){
        vs.updateVehicle(vh);


    }
}
