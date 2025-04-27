let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let i in statistics) {
  // check if property name starts with 'r' OR its value is odd
  if (i.startsWith('r') || statistics[prop] % 2 !== 0) {
    console.log(statistics[prop]);
  }
}
