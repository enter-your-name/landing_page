'use strict'

var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass');
 
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
})

gulp.task('default', ['serve']);