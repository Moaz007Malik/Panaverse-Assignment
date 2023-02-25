let people:string[] = ["Moaz Malik", "Arbab Malik", "Ammar Malik"];
console.log(`Hey everyone, a bigger dinner has come. So, I want to invite few more people.`);
let newpeople1 = "Nayab Malik";
let newpeople2 = "Ali Malik";
let newpeople3 = "Shehroz Malik";
people.unshift(newpeople1);
people.splice(2, 0, newpeople2);
people.push(newpeople3);
for(let i=0; i<people.length; i++){
    console.log(`Hi ${people[i]}! I would like to invite you on the dinner. Can you please spare some time for me?`);
}