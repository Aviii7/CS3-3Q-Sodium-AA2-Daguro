function myFunc() {
  let a = prompt("Enter value for the initial population: ");
  let b = prompt("Enter value for the rate of growth: ");
  let c = prompt("Enter value for the time elapsed in hours: ");
  let d = parseFloat(a) * ( Math.E ** (parseFloat(b) * parseFloat(c)));
  d = Math.round(d);

  let e = prompt("Enter the region/location of the monster: ");
  let f = prompt("Enter the name of the monster: ");
  let g = concat(e, " ", f);
  g = toUpperCase(g);

  document.getElementById('result').innerhtml = "After " + c + " hours, the population of " + g + " has increased to " + d + "!";
}
  
