var gulp = require( 'gulp' );
var juice = require( '@akzhan/gulp-juice' );
var rename = require( 'gulp-rename' );
var del = require( 'del' );

var CONFIG = require( '../config.js' );

// Build test files
gulp.task( 'test:build', [ 'test:clean' ], function() {
	return gulp.src( CONFIG.TEST_BUILD_FILES )
		.pipe(
			juice( {
				applyHeightAttributes: false,
				applyWidthAttributes: false,
				xmlMode: true,
				webResources: {
					images: false,
					svgs: false,
					scripts: false,
					links: false,
				},
			} )
		)
		.pipe( rename( function( path ) {
			path.basename = path.basename.replace( '-source', '' );
		} ) )
		.pipe( gulp.dest( 'test/' ) );
} );

// Remove dist test files
gulp.task( 'test:clean', function() {
	return del( [
		'test/**/*.html',
		'!test/**/*-source.html',
	] );
} );
