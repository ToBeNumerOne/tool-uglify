var gulp = require('gulp'),
    babel = require('gulp-babel'),
    gulpif = require('gulp-if');

gulp.task('babel:jsx', ['babel:es6'],function () {
  return gulp.src('./target/**/*.*')
      .pipe(gulpif('*.jsx', babel({
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