gameCanvas = document.getElementById('gameCanvas')

// Ball object
ball={
    x:this.gameCanvas.width/2,
    y:this.gameCanvas.height/2,
    r:10,
    speedx:0,
    speedy:0,
    oldx:0,
    oldy:0,
    direction:0,
    delay:0,
    readyState:false
}


let bluescore = 0
let redscore = 0

// creates the ball

drawBall = ()=>{   
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.r,0,360)
    ctx.closePath()
    ctx.fillStyle = "red"
    ctx.fill()
}


// Collision Detection for ball against the player and barrier


cdBallPlayer=()=>{


    
    //check if ball and player "touch". Technically check if ball is "inside" player or vice versa

      
    if((ball.x-(ball.x%5)+5 >= player.x && ball.x-(ball.x%5)-5 <= player.x+25) && (ball.y-(ball.x%5)+5 >= player.y && ball.y-(ball.x%5)-5 <= player.y +25)){

        // check which axis the player was moving when he touched the ball
        // if he was moving on the X axis(horizontally) then thats the axis the ball will move along
        if(player.oldx != player.x){
            ball.speedx=10
            //console.log("The ball moved on the x axis!")
        }
        // Likewise, if he was moving in the Y axis(vertically), thats the axis the ball will move along
        if(player.oldy != player.y){
        ball.speedy=10
        //console.log("The ball moved on the y axis!")
        }
        // The statements aren't mutally exclusive so they can both triggerd for diagonal movement(in theory)

        // figure out which direction they were going. If they were moving right or down direction is 1. Else its -1
        if((player.x<ball.oldx  ) && (player.y<ball.oldy  ))ball.direction=1
        else ball.direction=-1
        // return the player to his previous position. This won't affect the player because the game screen hasn't been refreshed yet and they won't it as most likely they will continue moving in the same direction
        player.x=player.oldx
        player.y=player.oldy

    }

    // Alright, now for player 2

    if((ball.x-(ball.x%5)+5 >= player2.x && ball.x-(ball.x%5)-5 <= player2.x+25) && (ball.y-(ball.x%5)+5 >= player2.y && ball.y-(ball.x%5)-5 <= player2.y +25)){
        
                // check which axis the player was moving when he touched the ball
                // if he was moving on the X axis(horizontally) then thats the axis the ball will move along
                if(player2.oldx != player2.x){
                    ball.speedx=10
                    //console.log("The ball moved on the x axis!")
                }
                // Likewise, if he was moving in the Y axis(vertically), thats the axis the ball will move along
                if(player2.oldy != player2.y){
                ball.speedy=10
                //console.log("The ball moved on the y axis!")
                }
                // The statements aren't mutally exclusive so they can both triggerd for diagonal movement(in theory)
        
                // figure out which direction they were going. If they were moving right or down direction is 1. Else its -1
                if((player2.x<ball.oldx  ) && (player2.y<ball.oldy  ))ball.direction=1
                else ball.direction=-1
                // return the player to his previous position. This won't affect the player because the game screen hasn't been refreshed yet and they won't it as most likely they will continue moving in the same direction
                player2.x=player2.oldx
                player2.y=player2.oldy
        
            }

                // what happens if players 1 and 2 both collide with the ball at opposite sides of the ball at the same time?
    


    // Update the balls position based on speed and direction
    ball.x = Math.round(ball.x + (ball.speedx*ball.direction))
    ball.y = Math.round(ball.y + (ball.speedy*ball.direction))

  


    //Friction to reduce speed. Don't want the ball moving forever. 
    ball.speedx*=.95
    ball.speedy*=.95

    // If i don't do this and ball isn't moved it makes some big numbers stored... or rather really small. Look it makes an asymptote
     if(ball.speedx<0.01)ball.speedx=0
     if(ball.speedy<0.01)ball.speedy=0

    // Bounces the ball back back with a bit extra force... for fun!
    if(ball.x+5>this.gameCanvas.width || ball.x-5 <0){
        ball.direction*=-1
        if (ball.speedx<0)ball.speedx-=10
        else ball.speedx+=10
        ball.x=ball.oldx
    }
    if(ball.y+5>this.gameCanvas.height || ball.y-5 <0){
        ball.direction*=-1
        if (ball.speedy<0)ball.speedy-=10
        else ball.speedy+=10
        ball.y=ball.oldy
    }

    if(ball.speedx == 0 && ball.speedy == 0){
        if(ball.x%5!=0)ball.x-=ball.x%5
        if(ball.y%5!=0)ball.y-=ball.y%5
    }
}

//Resets the ball in the centre of the field

