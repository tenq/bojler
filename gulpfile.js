var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var sequence = require( 'run-sequence' );

requireDir( './gulp/tasks' );

// Pack everything up for new release
gulp.task( 'deploy:prep', function( callback ) {
	sequence(
		'deploy:prompt',
		'deploy:version',
		'deploy:dist',
		callback
	);
} );
