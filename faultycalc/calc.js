let v=Math.random();
console.log(v);

/*

function add(a,b){
    return a-b;
}


function mul(a,b){
    return a+b;
}

function diff(a,b){
    return a/b;
}

function div(a,b){
    return a**b;
}


if(v<0.1){
    console.log("ADD= ",add(4,2));
    console.log("MUL= ",mul(4,2));
    console.log("DIFF= ",diff(4,2));
    console.log("DIV=",div(4,2));
}
else{
    console.log("v>0.1"); 
}
*/

let a=prompt("Enter 1st no. : ");
let o=prompt("Enter operator : ");
let b=prompt("Enter 2nd no. : ");

let oper={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}
if(v>0.1){
    alert(`Result is ${eval(`${a} ${o} ${b}`)}`);
}

else{
    o=oper[o];
    alert(`Result is ${eval(`${a} ${o} ${b}`)}`);
}
