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

Tile.prototype.draw = function ( ctx ) {
    var offContext, left, top, size, width, height;

    if ( _.isUndefined( ctx ) ) {
        ctx = window.theGame.getCanvas().getContext();
    }

    left = 0;
    top = 0;
    width = this._w;   
    height = this._h;   

    offContext = this.getOffCanvas().getContext(); // the offscreen canvas context

    // draw border if needed
    if ( this.borderWidth > 0 ) {
        console.log('border');
        offContext.fillStyle = this.borderColor;

        offContext.fillRect( 0, 0, this._w, this._h );

        left += this.borderWidth;
        top += this.borderWidth;

        width -= ( this.borderWidth + this.borderWidth );
        height -= ( this.borderWidth + this.borderWidth );
    }

    if ( this.dirty ) {
        offContext.fillStyle = this.dirty ? this.colorNow : 'white';
    }

    offContext.fillRect( left, top, width, height );

    // if ( this.glyph > 0 ) {
    //     offContext.fillStyle = this.glyphColor;
    //     offContext.fillText( this.glyphStr, PS.Grid.glyphX, PS.Grid.glyphY );
    // }

    // Blit offscreen canvas to main canvas
    ctx.drawImage( this.getOffCanvas().getCanvas(), this._xLeft, this._yTop );
};

Tile.create = function() {
    return new Tile();
};

window.Mantra.Tile = Tile;

})();

