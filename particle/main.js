(function() {

    var H;
    var W;
    var canvas;
    var ctx;
    var particleCount = 1050;
    var particles = [];
    var colorArray = ["#F92672","#66D9EF", "#A6E22E", "#FD971F", "#FFF"];

    H = window.innerHeight * .99;
    W = window.innerWidth * .99;

    canvas = document.getElementById("particle");
    canvas.height = H;
    canvas.width = W;
    ctx = canvas.getContext("2d");

    //****************************
    // Constructor
    //****************************
    function Particle() {
        this.color = colorArray[ Math.floor((Math.random() * 5)) + 1 ];
        this.x = Math.random() * W;
        this.y = Math.random() * H;

        this.direction = {
            "x": -1 + Math.random() * 1,
            // "y": -1 + Math.random() * 1
        };

        this.vx = 1 * Math.random() + 1;
        this.vy = 1 * Math.random() + 1;

        this.radius = .1 * Math.random() + 1.5;
    };


    //****************************
    // Public Methods
    //****************************
    Particle.prototype.createId = function () {
        this.id = particles.indexOf(this);
    };

    Particle.prototype.move = function () {
        this.x += this.vx * this.direction.x;
        // this.y += this.vy * this.direction.y;
    };

    Particle.prototype.changeDirection = function (axis) {
        this.direction[axis] *= -1;
    };

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    };

    Particle.prototype.boundryCheck = function () {
        if (this.x >= W) {
            this.x = W;
            this.changeDirection("x");
        } else if (this.x <= 0) {
            this.x = 0;
            this.changeDirection("x");
        };

        if (this.y >= H) {
            this.y = H;
            this.changeDirection("y");
        } else if (this.y <=0) {
            this.y = 0;
            this.changeDirection("y");
        }
    };

    // Particle.prototype.collisionDetection = function() {
    //
    //     var index = 0;
    //     for (var i = 0; i < particleCount - 1; i++) {
    //         var preciseY = Math.floor(particles[i].y);
    //         var proximityY = Math.floor(particles[i].y) + 20.75;
    //
    //         var preciseX = Math.floor(particles[i].x);
    //         var proximityX = Math.floor(particles[i].x) + 20.75;
    //
    //         if ( particles[index].id === particles[i].id) {
    //             index++;
    //         }
    //         if ( particles[index].x <= proximityX && particles[index].x >= preciseX && particles[index].y <= proximityY && particles[index].y >= preciseY ) {
    //             particles[i].direction["x"] *= -1;
    //             particles[i].direction["y"] *= -1;
    //
    //             particles[index].direction["x"] *= -1;
    //             particles[index].direction["y"] *= -1;
    //
    //         }
    //     }
    // }

    //****************************
    // Private Methods
    //****************************
    function sameParticle() {

    }

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    }

    function createParticle() {
        for (var i = 0; i < particleCount; i++) {
            p = new Particle();
            particles.push(p);
            p.createId();
        }
    };

    function drawParticle() {
        for (var i = 0; i < particleCount; i++) {
            p = particles[i];
            p.draw();
        }
    };

    function init() {
        createParticle();
        drawParticle();
    }

    function updateParticle() {
        for (var i = 0; i < particleCount; i++) {
            p = particles[i];
            p.move();
            p.boundryCheck();
            //p.collisionDetection();
        }
    }

    function animateParticle() {
        clearCanvas();
        drawParticle();
        updateParticle();
        requestAnimationFrame(animateParticle);
    }

    init();
    requestAnimationFrame(animateParticle);

})();
