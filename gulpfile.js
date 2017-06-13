var gulp = require( 'gulp' ),
    util = require( 'gulp-util' ),
    sass = require( 'gulp-sass' ),
    inlineCss = require( 'gulp-inline-css' ),
    connect = require( 'gulp-connect' ),
    filesToWatch = [
        'source/sass/**/*.scss',
    ];

// Inline SASS
gulp.task( 'sassInlined', function( callback ) {
    return gulp.src( 'source/sass/style-inlined.scss' )
        .pipe(
            sass( { outputStyle: 'expanded' } )
            .on( 'error', util.log )
        )
        .pipe( gulp.dest( 'public/css/' ) );
} );

gulp.task( 'sassEmbedded', function( callback ) {
    return gulp.src( 'source/sass/style-embedded.scss' )
        .pipe(
            sass( { outputStyle: 'compressed' } )
            .on( 'error', util.log )
        )
        .pipe( gulp.dest( 'public/css/' ) );
} );

gulp.task( 'inlinecss', [ 'sassInlined' ], function() {
    return gulp.src( 'public/*.html' )
        .pipe(
            inlineCss( {
                applyStyleTags: false,
                removeStyleTags: false,
            } )
            .on( 'error', util.log )
        )
        .pipe( gulp.dest( 'public/') )
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
    gulp.watch( filesToWatch, [ 'inlinecss' ] );
} );

// Default task
gulp.task( 'default', [ 'connect', 'inlinecss', 'watch' ] );
