var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    pug = require('gulp-pug'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('app/normal/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('app/compressed/css/'));
});

gulp.task('pug', function () {
  return gulp.src('app/normal/index.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('app/compressed'));
});

gulp.task('jsm', function () {
    gulp.src('app/normal/js/main.js')
        .pipe(babel({
          presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('app/compressed/js'));
});

gulp.task('prod', ['sass','pug','jsm'] ,function () {

});

gulp.task('watch', function() {
    gulp.watch('app/normal/sass/*.scss', ['sass']);
    gulp.watch('app/normal/index.pug', ['pug']);
    gulp.watch('app/normal/js/main.js', ['jsm']);
});

/*global require*/










