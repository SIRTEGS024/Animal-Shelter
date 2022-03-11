function fahrenheit (celsius) {
  return(celsius*(9/5)+32);
}
function celsius(fahrenheit) {
  return((fahrenheit-32)*(5/9));
}

const celsius = parseInt(prompt("Enter value of celsius:"));
const Fahrenheit = fahrenheit(celsius);
alert(Fahrenheit);
const celsius = parseInt(prompt("Enter value of fahrenheit:"));
const Celsius = celsius(fahrenheit);
alert(Celsius);
