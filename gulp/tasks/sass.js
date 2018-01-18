var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var styleLint = require( 'gulp-stylelint' );
var combineMq = require( 'gulp-combine-mq' );
var rename = require( 'gulp-rename' );

// Require main configuration file
var config = require( '../config.js' );

// Export functions
exports.lint = lint;
exports.build = build;

// Lint SASS
function lint() {
	return gulp.src( config.paths.sass.lint )
		.pipe( styleLint( {
			configFile: './.stylelintrc',
			reporters: [
				{
					formatter: 'string',
					console: true,
				}
			],
			syntax: 'scss',
		} ) );
}

// Build SASS dist. files
function build() {
	return gulp.src( config.paths.sass.src )
		.pipe( sass( { outputStyle: 'expanded' } )
			.on( 'error', sass.logError ) )
		.pipe( combineMq() )
		.pipe( gulp.dest( config.paths.sass.dest ) )
		.pipe( sass( { outputStyle: 'compressed' } )
			.on( 'error', sass.logError ) )
		.pipe( combineMq( { beautify: false } ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( config.paths.sass.dest ) );
}
