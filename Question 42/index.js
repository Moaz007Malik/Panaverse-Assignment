"use strict";
let magicians = ['Witcher', 'Dr. Strange', 'Mage'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
show_magicians(magicians); // before modification
make_great(magicians);
console.log(`After Modification: `);
show_magicians(magicians); // after modification
