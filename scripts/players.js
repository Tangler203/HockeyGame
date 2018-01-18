// Movement retrieved from https://stackoverflow.com/questions/23585320/how-to-move-object-with-keyboard-in-javascript


canvas = document.getElementById("gameCanvas")
ctx = canvas.getContext("2d")

player = {
    x:(Math.round(canvas.width/3.5))+2,
    y:canvas.height/2-10,
    h:25,
    w:25,
    //pColour: "rgb(255,150,87)",
    pColour:"rgb(87,192,0)",
    xspeed: 0,
    yspeed: 0,
    oldx: 0,
    oldy: 0,
    goalbound: false
}

player2 = {
    x:(Math.round(canvas.width/1.5))+2,
    y:canvas.height/2-10,
    h:25,
    w:25,
    pColour: "rgb(105,0,192)",
    //pColour: "(192,87,0)",
    xspeed: 0,
    yspeed: 0,
    oldx: 0,
    oldy: 0,
    goalbound: false
}

drawPlayer =()=>{

    ctx.fillStyle= player.pColour
    ctx.beginPath()
    ctx.rect(player.x, player.y, player.w, player.h)
    ctx.fill()
    ctx.closePath()

    ctx.fillStyle= player2.pColour
    ctx.beginPath()
    ctx.rect(player2.x, player2.y, player2.w, player2.h)
    ctx.fill()
    ctx.closePath()
}

// keys object all variables are boolean
Keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    up2: false,
    down2: false,
    left2: false,
    right2: false
}

// check if key is pushed, change bool in object to true
window.onkeydown = function(e) {
    var kc = e.keyCode

    if (kc === 37) Keys.left2 = true
    else if (kc === 38) Keys.up2 = true
    else if (kc === 39) Keys.right2 = true
    else if (kc === 40) Keys.down2 = true
    else if (kc === 65) Keys.left = true
    else if (kc === 87) Keys.up = true
    else if (kc === 68) Keys.right = true
    else if (kc === 83) Keys.down = true
};


//if key is released change bool to false
window.onkeyup = function(e) {
    var kc = e.keyCode
    if (kc === 37) Keys.left2 = false
    else if (kc === 38) Keys.up2 = false
    else if (kc === 39) Keys.right2 = false
    else if (kc === 40) Keys.down2 = false
    else if (kc === 65) Keys.left = false
    else if (kc === 87) Keys.up = false
    else if (kc === 68) Keys.right = false
    else if (kc === 83) Keys.down = false
};


function update() {
    if (Keys.up) {
        player.yspeed = -5
    }
    else if (Keys.down) {
        player.yspeed = 5
    }

    if (Keys.left) {
        player.xspeed = -5
    }
    else if (Keys.right) {
        player.xspeed = 5
    }

    if (Keys.up2) {
        player2.yspeed = -5
    }
    else if (Keys.down2) {
        player2.yspeed = 5
    }

    if (Keys.left2) {
        player2.xspeed = -5
    }
    else if (Keys.right2) {
        player2.xspeed = 5
    }


    requestAnimationFrame(update)// check if keys are pushed again
}
requestAnimationFrame(update)



cdBorder= ()=>{ // Collision Detection for the border, player should not go out of bounds now
    if(player.x<0)
    player.x=player.oldx
    if(player.x>=canvas.width-20)
    player.x=player.oldx
    if(player.y<0)
    player.y=player.oldy
    if(player.y>=canvas.height-20)
    player.y=player.oldy

    if(player2.x<0 || player2.x>=canvas.width-20)
    player2.x=player2.oldx
    if(player2.y<0 || player2.y>=canvas.height-20)
    player2.y=player2.oldy
    
}


//Collision Detection for the goals.

//Player 1

// Easier way to do this or to shorten it???

