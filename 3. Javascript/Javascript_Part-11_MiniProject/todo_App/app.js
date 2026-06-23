let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=inp.value; 

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item); 


    inp.value="";
})

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;       //as we have to delete parent element 
//         console.log(par);
//         par.remove();
//     })
// };

//Event Delegation
ul.addEventListener("click",function(){      //it will also be applicable on buttons (as it are its child Elements),, imp- applicable on newly created ones too
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})