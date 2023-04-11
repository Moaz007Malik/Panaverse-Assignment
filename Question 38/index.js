"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Lahore");
describe_city("Mumbai", "India");
describe_city("Jaddah", "Saudi Arabia");
