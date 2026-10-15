const adj={
    "1":"Crazy",
    "2":"Amazing",
    "3":"Fire"
}

const shopname={
    "1":"Engine",
    "2":"Foods",
    "3":"Garments"
}

const word={
    "1":"Bros",
    "2":"Limited",
    "3":"Hub"
}

const key1=Object.values(adj);
const randomadj=key1[Math.floor(Math.random()*3)];
console.log(randomadj);


const key2=Object.values(shopname);
const randomshopname=key2[Math.floor(Math.random()*3)];
console.log(randomshopname);


const key3=Object.values(word);
const randomword=key3[Math.floor(Math.random()*3)];
console.log(randomword);

