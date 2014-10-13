(function() {
'use strict';

var Mantra = window.Mantra,
    Grid = Mantra.Grid,
    document = window.document;

function Game() {}

Game.prototype.init = function() {
    this._canvas = Mantra.Canvas.init();

    document.body.appendChild( this._canvas.getCanvas() );

    this._canvas.setBackground( 'black' );

    this._canvas.setDimensions( 480, 320 );
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

    var grid = new Grid( 8, 5, 64, 64 );

    var tile = new Mantra.Tile( { x: 0, y: 0, width: 64, height: 64, borderWidth: 1 } );

    tile.draw();

    // grid.eachTile( function( x, y ) {
        // var tile = new Mantra.Tile( { x: x, y: y, width: 64, height: 64, borderWidth: 1 } );

        // tile.draw();
    // });

    return game;
};

window.Mantra.Game = Game;

})();
