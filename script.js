function myFunc() {
  let initialPopulation = prompt("Enter value for the initial population: ");
  let rateOfGrowth = prompt("Enter value for the rate of growth: ");
  let elapsedHours = prompt("Enter value for the time elapsed in hours: ");
  let calculations = parseFloat(initialPopulation) * Math.pow(Math.E, (parseFloat(rateOfGrowth) * parseFloat(elapsedHours)));
  calculations = Math.round(calculations);

  let locationOfMonster = prompt("Enter the region/location of the monster: ");
  let nameOfMonster = prompt("Enter the name of the monster: ");
  let mergedString = concat(locationOfMonster, " ", nameOfMonster);
  mergedString = toUpperCase(mergedString);

  document.getElementById('result').innerHTML = 'After ' + elapsedHours + ' hours, the population of ' + mergedString + ' has increased to ' + calculations + '!';
}
  
