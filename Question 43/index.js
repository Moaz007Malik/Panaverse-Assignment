"use strict";
let magicians = ['Witcher', 'Dr. Strange', 'Mage'];
function make_great(names) {
    let great_magicians = [];
    for (let name of names) {
        great_magicians.push(name + " the Great");
    }
    return great_magicians;
}
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
let great_magicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
