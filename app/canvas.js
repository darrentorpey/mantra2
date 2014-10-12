(function() {
'use strict';

var document = window.document;

function MantraCanvas() {
    this.d_canvas = MantraCanvas.create();

    this._context = this.d_canvas.getContext('2d');
}

MantraCanvas.prototype.getCanvas = function() {
    return this.d_canvas;
};

MantraCanvas.prototype.getContext = function() {
    return this._context;
};

MantraCanvas.prototype.setBackground = function( background ) {
    this.getCanvas().style.backgroundColor = background;
};

MantraCanvas.prototype.fillColor = function( color ) {
    this.getContext().fillStyle = color;

    return this;
};

MantraCanvas.prototype.fillRect = function() {
    this.getContext().fillRect.apply( this.getContext(), arguments );

    return this;
};

MantraCanvas.create = function() {
    return document.createElement( 'canvas' );
};

MantraCanvas.init = function() {
    return new MantraCanvas();
};

window.Mantra.Canvas = MantraCanvas;

})();
