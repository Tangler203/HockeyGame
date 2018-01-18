canvas = document.getElementById('gameCanvas')

goal1 = {
    side1: {x: 75, y: canvas.height/2.5+2, w: 5, h: 150},
    side2: {x: 75, y: canvas.height/2.5+2, w: 50, h: 5},
    side3: {x: 75, y:canvas.height/2.5+152, w: 50, h: 5},
    side4: {x: 120, y: canvas.height/2.5+7, w: 5, h: 145}
}

goal2 = {
    side1: {x: canvas.width-74, y: canvas.height/2.5+2, w: -5, h: 150},
    side2: {x: canvas.width-74, y: canvas.height/2.5+2, w: -50, h: 5},
    side3: {x: canvas.width-74, y: canvas.height/2.5+152, w: -50, h: 5},
    side4: {x: canvas.width-119, y: canvas.height/2.5+7, w: -5, h: 145}
}

drawField =()=>{
    var canvas = document.getElementById("gameCanvas")
    var ctx = canvas.getContext("2d")

    //Clear the field first
    ctx.clearRect(0,0,canvas.width*2,canvas.height*2)

    //build the goals

    //Start with the goal on the left
    //The blue sides of the goals that can't be entered
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.rect(goal1.side1.x, goal1.side1.y, goal1.side1.w, goal1.side1.h)
    ctx.rect(goal1.side2.x, goal1.side2.y, goal1.side2.w, goal1.side2.h)
    ctx.rect(goal1.side3.x, goal1.side3.y, goal1.side3.w, goal1.side3.h)
    ctx.fill()
    ctx.closePath()


    // The red side that can be entered
    ctx.beginPath()
    ctx.rect(goal1.side4.x, goal1.side4.y ,goal1.side4.w, goal1.side4.h)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()


    // The goal on the right
    // The blue sided that can't be entered
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.rect(goal2.side1.x, goal2.side1.y, goal2.side1.w, goal2.side1.h)
    ctx.rect(goal2.side2.x, goal2.side2.y, goal2.side2.w, goal2.side2.h)
    ctx.rect(goal2.side3.x, goal2.side3.y, goal2.side3.w, goal2.side3.h)
    ctx.fill()
    ctx.closePath()

    // The red side that can be enetered
    ctx.beginPath()
    ctx.rect(goal2.side4.x, goal2.side4.y ,goal2.side4.w, goal2.side4.h)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()


    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(gameCanvas.width/2,4);
    ctx.lineTo(gameCanvas.width/2,1000);
    ctx.stroke();
    
    // set line color
    ctx.strokeStyle = '#000000';
    ctx.stroke();



    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(gameCanvas.width/4,4);
    ctx.lineTo(gameCanvas.width/4,1000);
    ctx.stroke();
    
    // set line color
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(gameCanvas.width/4*3,4);
    ctx.lineTo(gameCanvas.width/4*3,1000);
    ctx.stroke();
    
    // set line color
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // set the circle

    ctx.beginPath();
    ctx.arc(gameCanvas.width/2,gameCanvas.height/2,100,0,2*Math.PI);
    ctx.strokeStyle = '#B22222';
    ctx.stroke();

    
}
