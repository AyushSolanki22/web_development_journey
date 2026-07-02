function Random(){
  
  let number=Math.floor(Math.random()*10)+1;
  
  return <h1 style={{'background-color':'wheat'}}>Random number is: {number}</h1>
}

export default Random; 