const mongoose= require("mongoose");

const Car= require("../models/car");

const addCar= async (req,res)=>{
    try {
        const newCar = new Car(req.body);
        const car = await newCar.save();
        res.status(201).json(car);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllCars= async (req,res)=>{
try{
    const cars = await Car.find();
        if (!cars || cars.length === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(cars);
}catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getCarByID =async (req,res)=>{
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const updateCar= async (req,res)=>{
try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};


const deleteCar= async(req,res)=>{
     try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports={
addCar,
getAllCars,
getCarByID,
updateCar,
deleteCar

};
