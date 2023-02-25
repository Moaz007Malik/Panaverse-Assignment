var people = ["Moaz Malik", "Arbab Malik", "Ammar Malik"];
console.log("Hey everyone, a bigger dinner has come. So, I want to invite few more people.");
var newpeople1 = "Nayab Malik";
var newpeople2 = "Ali Malik";
var newpeople3 = "Shehroz Malik";
people.unshift(newpeople1);
people.splice(2, 0, newpeople2);
people.push(newpeople3);
for (var i = 0; i < people.length; i++) {
    console.log("Hi ".concat(people[i], "! I would like to invite you on the dinner. Can you please spare some time for me?"));
}
