var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    pug = require('gulp-pug'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');


gulp.task('cssm', function () {
    gulp.src('app/normal/css/styles.css')
        .pipe(cssmin())
        .pipe(gulp.dest('app/compressed/css'));
});

gulp.task('pug', function () {
  return gulp.src('app/normal/index.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('app/compressed'));
});

gulp.task('jsm', function () {
    gulp.src('app/normal/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/compressed/js'));
});

gulp.task('watch', function() {
    gulp.watch('app/normal/css/styles.css', ['cssm']);
    gulp.watch('app/normal/index.pug', ['pug']);
    gulp.watch('app/normal/js/main.js', ['jsm']);
});










