var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var sequence = require( 'run-sequence' );

requireDir( './gulp/tasks' );

// Pack everything up for new release
gulp.task( 'release:prep', function( callback ) {
	sequence(
		'release:prompt',
		'release:version',
		'release:dist',
		callback
	);
} );
