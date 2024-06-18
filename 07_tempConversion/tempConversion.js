const convertToCelsius = function(fahrenheit) {
  sum = (fahrenheit - 32) * (5 / 9)
  return Math.round(sum * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  sum = celsius * (9 / 5) + 32
  return Math.round(sum * 10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
