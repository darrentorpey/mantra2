(function() {
'use strict';

var Mantra = window.Mantra,
    document = window.document;

function Game() {}

Game.prototype.init = function() {
    this._canvas = Mantra.Canvas.init();

    document.body.appendChild( this._canvas.getCanvas() );

    this._canvas.setBackground( 'black' );

    this._canvas.setDimensions( 480, 300 );
};

Game.prototype.getCanvas = function() {
    return this._canvas;
};

Game.init = function() {
    var game = new Game();

    game.init();

    if ( !window.theGame ) {
        window.theGame = game;
    }

    return game;
};

window.Mantra.Game = Game;

})();
