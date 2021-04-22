var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = reguestAnimationFrame(main);

var galaxy = new Image()
galaxy.src = "images/galaxy.png"
galaxy.onload = function(){
    main()
}

var mario = new Image()
mario.src = "images/mario.png"
mario.onload = function(){
    main()
}

function main(){
    ctx.clearRect(0,0,canvas.wiedth, canvas.height)
    //draw images
    ctx.drawImages(galaxy, 0,0,800,600)
    ctx.drawImages(mario,10,canvas,height/2,20,80)
    console.log("working")

    //update position
    x += 1
    if(x > canvas.width + 20){
        x = 20;
    }
    timer = requestAnimationFrame(main)
}