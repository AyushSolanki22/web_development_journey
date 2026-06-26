//async keyword

async function greet() {
    // throw "some random error"; 
    return "hello";   //promise result of resolve  as async function always returns a promise
}

greet()
.then((result)=>{               //.then tasks goes to Microtasks queue , these are handle after execution of complete js file
    console.log("promise was resolved");
    console.log("result was: ",result);
})
.catch((err)=>{
    console.log("promise was rejected with err : ",err);
})


//await keyword
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve(`color changed to ${color}!`);
        },delay);
    });
}

async function demo() {            //just a simple code instead of lengthy, confusing one as done in change color using promise or without in Part-12
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);

    //handling rejections
    // try{
    //     await changeColor("red",1000);
    //     await changeColor("orange",1000);
    //     await changeColor("green",1000);
    //     await changeColor("blue",1000);
    // }    
    // catch(err){
    //     console.log(err);
    // }

}


//accessing JSON data
let jsonRes='{"fact":"The little tufts of hair in a cat\u2019s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called \u201cear furnishings.\u201d","length":143}';

let validRes= JSON.parse(jsonRes);
console.log(validRes.fact);


//
