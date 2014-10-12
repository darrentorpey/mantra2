(function() {
'use strict';

var Mantra = window.Mantra;
var canvas;

function Game() {}

Game.prototype.init = function() {
    this._canvas = Mantra.Canvas.init();

    document.body.appendChild( this._canvas.getCanvas() );

    this._canvas.setBackground( 'black' );
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
