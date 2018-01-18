

renderGame=()=>{ //draws the field
    
        player.oldx=player.x
        player.oldy=player.y
        player2.oldx=player2.x
        player2.oldy=player2.y
        
        player.x+=player.xspeed
        player.y+=player.yspeed
        player2.x+=player2.xspeed
        player2.y+=player2.yspeed
        cdGoals()
        cdBorder()
        cdBallGoals()
        cdBallPlayer()
        scoreCheck()
        player.xspeed=0
        player.yspeed=0
        player2.xspeed=0
        player2.yspeed=0
        
        drawField()
        drawBall()
        drawPlayer()

        


        //save current position

        ball.oldx=ball.x
        ball.oldy=ball.y
        
        if(Math.round(ball.speedx)==100 && Math.round(ball.speedy) ==100){
            reset()
        }
        

       document.getElementById("scoreBoard").innerHTML=`<center>${bluescore} - ${redscore}</center>`
       document.getElementById("ballSpeed").innerHTML=`Ball x speed: ${Math.round(ball.speedx)}<br/> Ball y speed: ${Math.round(ball.speedy)}`
       document.getElementById("ballPosition").innerHTML=`Ball X position: ${ball.x}<br/> Ball Y position: ${ball.y}`
       if(bluescore==5 || redscore ==5){

        document.getElementById("images").style="display:inline"
        document.getElementById("gameCanvas").style="display:none"
        document.getElementById("btn1").style="display:inline"
        document.getElementById("btn2").style="display:inline"
        document.getElementById("scoreBoard").style="display:none"
           
           redscore=0
           bluescore=0
           var canvas = document.getElementById("gameCanvas")
           var ctx = canvas.getContext("2d")
            reset()
           //Clear the field first
            ctx.clearRect(0,0,canvas.width*2,canvas.height*2)
            clearInterval(j)
       }
    }
    
  