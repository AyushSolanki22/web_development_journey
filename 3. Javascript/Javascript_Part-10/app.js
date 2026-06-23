// // Mouse_Pointer Events
// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick= function(){
//     console.log("button was clicked");     //last assignment wins -- js onclick function gets called then
// };

// function sayHello() {
//     alert("Hello!"); 
// };

// btn.onclick=sayHello;        //we are just assigning the name of the function to the attribute, not executing function

//for multiple buttons 
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;     //we are just assigning the name of the function to the attribute, not executing function
// }

// btn.onmouseenter=console.log("you enter a mouse");  //error
// btn.onmouseenter= function(){
//     console.log("You entered a button");
// }


// //mouse events
// let btn2=document.querySelector("#keyboard_event");

// btn2.addEventListener("click",function (event) {
//     console.log(event);      //for 'click' -- pointer event,,, for 'dblclick' -- mouse event
//     console.log("button clicked");
// })


//keyboard event
let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){    //event arg ii\s not necessary , it is just used fot using evemt name in case required
    // console.log(event);
    console.log(event.key); console.log(event.code);
    console.log("key was pressed")
})

//form event
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    //extracting data
    // let inp=document.querySelector("form input");
    let inp=this.elements[0];   //accessing directly through obj and elements prop -- useful in case of multiple inputs,,, obj will be created 
    console.log(inp.value);   //for accessing data entered in a input box -- obj.value

}

)