var peeps = ["Moaz", "Raja", "Aqib"];
console.log("All seats are reserved but only two seats are remaining.\nYou can invite only two people.\n");
while (peeps.length > 2) {
    var absentpeeps = peeps.pop();
    console.log("Sorry ".concat(absentpeeps, ", but only two people are required so you can't come. Sorry!\n"));
}
for (var i = 0; i < peeps.length; i++) {
    console.log("Hi ".concat(peeps[i], "! I would like to invite you on the dinner.\nCan you please spare some time for me?\n"));
}
peeps.splice(0, peeps.length);
console.log("Two people have come. Yayyy!");
