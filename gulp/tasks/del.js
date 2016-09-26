/**
 * 清除备份文件(中间文件)的子任务
 */

var gulp = require('gulp'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');

gulp.task('del', ['compress:js'],function(){
  return gulp.src('./middle')
      .pipe(vinylPaths(del))
});
