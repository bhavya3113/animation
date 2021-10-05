var bat = document.querySelector(".bat");
var ball = document.querySelector(".ball");
//  var btn = document.querySelector(".btn-play");
var flag =0;
var interval= setInterval(play,1);;
// btn.addEventListener('click',function(){
//   if(btn.innerHTML=="PLAY")
//   {
//     btn.innerHTML="PAUSE";
//      interval = setInterval(play,1);
//   }
//   else{
//     btn.innerHTML="PLAY";
//     clearInterval(interval);
//   }
// });
var ball_pos = screen.width - 1300;
var bottom = 150;
var right =screen.width-250;

function play(){
  if(flag ==0){

    ball.style.right = ball_pos +'px';
    ball_pos++;
    if(parseInt(ball.style.right)>=screen.width-330 )
    {
      bat.style.transform="rotate(-70deg)";
      flag =1;
    }
  }
  if(flag == 1){
    if( parseInt(ball.style.right)>screen.width/2)
    {
      bottom+=1;
      right-=1;
      ball.style.bottom= bottom+'px';
       ball.style.right= right+'px';
    }
  if( parseInt(ball.style.right)<=screen.width/2 && parseInt(ball.style.right)> screen.width-1300)
  {
    right -=1;
    bottom-=0.8;
    ball.style.right = right+'px';
    ball.style.bottom = bottom+'px';
  }
  if(parseInt(ball.style.right)=scree.width-1300)
  {
    flag =0;
  }
  }
};

