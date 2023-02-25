let people:string[] = ["Aqib", "Raja", "Moaz", "Zulqarnain", "Faraz"];
console.log(`Hey everyone, a bigger dinner has come. So, I want to invite few more people.`);
let newpeople1 = "Sheharyar";
let newpeople2 = "Ali Akbar";
let newpeople3 = "Ezan";
people.unshift(newpeople1);
people.splice(2, 0, newpeople2);
people.push(newpeople3);
console.log(`The total persons that can come in dinner.`);
people.splice(3,1);
people.splice(1,1);
console.log(`You are inviting ${people.length} on a dinner.`);
console.log(`The following people are coming to dinner: `);
people.forEach((person, index) => {
    console.log(`${index + 1}. ${person}`)
});