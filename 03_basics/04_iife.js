// Immediately Invoked Function Expressions (IIFE)
// so that our block scope don't get polluted by global scope variables.

// first () is for fn definition and second () is for execution.
(function chai(){
    console.log(`DB CONNECTED`);
})();// need semicolon at the end, so it know when to stop.
// Arrow Fn format.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("indokalpa");

