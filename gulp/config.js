module.exports = {
	paths: {
		sass: {
			src: [ 'scss/*.scss' ],
			dest: [ './dist' ],
			lint: [ 'scss/**/*.scss' ],
		},
		test: {
			src: [ 'test/**/*.html' ],
			dest: [ 'test/' ],
			clean: [
				'test/**/*.html',
				'!test/**/*-source.html',
			],
			watch: [
				'scss/**/*.scss',
				'test/**/*-source.html',
			],
		},
		release: {
			versionedFiles: [
				'package.json',
				'README.md',
				'docs/getting-started.md',
			],
			assets: {
				src: [ './dist/*' ],
				dest: [ './release-assets' ],
			}
		},
		examples: {
			src: [
				'test/**/*.html',
				'!test/**/*-source.html'
			],
			dest: [ 'docs/examples' ],
		},
	},
};
