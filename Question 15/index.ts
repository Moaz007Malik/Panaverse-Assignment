let people:string[] = ["Moaz Malik", "Arbab Malik", "Ammar Malik"];
let absentperson = "Arbab Malik";
console.log(`${absentperson} can't come becuase he has some important work to do.`)
let anotherperson = people.indexOf("Arbab Malik");
people[anotherperson] = "Nayab Malik";
for(let i=0; i<people.length; i++){
    console.log(`Hi ${people[i]}! I would like to invite you on the dinner. Can you please spare some time for me?`);
}