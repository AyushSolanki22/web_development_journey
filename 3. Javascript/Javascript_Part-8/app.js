let arr=[1,2,6,3,5];
// forEach

arr.forEach(function(el){
    console.log(el);
})

// map & filter
let double=arr.map(function(ele){
    return ele*2;
});

let even=arr.filter((ele)=>{
    return ele%2==0; //even - true, odd-false 
});


// reduce
let result=arr.reduce((max,ele)=>{
    if(ele>max) return ele;
    else return max;
});

//Spread
// console.log(Math.min(arr));    //this will print unexpected result-- NaN
console.log(Math.min(...arr));    

console.log(..."ayush solanki");

let newarr=[...arr];   //spread (array literals)
let newarr2=[...arr, ...newarr];    //initial part will be filled by arr, next by new arr -- remember to seperate them by comma

//Spread (Object literals)
const data={
        email: "xyz",
        password: "abcd",
};
const datacopy={...data, id:123};

let obj={...arr};  //we can also spread array,string using object literal    //indexes will be the keys

//Rest
function sum(...args){   //args-- arguments     //we will collect items as a array
        return args.reduce( (sum,el)=> sum+el );        //.reduce ***
    }

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    })
}

// Destructuring
const student={
    name: "karan",
    age:14,
    class: 9,
    subjects: ["hindi", "english", "math","science"],
    username: "ayush@123",
    password: "abcd",
};

// let {username, password }=student;   //only key can be used

let {username: user, password: pass, city: place= "delhi"}=student;