//Callback Hell
// h1=document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(()=>{
//             h1.style.color=color;
//             if(nextColorChange) nextColorChange();   //only call if nextColorChange is defined 
//     }, delay);
// }


// changeColor("red",1000, ()=> {     //callbacks nesting   --> callback hell
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=> {
//             changeColor("yellow",1000, ()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });



// //setting Up for Promises
// //assume database
// function savetoDb(data, success, failure) {             //we pass func name success so as be called upon success, failure for failed
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();  
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("hello", ()=>{                 //function calling part   //callback hell-- same primary callbacks inside consecutive successes
//     console.log("success: your data was saved");
//     savetoDb("hello world", ()=>{
//         console.log("success2: your data was saved");   
//         savetoDb("ayush", ()=>{
//             console.log("success3: your data was saved");
//         }, ()=>{
//             console.log("failure3: weak connection. data not saved");
//         })
//     }, ()=>{
//     console.log("failure2: weak connection. data not saved")
// })
// }, ()=>{
//     console.log("failure: weak connection. data not saved")
// })


//Refactoring with PROMISES
function savetoDb(data){
    return new Promise((resolve,reject)=> {                 //Remember : resolve (success), reject (failure) in arguments of promise object
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }
        else{
            reject("failure: weak connection");
        }   
    }) 
}
// savetoDb("ayush"); 

//then() & catch()
// let request= savetoDb("ayush");  //req = promise object.     //both then, catch requires a callback in parantheses, as it uses function --> Give it the function reference It'll call it later
// request.then(()=>{
//     console.log("promise was resolved");
// })            
// .catch(()=>{
//     console.log("promise was rejected");
// })


//promise chaining & results-errors
savetoDb("ayush solanki")
.then((result)=>{
    console.log("data1 saved. promise 1 resolved");
    console.log("result of promise: ",result);   //result - resolve written part ("success: data was saved")
    return savetoDb("hello world");  //will be returned from then callback & below another then is already attached for returned object
})
.then((result)=>{
    console.log("data2 saved. promise 2 resolved");
    console.log("result of promise: ",result);
})
.catch((error)=>{
    console.log("some promise rejected");
    console.log("error of promise: ",error);   //error -- reject written part ("failure: weak connection")
})



//change color using Promise
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
})