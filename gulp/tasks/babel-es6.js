/**
 *
 * 转换es6的js和jsx为es5的子任务
 */
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    gulpif = require('gulp-if');

gulp.task('babel:es6', function () {
  return gulp.src('./middle/**/*.*')
      .pipe(gulpif('*.js', babel({
        presets:[
          'es2015',
          'react'
        ],
        plugins: [
          'transform-class-properties'
        ]
      })))
      .pipe(gulp.dest('./target'))
});