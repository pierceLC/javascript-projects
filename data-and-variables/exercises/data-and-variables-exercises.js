// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);
console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.');
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(milesToMoon);
console.log(hoursToMoon);
console.log(daysToMoon);
console.log(shuttleName + ' will take ' + daysToMoon + ' days to reach Moon.');
