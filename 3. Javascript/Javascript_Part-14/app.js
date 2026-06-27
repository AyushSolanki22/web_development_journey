let url="https://catfact.ninja/fact/ ";

//all same like as done in api.js (last part), just axios instead of fetch
async function getFacts() {
    try{
        let res=await axios.get(url);     
        // console.log(res.data.fact);

        return res.data.fact;
    }
    catch(err){
        console.log("Error : ",err)
        return "No Fact found";
    }
}


let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{       //as getFacts() will return promise to fact which may take time, we would need to use await and to use it, we made callback - async 
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
})