cdGoals =()=>{
    if((player.x == goal1.side1.x || player.x+20 == goal1.side1.x) && (player.y+20>=goal1.side1.y && player.y<=goal1.side1.y+150) ){
        player.x=player.oldx
        //console.log("Goal 1 Side 1")
    }
    if((player.y == goal1.side2.y || player.y+20 == goal1.side2.y) && (player.x+20 >= goal1.side2.x && player.x < goal1.side2.x+50)){
        player.y=player.oldy
        //console.log("Goal 1 Side 2")
    }
    if((player.y == goal1.side3.y || player.y+20 == goal1.side3.y) && (player.x+20 >= goal1.side3.x && player.x < goal1.side3.x+50)){
        player.y=player.oldy
        //console.log("Goal 1 Side 3")
    }
    if(player.x==goal1.side4.x && (player.y <= goal1.side1.y && player.y+20>= goal1.side1.y )){
        player.x=player.oldx
        //console.log("Goal 1 Top Posts")
    }
    if(player.x==goal1.side4.x && (player.y <= goal1.side1.y+150 && player.y+20>= goal1.side1.y+150 )){
        player.x=player.oldx
        //console.log("Goal 1 Bottom Posts")
    }

    if((player.x == goal2.side1.x-5 || player.x+20 == goal2.side1.x-5) && (player.y+20>=goal2.side1.y && player.y<=goal2.side1.y+150)){
        player.x=player.oldx
        //console.log("Goal 2 Side 1")
    }

    if((player.y == goal2.side2.y || player.y+20 == goal2.side2.y) && (player.x < goal2.side2.x && player.x+15 >= goal2.side2.x-55)){
        player.y=player.oldy
        //console.log("Goal 2 Side 2")
    }
    if((player.y == goal2.side3.y || player.y+20 == goal2.side3.y) && (player.x < goal2.side3.x && player.x+15 >= goal2.side3.x-55)){
        player.y=player.oldy
        //console.log("Goal 2 Side 3")
    }
    if(player.x+25==goal2.side4.x && (player.y <= goal2.side1.y && player.y+20>= goal2.side1.y )){
        player.x=player.oldx
        //console.log("Goal 2 Top Posts")
    }
    if(player.x+25==goal2.side4.x && (player.y <= goal2.side1.y+150 && player.y+20>= goal2.side1.y+150 )){
        player.x=player.oldx
        //console.log("Goal 2 Bottom Posts")
    }

    if((player2.x == goal1.side1.x || player2.x+20 == goal1.side1.x) && (player2.y+20>=goal1.side1.y && player2.y<=goal1.side1.y+150) ){
        player2.x=player2.oldx
        //console.log("Goal 1 Side 1")
    }
    if((player2.y == goal1.side2.y || player2.y+20 == goal1.side2.y) && (player2.x+20 >= goal1.side2.x && player2.x < goal1.side2.x+50)){
        player2.y=player2.oldy
        //console.log("Goal 1 Side 2")
    }
    if((player2.y == goal1.side3.y || player2.y+20 == goal1.side3.y) && (player2.x+20 >= goal1.side3.x && player2.x < goal1.side3.x+50)){
        player2.y=player2.oldy
        //console.log("Goal 1 Side 3")
    }
    if(player2.x==goal1.side4.x && (player2.y <= goal1.side1.y && player2.y+20>= goal1.side1.y )){
        player2.x=player2.oldx
        //console.log("Goal 1 Top Posts")
    }
    if(player2.x==goal1.side4.x && (player2.y <= goal1.side1.y+150 && player2.y+20>= goal1.side1.y+150 )){
        player2.x=player2.oldx
        //console.log("Goal 1 Bottom Posts")
    }

    if((player2.x == goal2.side1.x-5 || player2.x+20 == goal2.side1.x-5) && (player2.y+20>=goal2.side1.y && player2.y<=goal2.side1.y+150)){
        player2.x=player2.oldx
        //console.log("Goal 2 Side 1")
    }

    if((player2.y == goal2.side2.y || player2.y+20 == goal2.side2.y) && (player2.x < goal2.side2.x && player2.x+15 >= goal2.side2.x-55)){
        player2.y=player2.oldy
        //console.log("Goal 2 Side 2")
    }
    if((player2.y == goal2.side3.y || player2.y+20 == goal2.side3.y) && (player2.x < goal2.side3.x && player2.x+15 >= goal2.side3.x-55)){
        player2.y=player2.oldy
        //console.log("Goal 2 Side 3")
    }
    if(player2.x+25==goal2.side4.x && (player2.y <= goal2.side1.y+150 && player2.y+20>= goal2.side1.y+150 )){
        player2.x=player2.oldx
        //console.log("Goal 2 Bottom Posts")
    }
    if(player2.x+25==goal2.side4.x && (player2.y <= goal2.side1.y+150 && player2.y+20>= goal2.side1.y+150 )){
        player2.x=player2.oldx
        //console.log("Goal 2 Bottom Posts")
    }

}


