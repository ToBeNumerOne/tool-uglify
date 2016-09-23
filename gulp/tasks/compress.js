/**
 *
 * 压缩js文件的子任务
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('compress:js', ['clean:jsx'],function (cb) {
  pump([
      gulp.src(['./target/**/*.js']),
      uglify(),
      gulp.dest('./target')
  ], cb)
});

