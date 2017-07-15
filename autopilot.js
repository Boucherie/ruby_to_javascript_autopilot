function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  };
}

console.log(getNewCar);
var enterprise = [];

function addCar(fleet, newCar) {
  fleet.push(newCar); //need to pass this in
  console.log('Adding new car to fleet. Fleet size is now ' + fleet.length );
}
addCar(enterprise, 'Honda');


function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 50;
  return console.log('Picked up passenger. Car now has ' + car.passengers + ' passengers.');
}

pickUpPassenger(getNewCar);

function getDestination(car) {
if (car.city === 'Toronto') {
  return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}

function fillUpCar(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return console.log('Filled up to ' + car.gas + 'on gas from ' + getGasDisplay(oldGas) + '.');
}

function getGasDisplay(gasAmount) {
  return console.log(gasAmount +'%');
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpCar(car);
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  return console.log('Drove to ' + car.city + '.  Remaining gas: ' + getGasDisplay(car.gas) + '.');
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  console.log('Dropped off ' + previousPassengers + ' passengers.');
  return car.passengers = 0;
}

// dropOffPassengers(getNewCar);

function act() {
  distanceBetweenCities = 50;
  if (car.gas < 20) {
    return fillUpCar(car);
  }else if (car.passengers < 3) {
  pickUpPassenger(car);
  }else {
    if (car.gas < distanceBetweenCities) {
      return fillUpCar(car);
    };
    var droveTo = drive(car, distanceBetweenCities);
    var passengerDropped = dropOffPassengers(car);
    return droveTo + passengerDropped;
  };
}

function commandFleet() {

}

function addOneCarPerDay() {

}
