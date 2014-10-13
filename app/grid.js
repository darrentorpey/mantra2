(function() {
'use strict';

var Mantra = window.Mantra;

function Grid( width, height, tileWidth, tileHeight ) {
    this.width = width;
    this.height = height;

    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
}

Grid.prototype.eachTile = function(callback) {
    for ( var x = 0; x < this.width; x++ ) {
        for ( var y = 0; y < this.height; y++ ) {
            callback( x * this.tileWidth, y * this.tileHeight );
        }
    }
};

window.Mantra.Grid = Grid;

})();
