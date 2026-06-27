let btn=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try{
        let res=await axios.get(url);    

        return res.data.message;
    }
    catch(err){
        console.log("Error : ",err)
        return "No Image found";
    }
}

btn.addEventListener("click",async ()=>{
    let link=await getImg();
    
    let img=document.querySelector("img");
    img.setAttribute("src", link);
})