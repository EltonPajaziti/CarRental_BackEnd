const express= require("express");
const {
addCar,
getAllCars,
getCarByID,
updateCar,
deleteCar,
rentalCars
}= require("../controller/cars");
const router= express.Router();

router.post("/cars", addCar);
router.get("/cars",  getAllCars);
router.get("/cars/:id", getCarByID);
router.put("/cars/:id", updateCar);
router.delete("/cars/:id", deleteCar);
router.get("/rental-cars", rentalCars);


module.exports=router;