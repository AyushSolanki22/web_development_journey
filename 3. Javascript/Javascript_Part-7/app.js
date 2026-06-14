// this keyword
const student={
    name: "ayush solanki",
    age:18,
    eng:91,
    math:79,
    chem:97,
    getAvg(){
        let avg=(this.eng+this.math+this.chem)/3;
        console.log(`${this.name} got avg marks= ${avg}`);
    }
};

function getAvg(){
    console.log(this);
}

// Set timeout
console.log("Hi there!");

setTimeout  ( () =>{
    console.log("ayush solanki");        //arrow function as in callback  ()=> {}
}, 400)

console.log("Welcome to: ");    

//Practice Qs
//write a function that prints "Hello World" 5 times at intervals of 2s each.

let id=setInterval( ()=> {
    console.log("Hello World")
},2000);

setTimeout(()=>{              //logic - implementation of setTimeout to print hello world only 5 times
    clearInterval(id);
}, 10000);  