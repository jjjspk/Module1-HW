// 8.
// Instruction:
// - Create a 'Bus' object for 'Practice 7'. Use a constructor in class.
// Initiate code:
// // Insert your code here
// 9. 
// Instruction:
// - Create class BusStop with the following specifications:
// Class BusStop:
// Constructor
// • constructor(destinations): This initializes the properties 'destinations'
// Properties
// • destinations: A string representing the primary location or area the bus 
// stop serves.
// • Buses: Array of Bus instances, a list of Bus objects that stop at this 
// destination.
// Methods
// • addBus(bus): Adds a bus to the bus stop if the bus's route includes the bus stop's 
// des9na9on. bus: An instance of the Bus class. Returns A boolean value; true if 
// the bus was successfully added, false if not (e.g., if the bus's des9na9ons do not 
// include the bus stop's des9na9on).
// • removeBus(busNumber): Removes a bus from the bus stop based on its number.
// busNumber: The number of the bus to remove. Returns A boolean value; true if 
// a bus was found and removed, false if no bus with the given number was found.
// • listBuses(): Generates a list of all buses currently at the bus stop, including their 
// numbers and des9na9ons.Returns An array of objects, each represen9ng a bus at 
// the bus stop with busNumber and des5na5ons proper9es. If no buses are at the 
// stop, returns an empty array.
// 10.
// Instruction:
// - Create a 'Bus' and 'BusStop" object for 'Practice 9'. Use a constructor and methods in 
// class.
// Initiate code:
// // Insert your code her



class Bus {
    constructor(busNumber , destinations) {
        this.busNumber = busNumber
        this.destinations = destinations
    }
}

// create a 'Bus' object for practice7
const practice7Bus = new Bus("7",["Stop A","Stop B","Stop C"]);

class BusStop {
    constructor (destinations) {
        this.destinations = destinations
        this.buses = []
    }
    addBus (bus) {
        if (bus.destinations.includes(this.destinations)) {
            this.buses.push(bus);
            return true
        }
        return false
    }
    removeBus (busNumber) {
        const index = this.buses.findIndex(bus => bus.busNumber === busNumber);
        if (index !== -1) {
            this.buses.splice(index , 1)
            return true
        }
        return false
    }
    listBuses() {
        return this.buses.map(bus => ({ busNumber: bus.busNumber, destinations: bus.destinations}))
    }
}

// Create a 'Bus' and 'BusStop' object for Practice9
const practice9Bus = new Bus ("9" , ["Stop A", "Stop B","Stop C"] )
const practice9BusStop = new BusStop("Stop B");
practice9BusStop.addBus(practice9Bus);
