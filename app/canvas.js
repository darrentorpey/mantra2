(function() {
'use strict';

var document = window.document;

function MantraCanvas() {
    this.d_canvas = MantraCanvas.create();

    this.context = this.d_canvas.getContext('2d');
}

MantraCanvas.prototype.getCanvas = function() {
    return this.d_canvas;
};

MantraCanvas.create = function() {
    return document.createElement( 'canvas' );
};

MantraCanvas.init = function() {
    var canvas = new MantraCanvas();

    document.body.appendChild( canvas.getCanvas() );
};

window.Mantra.Canvas = MantraCanvas;

})();
