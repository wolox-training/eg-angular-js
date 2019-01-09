var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
import { env } from '../config';
 
gulp.task('config', function () {
  console.log('Building...' + env);
  gulp.src('config/config.json')
  .pipe(gulpNgConfig('core.config', {
    environment: env
  }))
  .pipe(gulp.dest('build/js/core'))
});
