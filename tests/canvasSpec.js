describe('Mantra Canvas', function() {
    'use strict';

    var Mantra = window.Mantra;

    it( 'exists', function() {
        expect( Mantra.Canvas ).toBeDefined();
    });

    describe( '.create', function() {
        it( 'creates a canvas element', function() {
            spyOn( window.document, 'createElement' );

            Mantra.Canvas.create();

            expect( window.document.createElement ).toHaveBeenCalled();
        });
    });
});
