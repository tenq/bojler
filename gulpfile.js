var gulp = require( 'gulp' );

// Require main configuration file
var config = require( './gulp/config.js' );

// Require tasks
var dev = require( './gulp/tasks/dev.js' );
var html = require( './gulp/tasks/html.js' );
var release = require( './gulp/tasks/release.js' );
var sass = require( './gulp/tasks/sass.js' );

// Default task (build)
gulp.task(
	'default',
	gulp.series( [
		sass.lint,
		sass.build,
		html.inline,
		gulp.parallel( [
			sass.clean,
			html.clean,
		] ),
	] )
);

// Watch task
gulp.task(
	'watch',
	function() {
		gulp.watch(
			config.paths.watch.src,
			gulp.series( [
				'default',
			] )
		);
	}
);

// Watch + development server and livereload
gulp.task(
	'dev',
	gulp.series( [
		'default',
		gulp.parallel( [
			dev.server,
			'watch',
		] ),
	] )
);

// Prepare everything for new version release
gulp.task(
	'release',
	gulp.series( [
		release.prompt,
		release.version,
	] )
);
