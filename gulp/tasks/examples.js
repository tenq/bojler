var gulp = require( 'gulp' );
var del = require( 'del' );

// Require main configuration file
var config = require( '../config.js' );

// Export functions
exports.clean = clean;
exports.move = move;

// Remove existing example files
function clean() {
	return del( config.paths.examples.dest );
}

// Move new example files to documentation folder
function move() {
	return gulp.src( config.paths.examples.src )
		.pipe( gulp.dest( config.paths.examples.dest ) );
}
