let url="https://catfact.ninja/fact/ ";         //remember url must be in string format

// fetch(url)  //the fetch returns a promise by default
// .then((response)=>{
//     console.log(response);      //is like promise object - we cannot see readable data here, all is code type ,, doesn't contain the text of fact too,, contain readable stream as one value 

//     // response.json();    //makes the data readable  //this also return promise by default, but promise result contain object containing fact,length
//     return response.json();
// })
// .then((data)=>{
//     console.log("data1 : ",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log("data2 : ",data.fact);
// })
// .catch((err)=>{
//     console.log("Error: ",err);  
// })



//using fetch with async-await
async function getFacts() {
    let res=await fetch(url);      //await because fetch is asynchronous call, and thus res would be printed: undefined
    let data=await res.json();
    console.log(data.fact);

    let res2=await fetch(url);      
    let data2=await res2.json();
    console.log(data2.fact);

    console.log("Thank You!")
}