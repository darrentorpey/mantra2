(function() {
'use strict';

var document = window.document;
var Mantra = window.Mantra;

function Tile( params ) {
    _.extend( this, {
        _xLeft:   params.x,
        _xRight:  params.x + params.width,
        _yTop:    params.y,
        _yBottom: params.y + params.height,
        _w:       params.width,
        _h:       params.height || params.width,

        borderColor: params.borderColor || 'gray',
        borderWidth: params.borderWidth,

        dirty: true,
        colorNow: 'white'
    });

    _.defaults( this, {
        borderWidth: 4,
    });

    this._offCanvas = Mantra.Canvas.init();

    this._offCanvas.setDimensions( this._w, this._h );

}

Tile.prototype.getOffCanvas = function ( ctx ) {
    return this._offCanvas;
};

Tile.prototype.defaultDrawContext = function () {
    return window.theGame.getCanvas().getContext();
};

Tile.prototype.draw = function ( targetContext ) {
    this.drawBorder();

    this.drawInner();

    // Blit offscreen canvas to main canvas
    targetContext = targetContext || this.defaultDrawContext();
    targetContext.drawImage( this.getOffCanvas().getCanvas(), this._xLeft, this._yTop );
};

Tile.prototype.drawInner = function() {
    var left = 0,
        top = 0,
        width = this._w,
        height = this._h,
        offContext = this.getOffCanvas().getContext();

    if ( this.borderWidth > 0 ) {
        left += this.borderWidth;
        top += this.borderWidth;

        width -= ( this.borderWidth + this.borderWidth );
        height -= ( this.borderWidth + this.borderWidth );
    }

    if ( this.dirty ) {
        offContext.fillStyle = this.dirty ? this.colorNow : 'white';
    }

    offContext.fillRect( left, top, width, height );
};

Tile.prototype.drawBorder = function() {
    console.log('this.borderWidth', this.borderWidth);
    if ( !this.borderWidth ) {
        return;
    }

    this.getOffCanvas()
        .fillColor( this.borderColor )
        .fillRect( 0, 0, this._w, this._h );
};

Tile.create = function() {
    return new Tile();
};

window.Mantra.Tile = Tile;

})();

