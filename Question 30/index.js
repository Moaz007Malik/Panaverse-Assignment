"use strict";
let users = ["admin", "user1", "user2", "user3", "user4"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
}
