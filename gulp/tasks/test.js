var gulp = require( 'gulp' );
var del = require( 'del' );
var juice = require( '@akzhan/gulp-juice' );
var rename = require( 'gulp-rename' );

// Require main configuration file
var config = require( '../config.js' );

// Export functions
exports.clean = clean;
exports.build = build;

// Remove dist test files
function clean() {
	return del( config.paths.test.clean );
}

// Build test files
function build() {
	return gulp.src( config.paths.test.src )
		.pipe( juice( {
			applyHeightAttributes: false,
			applyWidthAttributes: false,
			xmlMode: true,
			webResources: {
				images: false,
				svgs: false,
				scripts: false,
				links: false,
			},
		} ) )
		.pipe( rename( function( path ) {
			path.basename = path.basename.replace( '-source', '' );
		} ) )
		.pipe( gulp.dest( config.paths.test.dest ) );
}
