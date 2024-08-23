const Car = require('../models/carModel');
//-----------------------------------------------------

exports.getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.send(cars);
};

//---------------------------------------------------------------
exports.createCar = async (req, res) => {
    const { name, color, milesRun, forRentOrSell } = req.body;
    let car = new Car({ name, color, milesRun, forRent ,forSell });
    car = await car.save();
    res.send(car);
};
//-----------------------------------------------------------------------

exports.updateCar = async (req, res) => {
    const { name, color, milesRun, forRent ,forSell  } = req.body;
    const car = await Car.findByIdAndUpdate(req.params.id, { name, color, milesRun, forRent ,forSell  }, { new: true });
    res.send(car);
};
//--------------------------------------------------------------------

exports.deleteCar=asyn (req,res) =>{
    const user =await user.findByIdAndUpdate(req.params.id)
    res.send(user);

};
