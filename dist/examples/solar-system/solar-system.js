/**
 * @author Thodoris Tsiridis
 */

var canvas;
var context;

var ring1, ring2, ring3, ring4, ring5, ring6, ring7, ring8, ring9, ring10;

var stage;
var sun;
var sunGrad;
var venus;
var mercury;
var moon;
var earth;
var mars;
var jupiter;
var saturn;
var titan;
var phoebe;
var pandora;
var uranus;
var neptune;
var pluto;

var planets = [];

var CANVAS_WIDTH        = 900;
var CANVAS_HEIGHT       = 700;

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
    stage.x = 0;//CANVAS_WIDTH * 0.5;
    stage.y = 0;//CANVAS_HEIGHT * 0.5;

    sun = new STL.CanvasDisplayObject();
    sun.name = 'Sun';
    sun.x = CANVAS_WIDTH * 0.5;
    sun.y = CANVAS_HEIGHT    * 0.5;
    
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

    //Ring 1
    ring1 = new STL.CanvasDisplayObject();
    ring1.name = 'Ring 1';
    ring1.x = CANVAS_WIDTH * 0.5;
    ring1.y = CANVAS_HEIGHT * 0.5; 
    ring1.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 60, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring1);
    
    //Ring 2
    ring2 = new STL.CanvasDisplayObject();
    ring2.name = 'Ring 2';
    ring2.x = CANVAS_WIDTH * 0.5;
    ring2.y = CANVAS_HEIGHT * 0.5; 
    ring2.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 90, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring2);    
    
    
    //Ring 3
    ring3 = new STL.CanvasDisplayObject();
    ring3.name = 'Ring 3';
    ring3.x = CANVAS_WIDTH * 0.5;
    ring3.y = CANVAS_HEIGHT * 0.5; 
    ring3.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 120, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring3); 
    
    //Ring 4
    ring4 = new STL.CanvasDisplayObject();
    ring4.name = 'Ring 4';
    ring4.x = CANVAS_WIDTH * 0.5;
    ring4.y = CANVAS_HEIGHT * 0.5; 
    ring4.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 150, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring4);     
    
    
    //Ring 5
    ring5 = new STL.CanvasDisplayObject();
    ring5.name = 'Ring 5';
    ring5.x = CANVAS_WIDTH * 0.5;
    ring5.y = CANVAS_HEIGHT * 0.5; 
    ring5.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 150, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring5);

    //Ring 6
    ring6 = new STL.CanvasDisplayObject();
    ring6.name = 'Ring 6';
    ring6.x = CANVAS_WIDTH * 0.5;
    ring6.y = CANVAS_HEIGHT * 0.5; 
    ring6.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 180, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring6);
        
 
    //Ring 7
    ring7 = new STL.CanvasDisplayObject();
    ring7.name = 'Ring 7';
    ring7.x = CANVAS_WIDTH * 0.5;
    ring7.y = CANVAS_HEIGHT * 0.5; 
    ring7.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 210, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring7);
    
    //Ring 8
    ring8 = new STL.CanvasDisplayObject();
    ring8.name = 'Ring 8';
    ring8.x = CANVAS_WIDTH * 0.5;
    ring8.y = CANVAS_HEIGHT * 0.5; 
    ring8.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 240, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring8);

    //Ring 9
    ring9 = new STL.CanvasDisplayObject();
    ring9.name = 'Ring 9';
    ring9.x = CANVAS_WIDTH * 0.5;
    ring9.y = CANVAS_HEIGHT * 0.5; 
    ring9.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 270, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring9);
  
    //Ring 10
    ring10 = new STL.CanvasDisplayObject();
    ring10.name = 'Ring 10';
    ring10.x = CANVAS_WIDTH * 0.5;
    ring10.y = CANVAS_HEIGHT * 0.5; 
    ring10.draw = function(){
        context.strokeStyle = "rgba(62,76,129,0.8)";
        context.lineWidth = 2;
        context.beginPath();
        context.arc(0, 0, 310, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();  
    }
    
    stage.addChild(ring10);
    
    mercury = new STL.CanvasDisplayObject();
    mercury.name = 'Mercury';
    mercury.x = CANVAS_WIDTH * 0.5;
    mercury.y = CANVAS_HEIGHT * 0.5;
    mercury.extra.radius = 60;
    mercury.extra.speed = 0.8;
    mercury.extra.degree = Math.random() * 1000;
    mercury.extra.radian = 0;
    mercury.extra.planetSize = 4;
    mercury.extra.planetColor = '#999999';
    mercury.extra.isSatelite = false;

    mercury.draw = function(){
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();               
    };

    planets.push(mercury);
    stage.addChild(mercury);

    //Venus
    venus = new STL.CanvasDisplayObject();
    venus.name = 'Venus';
    venus.x = CANVAS_WIDTH * 0.5;
    venus.y = CANVAS_HEIGHT * 0.5;
    venus.extra.radius = 90;
    venus.extra.speed = 0.3;
    venus.extra.degree = Math.random() * 1000;
    venus.extra.radian = 0;
    venus.extra.planetSize = 6;
    venus.extra.planetColor = '#bf8639';    
    venus.extra.isSatelite = false;
    
    venus.draw = function(){

        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(venus);
    stage.addChild(venus);

    //Earth
    earth = new STL.CanvasDisplayObject();
    earth.name = 'Earth';
    earth.x = CANVAS_WIDTH * 0.5;
    earth.y = CANVAS_HEIGHT * 0.5;
    earth.extra.radius = 120;
    earth.extra.speed = 0.2;
    earth.extra.degree = Math.random() * 1000;
    earth.extra.radian = 0;
    earth.extra.planetSize = 6;
    earth.extra.planetColor = '#0066cc';    
    earth.extra.isSatelite = false;
    
    earth.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(earth);
    stage.addChild(earth);
    
    //Moon
    moon = new STL.CanvasDisplayObject();
    moon.name = 'Moon';
    moon.x = 0;
    moon.y = 0;
    moon.extra.radius = 13;
    moon.extra.speed = 3;
    moon.extra.degree = Math.random() * 1000;
    moon.extra.radian = 0;
    moon.extra.planetSize = 2;
    moon.extra.planetColor = '#cccccc';
    moon.extra.isSatelite = true;
    
    moon.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(moon);
    earth.addChild(moon);    


    //Mars
    mars = new STL.CanvasDisplayObject();
    mars.name = 'Mars';
    mars.x = CANVAS_WIDTH * 0.5;
    mars.y = CANVAS_HEIGHT * 0.5;
    mars.extra.radius = 150;
    mars.extra.speed = 0.1;
    mars.extra.degree = Math.random() * 1000;
    mars.extra.radian = 0;
    mars.extra.planetSize = 6;
    mars.extra.planetColor = '#aa4200';
    mars.extra.isSatelite = false;
    
    mars.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(mars);
    stage.addChild(mars);
    
    
    //Jupiter
    jupiter = new STL.CanvasDisplayObject();
    jupiter.name = 'Jupiter';
    jupiter.x = CANVAS_WIDTH * 0.5;
    jupiter.y = CANVAS_HEIGHT * 0.5;
    jupiter.extra.radius = 180;
    jupiter.extra.speed = 0.06;
    jupiter.extra.degree = Math.random() * 1000;
    jupiter.extra.radian = 0;
    jupiter.extra.planetSize = 7;
    jupiter.extra.planetColor = '#e0ae6f';
    jupiter.extra.isSatelite = false;
    
    jupiter.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(jupiter);
    stage.addChild(jupiter);
    
    //Saturn
    saturn = new STL.CanvasDisplayObject();
    saturn.name = 'Saturn';
    saturn.x = CANVAS_WIDTH * 0.5;
    saturn.y = CANVAS_HEIGHT * 0.5;
    saturn.extra.radius = 210;
    saturn.extra.speed = 0.03;
    saturn.extra.degree = Math.random() * 1000;
    saturn.extra.radian = 0;
    saturn.extra.planetSize = 7;
    saturn.extra.planetColor = '#f0e38b';
    saturn.extra.isSatelite = false;
    
    saturn.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(saturn);
    stage.addChild(saturn);
    
    //Titan
    titan = new STL.CanvasDisplayObject();
    titan.name = 'Titan';
    titan.x = CANVAS_WIDTH * 0.5;
    titan.y = CANVAS_HEIGHT * 0.5;
    titan.extra.radius = 13;
    titan.extra.speed = 1;
    titan.extra.degree = Math.random() * 1000;
    titan.extra.radian = 0;
    titan.extra.planetSize = 1;
    titan.extra.planetColor = '#ffffff';
    titan.extra.isSatelite = true;
    
    titan.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(titan);
    saturn.addChild(titan);
    
    //Phoebe
    phoebe = new STL.CanvasDisplayObject();
    phoebe.name = 'Phoebe';
    phoebe.x = CANVAS_WIDTH * 0.5;
    phoebe.y = CANVAS_HEIGHT * 0.5;
    phoebe.extra.radius = 15;
    phoebe.extra.speed = 1.3;
    phoebe.extra.degree = Math.random() * 1000;
    phoebe.extra.radian = 0;
    phoebe.extra.planetSize = 1;
    phoebe.extra.planetColor = '#ffffff';
    phoebe.extra.isSatelite = true;
    
    phoebe.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(phoebe);
    saturn.addChild(phoebe);
    
    planets.push(titan);
    saturn.addChild(titan);
    
    //Phoebe
    pandora = new STL.CanvasDisplayObject();
    pandora.name = 'Phoebe';
    pandora.x = CANVAS_WIDTH * 0.5;
    pandora.y = CANVAS_HEIGHT * 0.5;
    pandora.extra.radius = 18;
    pandora.extra.speed = 1;
    pandora.extra.degree = Math.random() * 1000;
    pandora.extra.radian = 0;
    pandora.extra.planetSize = 1;
    pandora.extra.planetColor = '#ffffff';
    pandora.extra.isSatelite = true;
    
    pandora.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(pandora);
    saturn.addChild(pandora);      
     
     
    //Uranus
    uranus = new STL.CanvasDisplayObject();
    uranus.name = 'Uranus';
    uranus.x = CANVAS_WIDTH * 0.5;
    uranus.y = CANVAS_HEIGHT * 0.5;
    uranus.extra.radius = 240;
    uranus.extra.speed = 0.05;
    uranus.extra.degree = Math.random() * 1000;
    uranus.extra.radian = 0;
    uranus.extra.planetSize = 7;
    uranus.extra.planetColor = '#82b3d1';
    uranus.extra.isSatelite = false;
    
    uranus.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(uranus);
    stage.addChild(uranus); 

    //Neptune
    neptune = new STL.CanvasDisplayObject();
    neptune.name = 'Neptune';
    neptune.x = CANVAS_WIDTH * 0.5;
    neptune.y = CANVAS_HEIGHT * 0.5;
    neptune.extra.radius = 270;
    neptune.extra.speed = 0.03;
    neptune.extra.degree = Math.random() * 1000;
    neptune.extra.radian = 0;
    neptune.extra.planetSize = 8;
    neptune.extra.planetColor = '#82b3d1';
    neptune.extra.isSatelite = false;
    
    neptune.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(neptune);
    stage.addChild(neptune);     

    //Pluto
    pluto = new STL.CanvasDisplayObject();
    pluto.name = 'Pluto';
    pluto.x = CANVAS_WIDTH * 0.5;
    pluto.y = CANVAS_HEIGHT * 0.5;
    pluto.extra.radius = 310;
    pluto.extra.speed = 0.03;
    pluto.extra.degree = Math.random() * 1000;
    pluto.extra.radian = 0;
    pluto.extra.planetSize = 6;
    pluto.extra.planetColor = '#666666';
    pluto.extra.isSatelite = false;
    
    pluto.draw = function(){
        
        context.fillStyle = this.extra.planetColor;
        context.beginPath();
        context.arc(0, 0, this.extra.planetSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();         
    };
    
    planets.push(pluto);
    stage.addChild(pluto);        
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
    
    var d = 0;
    
    for( d = 0; d < planets.length; d++){
        
        var offsetX = 0;
        var offsetY = 0;
        
        planets[d].extra.degree += planets[d].extra.speed;
        planets[d].extra.radian = (planets[d].extra.degree/180)*Math.PI;
        
        if(planets[d].extra.isSatelite === false){
            offsetX = CANVAS_WIDTH * 0.5;
            offsetY = CANVAS_HEIGHT * 0.5;
        } else {
            offsetX = 0;
            offsetY = 0;
        }
        
        planets[d].x = (Math.cos(planets[d].extra.radian) * planets[d].extra.radius) + offsetX;
        planets[d].y = (-Math.sin(planets[d].extra.radian) * planets[d].extra.radius) + offsetY;
        
        offsetX = null;
        offsetY = null;        
    }
    
    d = null;   
    
    //Update the stage
    stage.update(context);

};
initialize();