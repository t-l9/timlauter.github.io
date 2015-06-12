(function() {

    var H;
    var W;
    var canvas;
    var ctx;
    var particles = [];

    H = window.innerHeight * .99;
    W = window.innerWidth * .99;

    canvas = document.getElementById("particle");
    canvas.height = H;
    canvas.width = W;
    ctx = canvas.getContext("2d");

    //****************************
    // Constructor
    //****************************
    this.Particle = function() {

        var defaults = {
            particleCount : 1000,
            colorList: ["#F92672","#66D9EF", "#A6E22E", "#FD971F", "#FFF"]
        };

        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.direction = {
            "x": -1 + Math.random() * 1,
            "y": -1 + Math.random() * 1
        };
        this.vx = 1 * Math.random() + 1;
        this.vy = 1 * Math.random() + 1;
        this.radius = 0.1 * Math.random() + 1.5;

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        } else {
            this.options = defaults;
        }

        this.color = this.options.colorList[Math.floor((Math.random() * this.options.colorList.length)) ];

    };

    //****************************
    // Public Methods
    //****************************
    Particle.prototype.move = function() {
        this.x += this.vx * this.direction.x;
        this.y += this.vy * this.direction.y;
    };

    Particle.prototype.changeDirection = function() {
            this.direction[axis] *= -1;
    };

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
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

    //****************************
    // Private Methods
    //****************************
    function extendDefaults(defaults, args) {
        for ( var i in args ) {
            if ( args.hasOwnProperty(i) ) {
                defaults[i] = args[i];
            }
        }
        return defaults;
    };

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    };

    function createParticle() {
        console.log(Particle.defaults)
    };

    createParticle();

})();
