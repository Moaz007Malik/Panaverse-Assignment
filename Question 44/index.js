"use strict";
function makeSandwich(items) {
    let summary = "This sandwich has ";
    for (let i = 0; i < items.length; i++) {
        if (i === items.length - 1) {
            summary += `and ${items[i]}.`;
        }
        else {
            summary += `${items[i]}, `;
        }
    }
    console.log(summary);
}
const sandwich1 = ["lettuce", "tomato", "cheese"];
const sandwich2 = ["ham", "turkey", "bacon", "lettuce", "tomato"];
const sandwich3 = ["peanut butter", "jelly"];
makeSandwich(sandwich1);
makeSandwich(sandwich2);
makeSandwich(sandwich3);
