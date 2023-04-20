let mario=document.querySelector(".mario");
let coin=document.querySelector(".coin");
let score=document.querySelector(".score");
let title=document.querySelector("h1");
let background=document.querySelector("body");
let jumpButton=document.querySelector(".jump");
let jumpdownButton=document.querySelector(".jump-down");
let changeColor=document.querySelector(".change-color");
let endGame=document.querySelector(".end-game");
let updateScore=document.querySelector(".update-score");
let grow=document.querySelector(".grow");

/* Problem 1:When jump button is clicked, Mario jumps and coin disappears */

jumpButton.onclick=function(){
    mario.style.bottom="175px";
    coin.style.display="none";
};


/*Problem 2 : When  Jump Down button is clicked, Mario jumps down */

jumpdownButton.onclick=function(){
    mario.style="bottom:60px";
};



/* 3: When Change Color button is clicked, background color changes */

changeColor.onclick= function (){
    background.style.backgroundColor="red";
};




/* 4: When End Game button is clicked, the title of the page says game over

____.____=____(){
    title.innerHTML="Game over.";
};
*/

/* 5: When Jump button is clicked, the counter score becomes "1" instead of 0. 
____.____=____(){
    score.innerHTML=1;
};

*/

/*6: When the user clicks the button "Gow" have the image of Mario get bigger. Write the whole click handler! 




*/
