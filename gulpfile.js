var gulp = require( 'gulp' );

// Require main configuration file
var config = require( './gulp/config.js' );

// Require tasks
var sass = require( './gulp/tasks/sass.js' );
var test = require( './gulp/tasks/test.js' );
var examples = require( './gulp/tasks/examples.js' );
var release = require( './gulp/tasks/release.js' );

// SASS build task
gulp.task(
	'sass',
	gulp.series( [
		sass.lint,
		sass.build,
	] )
);

// Test build task
gulp.task(
	'test',
	gulp.series( [
		test.clean,
		test.build,
	] )
);

// Test watch task
gulp.task(
	'test:watch',
	function() {
		gulp.watch(
			config.paths.test.watch,
			gulp.series( [
				'sass',
				'test',
			] )
		);
	}
);

// Examples build and migration task
gulp.task(
	'examples',
	gulp.series( [
		'test',
		examples.clean,
		examples.move,
	] )
);

// Release main task
gulp.task(
	'release',
	gulp.series( [
		release.prompt,
		release.version,
		'sass',
		'examples',
		release.assets,
	] )
);
