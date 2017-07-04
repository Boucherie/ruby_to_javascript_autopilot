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



function getDestination() {
if (car.city === 'Toronto') {
  return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}

function fillUpCar() {

}

function getGasDisplay() {

}

function drive() {

}

function dropOffPassengers() {

}

function act() {

}

function commandFleet() {

}

function addOneCarPerDay() {

}
