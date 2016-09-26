/**
 *
 * 将原有文件备份的子任务
 */

var ncp = require('ncp').ncp
    gulp = require('gulp');
// 设置最大并发数是16
ncp.limit = 16;

//gulp.task('copy',function () {
//  ncp('./entry', './middle', function (err) {
//    if (err){
//      return console.error(err);
//    }
//    console.log('done!');
//  });
//});

gulp.task('copy', function(){
  return gulp.src('./entry/**/*.*')
      .pipe(gulp.dest('./middle'))
});
