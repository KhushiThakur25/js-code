window.addEventListener('load',bindEvents);
let buttons;
function bindEvents(){
 buttons= document.getElementsByTagName('button');
for( let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',printXorZero);
    }
}
let flag= true ;
let clickcount =0;
let gamefinish=false;
function printXorZero(){
   const currentButton = this;  
    if( !gamefinish && currentButton.innerText.length ==0){
      clickcount++;
     currentButton.innerText = flag?"X":"0";
    }
     if(clickcount>=5 && gameover())
     {
      
      document.getElementById("msg").innerText="GAME OVER" + (flag?"X":"0" )+ "win";
    return;
  }
  flag = !flag; 
}

function gameover(){
 return threesame(buttons[0],buttons[1],buttons[2])|| threesame(buttons[0],buttons[4],buttons[8])|| threesame(buttons[2],buttons[4],buttons[6])|| threesame(buttons[0],buttons[3],buttons[6])|| threesame(buttons[1],buttons[4],buttons[7])|| threesame(buttons[2],buttons[5],buttons[8])|| threesame(buttons[3],buttons[4],buttons[5])|| threesame(buttons[6],buttons[7],buttons[8]);
}
function threesame(a,b,c){
  if(NotBlank(a) && NotBlank(b) && NotBlank(c)){
 return a.innerText === b.innerText && a.innerText === c.innerText;{

  }
  return false;
}
}
function NotBlank(currentButton){
  if( currentButton.innerText.length>0){
    return true;
  }
}