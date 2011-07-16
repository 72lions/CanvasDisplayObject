/**
 *
 * Simulates a display object just like in AS3
 *
 * @author Thodoris Tsiridis
 */

var STL                     = STL || {};
STL.CanvasDisplayObject     = function(context) {

    var _children           = [],
    _ctx                    = context;

    /**
     * The name of the display object
     */
    this.name               = '';
    this.x                  = 0;
    this.y                  = 0;
    this.rotation           = 0;
    this.scaleX             = 1;
    this.scaleY             = 1;
    this._originX           = 0;
    this._originY           = 0;
    this._originRotation    = 0;
    this._originScaleX      = 1;
    this._originScaleY      = 1; 

    /**
     * The parent object
     */
    this.parent             = null;

    /**
     * ---------------------------------
     * PUBLIC FUNCTIONS
     * ---------------------------------
     */

    /**
     * Initializes the class
     */
    this.initialize = function() {

    };
    /**
     * Adds a child to the display object
     *
     * @param {CanvasDisplayObject} child The display object to add as a child
     */
    this.addChild = function(child) {
        //console.log('Adding child', child.name)
        //Check if the child doesn't already exist
        if (_children.indexOf(child) === - 1) {

            //Check if the child already has a parent
            if( child.parent !== null ) {

                //If it already has a parent then remove it from it's parent
                child.parent.removeChild( child );

            }

            //Set the parent of the child
            child.parent = this;
            child._originX = this._originX + this.x;
            child._originY = this._originY + this.y;
            child._originRotation = this._originRotation + this.rotation;
            
            //Push the child in the array
            _children.push( child );
            
        }

    };
    /**
     * Removes a child
     *
     * @param {CanvasDisplayObject} child  The display object to remove
     */
    this.removeChild = function(child) {

        var childIndex = _children.indexOf( child );

        //Check the child index
        if (  childIndex !== - 1 ) {

            child.parent = null;

            //Remove the child from the children array
            _children.splice( childIndex, 1 );

        }
    };

    /**
     * Returns an array with all the children
     *
     * @returns {[CanvasDisplayObject]} The array with all the children
     */
    this.getChildren = function() {
        return _children;
    };
    /**
     * ---------------------------------
     * PRIVATE FUNCTIONS
     * ---------------------------------
     */
    this._update = function() {
        
        //Save the current translation, rotation
        _ctx.save();

        //Translate Scale and Rotate        
        _ctx.translate(this.x, this.y);
        _ctx.scale(this.scaleX,this.scaleY);
        _ctx.rotate(this.rotation);
        
        this.draw();
        
        //Invoke the update function for each child
        for(var d = 0; d < _children.length; d++) {
           
            _children[d]._update();            
        }

        //Restore the translation, rotation
        _ctx.restore();
        
        d = null;
    };
    
    this.initialize();
};

/**
 * Generic function for overwritting and adding the your code
 */
STL.CanvasDisplayObject.prototype.draw = function(){

}
