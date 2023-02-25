var personName = "Moaz malik";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b(\w)/g, function (s) { return s.toUpperCase(); }));
