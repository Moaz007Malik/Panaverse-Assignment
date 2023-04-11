"use strict";
function make_shirt(message = "I love TypeScript", size = "large") {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("I love TypeScript", "medium");
