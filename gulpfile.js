var gulp 	= require('gulp'),
	sass	= require('gulp-sass'),
	plumber = require('gulp-plumber'),
	minify	= require('gulp-minify-css');

gulp.task('compile', function(){
	gulp.src('css/*.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('dist'));
});

gulp.task('minify', function(){
	gulp.src('dist/*.css')
	.pipe(plumber())
	.pipe(minify())
	.pipe(gulp.dest('dist'));

});

gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['compile']);
});

gulp.task('default', ['compile', 'watch']);