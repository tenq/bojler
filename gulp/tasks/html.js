var gulp = require( 'gulp' );
var juice = require( '@akzhan/gulp-juice' );
var stripComments = require( 'gulp-strip-comments' );
var connect = require( 'gulp-connect' );

// Require main configuration file
var config = require( '../config.js' );

// Export functions
exports.inline = inline;
exports.clean = clean;

// Inline CSS
function inline() {
	return gulp.src( config.paths.html.inline.src )
		.pipe( juice( {
			applyHeightAttributes: false,
			applyWidthAttributes: false,
			xmlMode: true,
			webResources: {
				relativeTo: './dist',
				images: false,
				svgs: false,
				scripts: false,
				links: false,
			},
		} ) )
		.pipe( gulp.dest( config.paths.html.inline.dest ) );
}

// Clean HTML (Removing unwanted comments)
function clean() {
	return gulp.src( config.paths.html.clean.src )
		.pipe( stripComments( {
			safe: true,
			trim: true,
		} ) )
		.pipe( gulp.dest( config.paths.html.clean.dest ) )
		.pipe( connect.reload() );
}
