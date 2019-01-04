const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const { series } = require('gulp');

sass.compiler = require('node-sass');

function styles() {
  return gulp.src('./src/scss/application.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
}

function views() {
  return gulp.src('./src/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./app'));
}

function watch() {
  return gulp.watch(['./src/scss/*.scss', './src/**/*.pug'], series(styles, views));
}

exports.styles = styles;
exports.views = views;
exports.default = series(styles, views, watch);
