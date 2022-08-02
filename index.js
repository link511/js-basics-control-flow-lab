// need tyo define feet varible before .

function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  }
  
  else if(2000 < feet && feet < 2500){
    return 'I will gladly take your thirty bucks.';
  } 

  else if(feet > 2500)
  {return 'No can do.';}

}


// using Ternary Expression 
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.':'No go.';

}

function switchOnCharmFromTip(tips){
  switch (tips) {
    case 'generous':
      return "Thank you so much.";

    case 'not as generous':
      return "Thank you.";

      default :
      return "Bye.";
  }
}