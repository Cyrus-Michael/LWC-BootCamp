
// myDetails = {}

// myCountry = "Country";
// myDetails[myCountry] = "Angola";
// console.log("myDetails");

let openingHours = {
    fri: {open: '10 AM', close: "11 PM"},
    sat: {open: '09 AM', close: "10 PM"},
    sun: {open: '08 AM', close: "09 PM"},
};

for(let item in Object.values(openingHours)){
    console.log(item);
}