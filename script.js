function myFunc() {
  let a = prompt("Enter value for the initial population: ");
  let b = prompt("Enter value for the rate of growth: ");
  let c = prompt("Enter value for the time elapsed in hours: ");
  let d = parseFloat(a) * ( Math.E ** (parseFloat(b) * parseFloat(c)));
  d = Math.round(d);

}
  
