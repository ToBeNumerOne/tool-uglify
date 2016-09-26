/**
 *
 * 转换es6的js和jsx为es5的子任务
 */
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    gulpif = require('gulp-if'),
    config = require('../babel.config');

gulp.task('babel:es6', function () {
  return gulp.src('./middle/**/*.*')
      .pipe(gulpif('*.js', babel(config)))
      .pipe(gulp.dest('./target'))
});