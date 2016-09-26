var gulp = require('gulp'),
    babel = require('gulp-babel'),
    gulpif = require('gulp-if'),
    config = require('../babel.config');

gulp.task('babel:jsx', ['babel:es6'],function () {
  return gulp.src('./target/**/*.*')
      .pipe(gulpif('*.jsx', babel(config)))
      .pipe(gulp.dest('./target'))
});