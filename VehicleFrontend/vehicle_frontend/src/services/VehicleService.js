import axios from "axios"
const VEHICLE_BASE_URL="http://localhost:8080/vehicle/api"

class VehicleService{
    saveVehicle(vehicle){
        return axios.post(VEHICLE_BASE_URL,vehicle);
    }
    getVehicle(){
        return axios.get(VEHICLE_BASE_URL);
    }
    deleteVehicle(id){
        return axios.delete(VEHICLE_BASE_URL+"/"+id);
    }
    updateVehicle(vehicle){
        return axios.put(VEHICLE_BASE_URL,vehicle);
    }
    getVehicleById(id){
        return axios.get(VEHICLE_BASE_URL+"/"+id);
    }

}
export default new VehicleService();