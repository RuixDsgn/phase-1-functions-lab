const hqLocation = 42;
let passengerLocation = '';

function distanceFromHqInBlocks(passengerLocation) {
  return (Math.abs(hqLocation - passengerLocation));
}

function distanceFromHqInFeet (passengerLocation) {
  return (distanceFromHqInBlocks(passengerLocation) * 264);
}

let start = '';
let destination = '';

function distanceTravelledInFeet (start, destination) {
    return ((Math.abs(start - destination)) * 264);
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) < 400) {
          return 0;
      }
    else if ((distanceTravelledInFeet (start, destination) > 400) && (distanceTravelledInFeet (start, destination) < 2000)) {
      return ((distanceTravelledInFeet (start, destination) - 400) * .02);
    }
    else if (((distanceTravelledInFeet (start, destination) > 2000) && (distanceTravelledInFeet (start, destination) < 2500))) {
      return 25;
    }
    else {
      return "cannot travel that far";
    }
    return calculatesFarePrice;
  }