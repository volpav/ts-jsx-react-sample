'use strict';

var gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    sass        = require('gulp-sass'),
    browserify  = require('browserify'),
    concat      = require('gulp-concat'),
    source      = require('vinyl-source-stream'),
    del         = require('del');

var project = ts.createProject('src/tsconfig.json', { typescript: typescript });

gulp.task('ts', function () {
  var result = gulp.src('src/**/*{ts,tsx}')
    .pipe(ts(project));
  return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/client'));
});

gulp.task('static:img', function () {
  return gulp.src('src/client/img/**/*.{jpg,jpeg,png,gif}')
    .pipe(gulp.dest('dist/client/img'));
});

gulp.task('static:html', ['static:img'], function () {
  return gulp.src('src/client/html/**/*.{html,htm}')
    .pipe(gulp.dest('dist/client'));
});

gulp.task('node:dist', ['sass', 'static:html'], function () {
  return gulp.src(['.tmp/**/*.js', '!.tmp/client/**/*'])
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['ts', 'node:dist'], function () {
  var b = browserify('.tmp/client/bootstrap.js');
  
  return b.bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('dist/client'));
});

gulp.task('clean', function () {
  return del(['.tmp', 'dist']);
});

gulp.task('default', ['bundle']);