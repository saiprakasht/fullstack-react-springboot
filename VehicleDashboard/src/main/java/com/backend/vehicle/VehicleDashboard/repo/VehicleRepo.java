package com.backend.vehicle.VehicleDashboard.repo;

import com.backend.vehicle.VehicleDashboard.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle,Integer> {
}
