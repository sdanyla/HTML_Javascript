var c = document.querySelector('canvas');
var ctx = getContext('2d');
var timer = requestAnimationFrame(main);


function GameObject(){
    this.randius = Math.random()*2+1;
    this.color = " rgb (255,255,255)" ;
    this.x = Math.random() * 800;
    this.y = Math.random() * 600;
    this.vx = 0;
    this.vy = this.randius;

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this,x, this.y, this.randius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();

    }
}

this.move = function(){
    this.x +=this.vx
    this.y += this.vy
}
    




var particles = [];




 /*   funtion main(){
        for(var i = )
    }*/