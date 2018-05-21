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
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
