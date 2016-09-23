/**
 *
 * 清除.jsx文件
 */
var gulp = require('gulp'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');

gulp.task('clean:jsx', ['babel:jsx'],function(){
  return gulp.src('./target/**/*.jsx')
  .pipe(vinylPaths(del))
});

