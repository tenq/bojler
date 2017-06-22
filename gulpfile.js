var gulp = require( 'gulp' ),
    util = require( 'gulp-util' ),
    sass = require( 'gulp-sass' ),
    connect = require( 'gulp-connect' ),
    inlinecss = require( 'gulp-inline-css' ),
    inject = require( 'gulp-inline-source' ),
    stripComments = require( 'gulp-strip-comments' ),
    filesToWatch = [
        'source/sass/**/*.scss',
        'source/*.html',
    ];

// Style to CSS
gulp.task( 'styleToCss', function() {
    return gulp.src( 'source/sass/style.scss' )
        .pipe(
            sass( { outputStyle: 'compressed' } )
            .on( 'error', util.log )
        )
        .pipe( gulp.dest( 'public/css/' ) )
} );

// Inject CSS to head
gulp.task( 'injectCss', [ 'styleToCss' ], function () {
    return gulp.src( 'source/*.html' )
        .pipe( inject() )
        .pipe( gulp.dest( 'public/' ) );
} );

// Inline CSS
gulp.task( 'inlinecss', [ 'injectCss' ], function() {
    return gulp.src( 'public/*.html' )
        .pipe( inlinecss( {
            applyLinkTags: false,
            preserveMediaQueries: true
        } ) )
        .pipe( gulp.dest( 'public/' ) );
} );

// Strip comments
gulp.task( 'removeComments', [ 'inlinecss' ], function () {
  return gulp.src( 'public/*.html' )
    .pipe( stripComments({
        safe: true
    }) )
    .pipe( gulp.dest( 'public/' ) )
    .pipe( connect.reload() );
} );

// Server w/ live reload
gulp.task( 'connect', function() {
    connect.server( {
        port: 8000,
        root: 'public',
        livereload: true,
    } );
} );

// Watch
gulp.task( 'watch', function() {
    gulp.watch( filesToWatch, [ 'removeComments' ] );
} );

// Default
gulp.task( 'default', [ 'connect', 'removeComments', 'watch' ] );