reset=()=>{
    ball.speedx=0
    ball.speedy=0
    ball.direction=0
    ball.oldx=0
    ball.oldy=0
    ball.x=this.gameCanvas.width/2
    ball.y=this.gameCanvas.height/2
    ball.delay=0
    player.x=(Math.round(canvas.width/3.5))+2
    player.y=canvas.height/2-10
    player2.x=(Math.round(canvas.width/1.5))+2
    player2.y=canvas.height/2-10
    
}






// Collision Detection for ball against the goals(blue sides only)

cdBallGoals =()=>{

    // The goal on left first
    //Side 1 first (The vertical rectangle)
    //Check does it touch any of the walls

    if( ( (ball.x-ball.x%5)+5 >= goal1.side1.x && (ball.x-ball.x%5)-5 <= goal1.side1.x) && (ball.y+5>=goal1.side1.y && ball.y-5<=goal1.side1.y+150) ){
        ball.x=ball.oldx
        ball.speedx+=2
        ball.direction*=-1
        //console.log("Goal 1 Side 1")
    }
        //Side 2 (The top rectangle)
    if(((ball.y-ball.y%5)+5 >= goal1.side2.y && (ball.y-ball.y%5)-5 <= goal1.side2.y) && (ball.x+5 >= goal1.side2.x && ball.x-5 < goal1.side2.x+50)){
        ball.y=ball.oldy
        ball.speedy+=2
        ball.direction*=-1
        //console.log("Goal 1 Side 2")
    }
    //Side 3 (The bottom rectangle)
    if(((ball.y-ball.y%5)+5 >= goal1.side3.y && (ball.y-ball.y%5)-5 <= goal1.side3.y)&& (ball.x+5 >= goal1.side3.x && ball.x-5 < goal1.side3.x+50)){
        ball.y=ball.oldy
        ball.speedy+=2
        ball.direction*=-1
        //console.log("Goal 1 Side 3")
    }

    //The second goal now
    
    // Side 1(the verticle rectangle)
    if(((ball.x-ball.x%5)+5 >= goal2.side1.x &&  (ball.x-ball.x%5)-5 <= goal2.side1.x) && (ball.y+5>=goal2.side1.y && ball.y<=goal2.side1.y+150)){
        ball.x=ball.oldx
        ball.speedx+=2
        ball.direction*=-1
        //console.log("Goal 2 Side 1")
    }
        //Side 2 (The top rectangle)
        if(((ball.y-ball.y%5)+5 >= goal2.side2.y && (ball.y-ball.y%5)-5 <= goal2.side2.y) && (ball.x+5 <= goal2.side2.x && ball.x-5 > goal2.side2.x-50)){
            ball.y=ball.oldy
            ball.speedy+=2
            ball.direction*=-1
            //console.log("Goal 2 Side 2")
        }
        //Side 3 (The bottom rectangle)
        if(((ball.y-ball.y%5)+5 >= goal2.side3.y && (ball.y-ball.y%5)-5 <= goal2.side3.y)&& (ball.x+5 <= goal2.side3.x && ball.x-5 > goal2.side3.x-50)){
            ball.y=ball.oldy
            ball.speedy+=2
            ball.direction*=-1
            //console.log("Goal 2 Side 3")
        }
}

//Check if ball is in the goal
// The ball must cross the red line from right to left( left to right on the right hand goal)full and be in the goal for a goal to count. That should prevent glitches with the walls

scoreCheck =()=>{
    // I think i have to do it separately for both goals, which is annoying to write but should work in long run

    if((ball.y>goal1.side4.y+140 ||  ball.y < goal1.side4.y) ||  ball.x<goal1.side1.x){
        readyState=false
    }
    else readyState = true
    
    //This checks if the ball is in the goal area. If it is the ball is reset in the centre and the score goes up
    if (ball.x+5<=goal1.side4.x && ball.x > goal1.side1.x &&  ball.y > goal1.side1.y &&  ball.y < goal1.side1.y+140 && readyState){
        reset()
        console.log("Goal for Red Team!")
        redscore++
    }

    if(ball.y>goal2.side4.y+140 ||  ball.y < goal2.side4.y ||  ball.x>goal2.side1.x){
        readyState=false
    }
    else readyState = true
    
    //This checks if the ball is in the goal area. If it is the ball is reset in the centre and the score goes up
    if (ball.x+5>=goal2.side4.x && ball.x < goal2.side1.x &&  ball.y > goal1.side1.y &&  ball.y < goal1.side1.y+140 && readyState){
        reset()
        console.log("Goal for Blue Team!")
        bluescore++
    }
}
