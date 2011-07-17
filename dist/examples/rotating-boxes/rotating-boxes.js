/**
 * @author Thodoris Tsiridis
 */

var canvas;
var context;
var stage;

var rect;

var rect2;
var rect3;
var rect4;
var rect5;

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
    stage = new STL.CanvasDisplayObject(context);
    stage.name = 'Stage';

    //Moving the stage
    stage.x = 0;
    stage.y = 0;

    //Creating a new display object
    rect = new STL.CanvasDisplayObject(context);
    rect.name = 'Rectangular';
    rect.y = 300;
        
    //Scaling the new display object
    rect.scaleX = 1.5;
    rect.scaleY = 1.5;
    
    //Overwrite the draw function of the display object
    rect.draw = function() {
        context.fillStyle = "rgb(200,0,0)";
        context.fillRect(0,0, 100, 100);
    };
    //Creating a new display object
    rect2 = new STL.CanvasDisplayObject(context);
    rect2.name = 'Purple Rectangular';
    
    //Positioning and scaling the new object
    rect2.x = 0;
    rect2.y = 0;
    rect2.scaleX = 1.5;
    rect2.scaleY = 1.5;

    //Overwrite the draw function of the display object
    rect2.draw = function() {
        context.fillStyle = "rgb(150,0,150)";
        context.fillRect(-13, -13, 26, 26);
    };
    //Creating a new display object
    rect3 = new STL.CanvasDisplayObject(context);
    rect3.name = 'Blue Rectangular';

    //Positioning and scaling the new object
    rect3.x = 100;
    rect3.y = 0;

    //Overwrite the draw function of the display object
    rect3.draw = function() {
        context.fillStyle = "rgb(0,0,255)";
        context.fillRect(-13, -13, 26, 26);
    };
    //Creating a new display object
    rect4 = new STL.CanvasDisplayObject(context);
    rect4.name = 'Dark Green Rectangular';

    //Positioning and scaling the new object
    rect4.x = 0;
    rect4.y = 100;

    //Overwrite the draw function of the display object
    rect4.draw = function() {
        context.fillStyle = "rgb(50,100,20)";
        context.fillRect(-13, -13, 26, 26);
    };
    //Creating a new display object
    rect5 = new STL.CanvasDisplayObject(context);
    rect5.name = 'Green Rectangular';

    //Positioning and scaling the new object
    rect5.x = 100;
    rect5.y = 100;

    //Overwrite the draw function of the display object
    rect5.draw = function() {
        context.fillStyle = "rgb(0,255,0)";
        context.fillRect(-13, -13, 26, 26);
    };
    //Add the first object into the stage
    stage.addChild(rect);

    //Add all the other object into the first object
    rect.addChild(rect2);
    rect.addChild(rect3);
    rect.addChild(rect4);
    rect.addChild(rect5);

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

    //Move the first object
    rect.x = 400 + (-Math.cos(t * Math.PI / 180) * 0.5) * 500;

    //Rotate all the objects
    rect.rotation += 0.01;
    rect2.rotation += 0.1;
    rect2.scaleX = rect2.scaleY = -Math.cos(t * Math.PI / 180) + 0.5;
    rect3.rotation += 0.1;
    rect3.scaleX = rect3.scaleY = -Math.cos(t * Math.PI / 180) * 2 + 0.5;
    rect4.rotation += 0.1;
    rect4.scaleX = rect4.scaleY = -Math.cos(t * Math.PI / 180) * 1.5 + 0.5;
    rect5.rotation += 0.1;
    rect5.scaleX = rect5.scaleY = -Math.cos(t * Math.PI / 180) * 3 + 0.5;

    //Update the stage
    stage.update();

};
initialize();