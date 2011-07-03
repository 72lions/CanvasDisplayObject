This is a javascript library that simulates a Display List in Canvas

<code>

    var canvas = document.getElementById('world');
    var context = canvas.getContext('2d');
    
    //Create the stage
    var stage = new STL.CanvasDisplayObject(context);
    
    //Create an image object
    var image = new STL.CanvasDisplayObject(context);
    image.x = 50;
    image.y = 50;
    image.rotation = 45;
    //Add it to the stage
    stage.addChild(image);

    //Ovewrite draw function of image

    //Add logic for rendering the stage at each update
</code>