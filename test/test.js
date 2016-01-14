'use strict';

// MODULES //

var test = require( 'tape' );
var SMALLEST_FLOAT64 = require( './../lib' );


// TESTS //

test( 'main export is an object', function test( t ) {
	t.ok( typeof SMALLEST_FLOAT64 === 'object', 'main export is an object' );
	t.end();
});

test( 'the VALUE property should correspond to the smallest normalized double-precision floating-point number', function test( t ) {
	t.equal( SMALLEST_FLOAT64.VALUE, 2.2250738585072014e-308, 'smallest normalized value' );
	t.end();
});

test( 'the DENORMALIZED property should correspond to the smallest denormalized double-precision floating-point number', function test( t ) {
	t.equal( SMALLEST_FLOAT64.DENORMALIZED, 4.940656458412465e-324, 'smallest denormalized value' );
	t.end();
});

test( 'the object properties are read-only', function test( t ) {
	t.throws( foo, Error, 'VALUE read-only' );
	t.throws( bar, Error, 'DENORMALIZED read-only' );
	t.end();

	function foo() {
		SMALLEST_FLOAT64.VALUE = null;
	}
	function bar() {
		SMALLEST_FLOAT64.DENORMALIZED = 0;
	}
});
