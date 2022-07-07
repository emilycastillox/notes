/* 

** from https://levelup.gitconnected.com/javascript-algorithm-time-conversion-71dc15dd13b8 ***


Create a function called timeConversion. This function will take in a string as an input. In this function, you will be given a time written in 12-hour format: 
07:05:45PM

And you’ll have to output the time in military or 24-hour time format.

19:05:45

07:05:45PM // before substring(2,8)
:05:45 // after substring(2,8)
*/

let hour = s.substring(0, 2) * 1;
let timeFormat = s.substring(2,8);

// if midnight
if (hour === 12 && s.indexOf("AM") !== -1) {
    return ("00" + timeFormat);
}
// if afternoon
if (hour === 12 && s.indexOf("PM") !== -1) {
    return (time + timeFormat);
}

// if hour is from 1 to 11PM, add 12 to the time
if (hour < 12 && s.indexOf("PM") !== -1) {
    return (12 + hour + timeFormat);
} else { // if hour is from 1 to 11 AM
    if (hour < 10) { // if number is less than 10, add a zero in front
        return ("0" + hour + timeFormat);
    } else { // if number is greater than 9, just add rest of string
        return (hour + timeFormat);
    }
}