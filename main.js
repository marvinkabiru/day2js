let age = 50;
let newAge = age;

let message = "new Age = " + newAge;
console.log(message);

// immediately invoked function expression
//this makes the variables inaccessible in the window
(function(){
    var height = 10;
})();
//block
//this also makes the variables inaccessiblw in the windows
//but here you have to use either let or const
//not var
{
    var weight = 65;
    console.log(weight);
} 