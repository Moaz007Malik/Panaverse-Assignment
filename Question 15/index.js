var people = ["Moaz Malik", "Arbab Malik", "Ammar Malik"];
var absentperson = "Arbab Malik";
console.log("".concat(absentperson, " can't come becuase he has some important work to do."));
var anotherperson = people.indexOf("Arbab Malik");
people[anotherperson] = "Nayab Malik";
for (var i = 0; i < people.length; i++) {
    console.log("Hi ".concat(people[i], "! I would like to invite you on the dinner. Can you please spare some time for me?"));
}
