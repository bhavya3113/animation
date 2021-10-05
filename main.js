var bat = document.querySelector(".bat");
var ball = document.querySelector(".ball");
var btn = document.querySelector(".btn-play");
var coin = document.querySelector(".coin");
var start_btn  = document.querySelector(".start");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var ball_pos = screen.width - 1300;
var bottom = 150;
var timeout;
var right =screen.width-250;
var coinTop = 300;
var flag1 =1;
var angle =40;
var time = setInterval(flip, 1);
 function flip(){
    coin.style.top =  coinTop + 'px';
    coin.style.transform= `rotate3d(1,1,1,${angle}deg)`;
    angle+=1;
    if(flag1==1){
      coinTop = coinTop -0.5;
    }
    if(flag1 == 0){
      coinTop = coinTop + 0.5;
    }
  
    if(coinTop <= 100){
      flag1 =0;
    }
    if(coinTop >= 400){
      flag1=1;
    }
    if(coinTop==400)
    {
      clearInterval(time);
      coin.style.transform = "rotateX(20deg)";
      timeout= setTimeout(start,1000);
    }   
};
function start(){
  first.style.display="none";
  second.style.display="block";
  clearTimeout(timeout);
  interval = setInterval(play,1);
}

var flag2 =0;
var ball_rot =20;
function play(){
  if(flag2 ==0){
    ball_rot +=3;
    ball.style.transform=`rotate(${ball_rot}deg)`;
    ball.style.right = ball_pos +'px';
    ball_pos++;
    if(parseInt(ball.style.right)>=screen.width-330 )
    {
      bat.style.transform="rotate(-70deg)";
      flag2 =1;
    }
  }
  if(flag2 == 1){
    if( parseInt(ball.style.right)>screen.width/2)
    {
      bottom+=1;
      right-=1;
      ball.style.bottom= bottom+'px';
      ball.style.right= right+'px';
    }
  if( parseInt(ball.style.right)<=screen.width/2 && parseInt(ball.style.right)>= screen.width-1300)
  {
    right -=1;
    bottom-=0.8;
    ball.style.right = right+'px';
    ball.style.bottom = bottom+'px';
  }
}
};