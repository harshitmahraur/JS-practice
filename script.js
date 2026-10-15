let a = 6;
let b = 5;
let c = "Name";
a = a + 1;       //update a
console.log(typeof a, typeof b, typeof c);
{
    let a = 22    //block element
    console.log(a);
}

console.log(a);

let age = 44;
if (age >= 18) {
    console.log("vote");
}
else {
    console.log("no vote");
}

// let x = 22;
// let y = 12;
// console.log("X+Y:", x + y);
// let value = a > b ? (a - b) : (b - a);
// console.log(value);


let obj = {
    name: "H",
    class: "IT"
}


for (const key in obj) {
    const element = obj[key];
    console.log(key, element);

}

// for (const c of "harry") {
//     console.log(c);
// }
console.log("\n");
// *********************************FUNCTIONS************************************
console.log("Functions");

function greet() {
    console.log("HEY");
}
greet();

function sum(a, b, c = 2) {
    console.log(a,b,c);
    return a + b + c;
}

ans1 = sum(1);
console.log("SUM =" ,ans1);
ans2 = sum(1,2,1);
console.log("SUM =" ,ans2);

// store function in a variable;
const add=(a,b)=>{
    return a+b;
}
let y=add(2,1);
console.log(y);

// STRINGS

let name="akshaykumar";
let n=`${name} is an actor`;
console.log(n);

console.log(name.replace("ak","777"));
