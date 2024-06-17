const sumAll = function(num1, num2) {
    total = 0
    if (num1 < 1 || num2 < 1 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR"
    } else {
        for (let i = (num1 < num2 ? num1 : num2); i <= (num1 > num2 ? num1 : num2); i++) {
        total += i
        }
    }    
    return total
};

// Do not edit below this line
module.exports = sumAll;
