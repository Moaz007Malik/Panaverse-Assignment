"use strict";
let current_users = ['jane', 'john', 'alice', 'bob', 'charlie'];
let new_users = ['george', 'ALICE', 'ringo', 'jane', 'paul'];
for (let username of new_users) {
    if (current_users.includes(username.toLowerCase())) {
        console.log(`Sorry, the username "${username}" is already taken. Please choose a different one.`);
    }
    else {
        console.log(`The username "${username}" is available.`);
    }
}
