var gulp 	= require('gulp'),
	minify 	= require('gulp-minify-css'),
	uglify 	= require('gulp-uglify'),
	plumber = require('gulp-plumber');

gulp.task('minCss', function(){
	gulp.src('css/*.css')
	.pipe(plumber())
	.pipe(minify())
	.pipe(gulp.dest('dist/css'));
	console.log('Minified CSS :3');
});
gulp.task('uglify', function(){
	gulp.src('js/**/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
	console.log('Minified JS :3');
});
gulp.task('watch', function(){
	gulp.watch('css/*.css', ['minCss'])
	gulp.watch('js/**/*.js',['uglify'])
});

gulp.task('default', ['minCss', 'uglify', 'watch']);