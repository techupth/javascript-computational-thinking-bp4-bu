
let students = {
  James:40,
  Ann:80,
  Joe:52,
  Ball:67,
  Mick:89,
  Ole:10
}
// Start coding here
function scoreAverage(){
    let total = 0;
    for(let key in students){
      total = total + students[key];
    }
    console.log(total/6)
}
function scoreHigh(){
  let score = 0;
  let name = "";
    for(let key in students){
      if(students[key]>score){
        score = students[key];
        name = key;
      }
    }
    console.log(`${name} has the highest score, which is ${score} points`);
}
function scorelower(){
  let score = 100;
  let name = "";
    for(let key in students){
      if(students[key]<score){
        score = students[key];
        name = key;
      }
    }
    console.log(`${name} has the highest score, which is ${score} points`);
}


scoreAverage();
scoreHigh();
scorelower();