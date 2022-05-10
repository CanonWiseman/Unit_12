class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2;
    }

    revEngine(){
        return 'VROOM!';
    }
}

class Garage {
    constructor(cap) {
        this.cap = cap;
        this.vehicles = [];
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "ONLY VEHICLES CAN BE PARKED IN THE GARAGE";
        }
        if(this.vehicles.length >= this.cap){
            return "THE GARAGE IS AT CAPACITY";
        }
        this.vehicles.push(newVehicle);
        return "PARKED!";
    }
}