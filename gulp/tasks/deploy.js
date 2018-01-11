var gulp = require( 'gulp' );
var replace = require( 'gulp-replace' );
var inquirer = require( 'inquirer' );
var sass = require( 'gulp-sass' );
var plumber = require( 'gulp-plumber' );
var styleLint = require( 'gulp-stylelint' );
var rename = require( 'gulp-rename' );

var CONFIG = require( '../config.js' );
var CURRENT_VERSION = require( '../../package.json' ).version;
var NEXT_VERSION;

// Security check, asking for new version number
gulp.task( 'deploy:prompt', function( callback ) {
	inquirer.prompt( [
		{
			type: 'confirm',
			name: 'confirmation',
			message: 'Are you sure everything is updated? Documentation? Change Log?'
		}
	] )
		.then( function( result ) {
			if ( result.confirmation === false ) {
				return false;
			}

			inquirer.prompt( [
				{
					type: 'input',
					name: 'version',
					message: 'What version are we moving to? (Current version is ' + CURRENT_VERSION + ')',
					validate: function( value ) {
						if ( value === '' ) {
							return 'You have to enter valid version value (eg. 3.0.0).';
						}

						return true;
					}
				}
			 ] )
				.then( function( result ) {
					NEXT_VERSION = result.version;
					callback();
				} );
		} );
} );

// Bumps the version number in any file that has one
gulp.task( 'deploy:version', function() {
	return gulp.src( CONFIG.VERSIONED_FILES, { base: process.cwd() } )
		.pipe( replace( CURRENT_VERSION, NEXT_VERSION ) )
		.pipe( gulp.dest( '.' ) );
} );

// Builds Bojler dist files
gulp.task( 'deploy:dist', function() {
	return gulp.src( CONFIG.SASS_BUILD_FILES )
		.pipe( plumber() )
		.pipe( sass( { outputStyle: 'expanded' } )
			.on( 'error', sass.logError ) )
		.pipe( gulp.dest( './dist' ) )
		.pipe( sass( { outputStyle: 'compressed' } )
			.on( 'error', sass.logError ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( './dist' ) )
		.on( 'finish', function() {
			gulp.src( CONFIG.SASS_LINT_FILES )
				.pipe( plumber() )
				.pipe( styleLint( {
					configFile: './.stylelintrc',
					reporters: [
						{
							formatter: 'string',
							console: true
						}
					],
					syntax: 'scss'
				} ) );
		} );
} );
