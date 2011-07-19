/**
 * @author Thodoris Tsiridis
 */

var canvas;
var context;

var stage;
var sun;
var sunGrad;
var venus;
var mercury;

var CANVAS_WIDTH        = 900;
var CANVAS_HEIGHT       = 600;

var t                   = 0;

/**
 * Initializing the stage
 */
var initialize = function() {

    //Create the canvas & the context
    canvas = document.getElementById('world');
    context = canvas.getContext('2d');

    //Create the first object that will call it stage
    stage = new STL.CanvasDisplayObject();
    stage.name = 'Stage';

    //Moving the stage
    stage.x = 0;
    stage.y = 0;

    sun = new STL.CanvasDisplayObject();
    sun.name = 'Sun';
    sun.x = CANVAS_WIDTH * 0.5;
    sun.y = CANVAS_HEIGHT * 0.5;
    
    //Create the gradient for the sun
    sunGrad = context.createRadialGradient(0,0,0,0,0,25);
    sunGrad.addColorStop(0, '#fdd86b');
    sunGrad.addColorStop(1, '#cc9900');

    sun.draw = function(){
        
        context.fillStyle = sunGrad;
        context.beginPath();
        context.arc(0, 0, 20, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();
        
    };
    
    stage.addChild(sun);

    mercury = new STL.CanvasDisplayObject();
    mercury.name = 'Mercury';
    mercury.x = CANVAS_WIDTH * 0.5;
    mercury.y = CANVAS_HEIGHT * 0.5;
    mercury.extra.radius = 60;
    mercury.extra.speed = 0.8;
    mercury.extra.degree = 0;
    mercury.extra.radian = 0;
    mercury.extra.planetPosition = {x:0, y:0};
    mercury.extra.planetSize = 4;
    mercury.extra.planetColor = '#999999';
        
    mercury.draw = function(){        
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, this.extra.radius, 0, Math.PI*2, true);
        context.closePath();
        context.stroke(); 
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(this.extra.planetPosition.x, this.extra.planetPosition.y, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();               
    };

    stage.addChild(mercury);

    //Venus
    venus = new STL.CanvasDisplayObject();
    venus.name = 'Venus';
    venus.x = CANVAS_WIDTH * 0.5;
    venus.y = CANVAS_HEIGHT * 0.5;
    venus.extra.radius = 90;
    venus.extra.speed = 0.3;
    venus.extra.degree = 0;
    venus.extra.radian = 0;
    venus.extra.planetPosition = {x:0, y:0};
    venus.extra.planetSize = 6;
    venus.extra.planetColor = '#bf8639';    
    
    venus.draw = function(){
        
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, this.extra.radius, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(this.extra.planetPosition.x, this.extra.planetPosition.y, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    stage.addChild(venus);

    //Venus
    earth = new STL.CanvasDisplayObject();
    earth.name = 'Earth';
    earth.x = CANVAS_WIDTH * 0.5;
    earth.y = CANVAS_HEIGHT * 0.5;
    earth.extra.radius = 120;
    earth.extra.speed = 0.2;
    earth.extra.degree = 0;
    earth.extra.radian = 0;
    earth.extra.planetPosition = {x:0, y:0};
    earth.extra.planetSize = 6;
    earth.extra.planetColor = '#0066cc';    
    
    earth.draw = function(){
        
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, this.extra.radius, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(this.extra.planetPosition.x, this.extra.planetPosition.y, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    stage.addChild(earth);
    
    //Set the canvas width
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    //Start drawing
    setInterval(draw, 1000/60);

};
var draw = function() {
    t++;
    //Clear the canvas
    canvas.width = CANVAS_WIDTH;
     
    mercury.extra.degree += mercury.extra.speed;
    mercury.extra.radian = (mercury.extra.degree/180)*Math.PI;    
    mercury.extra.planetPosition.x = Math.cos(mercury.extra.radian) * mercury.extra.radius;
    mercury.extra.planetPosition.y = -Math.sin(mercury.extra.radian) * mercury.extra.radius;

    venus.extra.degree += venus.extra.speed;
    venus.extra.radian = (venus.extra.degree/180)*Math.PI;
    venus.extra.planetPosition.x = Math.cos(venus.extra.radian) * venus.extra.radius;
    venus.extra.planetPosition.y = -Math.sin(venus.extra.radian) * venus.extra.radius;    
    
    earth.extra.degree += earth.extra.speed;
    earth.extra.radian = (earth.extra.degree/180)*Math.PI;
    earth.extra.planetPosition.x = Math.cos(earth.extra.radian) * earth.extra.radius;
    earth.extra.planetPosition.y = -Math.sin(earth.extra.radian) * earth.extra.radius;     
    
    //Update the stage
    stage.update(context);

};
initialize();