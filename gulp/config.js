module.exports = {
	paths: {
		html: {
			inline: {
				src: [ 'src/templates/**/*.html' ],
				dest: [ 'dist' ],
			},
			clean: {
				src: [ 'dist/**/*.html' ],
				dest: [ 'dist' ],
				options: {
					collapseWhitespace: true,
					keepClosingSlash: true,
					minifyCSS: true,
					removeComments: true,
					processConditionalComments: true,
				},
			},
		},
		sass: {
			lint: {
				src: [ 'src/scss/**/*.scss' ],
				configFile: '.stylelintrc',
			},
			build: {
				src: [ 'src/scss/**/*.scss' ],
				dest: [ 'dist/css' ],
			},
			clean: {
				src: [ 'dist/css' ],
			},
		},
		watch: {
			src: [
				'src/scss/**/*.scss',
				'src/templates/**/*.html',
			],
		},
		assets: {
			clean: {
				src: [ 'dist/assets/**/*' ],
			},
			copy: {
				src: [ 'src/assets/**/*' ],
				dest: [ 'dist/assets' ],
			},
		},
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
