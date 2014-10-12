(function() {
'use strict';

var document = window.document;
var Mantra = window.Mantra;

function Tile( xPos, yPos, width, height ) {
    height = height || width;

    _.extend( this, {
        _xLeft: xPos,
        _xRight: xPos + width,
        _yTop: yPos,
        _yBottom: yPos - height,
        _w: width,
        _h: height,

        borderColor: 'gray',
        borderWidth: 4,

        dirty: true,
        colorNow: 'white'
    });

    this._offCanvas = Mantra.Canvas.init();
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
    if ( !this.borderWidth ) {
        return;
    }

    var offContext = this.getOffCanvas().getContext();

    offContext.fillStyle = this.borderColor;

    offContext.fillRect( 0, 0, this._w, this._h );
};

Tile.create = function() {
    return new Tile();
};

window.Mantra.Tile = Tile;

})();

