const max=prompt("enter the max number: ");

const random= Math.floor(Math.random()*max)+1 ;     
//floor function to make it a integer instead of decimal;
//+1 to print random no. from 1 to max instead of 0 to max

guess=prompt("guess the number: ");
while(true){
    if(guess=="quit"){
        console.log("user quit ");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats!! random number was=",random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint: your guess was small than random.Please try again");
    }
    else{
        guess=prompt("hint: your guess was large than random.Please try again");
    }
    // else{
    //     guess=prompt("Your guess was wrong. please try again");
    // }
 

}