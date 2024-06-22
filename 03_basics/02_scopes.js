// let a = 10;
// const b = 20;
// var c = 30; don't follow block scope.

// {}-curly braces is the block-scope,rest outside is global scope.

let a = 100;
if(true){
    let a = 10;
const b = 20;
var c = 30;
console.log("value of 'a' in block scope is", a);
}

//console.log("value of 'a' in global scope: ", a)
//console.log(c); will get printed even if out of if-else scope.

function one(){
    const username = "indokalpa";

    function two(){
        const website = "youTube"
        console.log(username);// 'username' can be accessed as within the block scope of fn one.
    }

    //console.log(website); 'website' can't be accessed as out of scope.
    two();

}

//one();

if(true){
    const username = "indokalpa"
    if(username == "indokalpa"){
        const website = " youTube"
        console.log(username + website);// username name can be accessed as within scope of if-else block.
    }
    // console.log(website); it is out of scope of the block.
}

console.log(addone(5));// no error
function addone(num){
    return num + 1;
}


//console.log(addTwo(5)); error 
const addTwo = function(num){
    return num + 2;
}
