/**
 *
 * gulp 综合任务的入口
 */

var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('default', [
    'compress:js'
]);