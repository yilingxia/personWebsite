var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('startServer', function() {
  gulp.src('app')
    .pipe(webserver({
      host:'0.0.0.0',
      livereload: true,
      // directoryListing: true,
      open: false,
      fallback:'./index.html'
    }));
});
