const removeFromArray = function(array,...remove) {
    // return array.filter(function(value) {
    //     return !remove.includes(value)
    // })
    return array.filter(value => !remove.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
