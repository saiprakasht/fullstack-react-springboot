package com.backend.vehicle.VehicleDashboard.service;

import com.backend.vehicle.VehicleDashboard.entity.Vehicle;
import com.backend.vehicle.VehicleDashboard.repo.VehicleRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VehicleService {
    private VehicleRepo vr;

    public void newVehicle(Vehicle v){
        vr.save(v);
    }

    public List<Vehicle> getAllVehicles() {
        return vr.findAll();
    }

    public void deleteVehicleById(int id) {
        vr.deleteById(id);
    }

    public Vehicle getVehicleById(int id){
        Vehicle v=vr.findById(id).get();
        return v;
    }

    public void updateVehicle(Vehicle vh) {
        Vehicle v1=getVehicleById(vh.getId());
        v1.setBrand(vh.getBrand());
        v1.setDateOfLastServicing(vh.getDateOfLastServicing());
        v1.setModel(vh.getModel());
        v1.setType(vh.getType());
        v1.setVehicleRegnNumber(vh.getVehicleRegnNumber());
        v1.setMfgYear(vh.getMfgYear());
        vr.save(v1);
    }
}
