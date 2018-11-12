'use strict';

var gulp = require('gulp');
var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('build', function () {
  //Convert jsx to js 
  gulp.src('source/jsx/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('app'));
  gulp.src('source/samples/**/*.html')
    .pipe(gulp.dest('app'));
  gulp.src('source/jsx/**/*.jsx')
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['build']);

gulp.task('copyfiles', function () {

  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/common-images/**')
    .pipe(gulp.dest('content/ej/themes/common-images'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/default-theme/**')
    .pipe(gulp.dest('content/ej/themes/default-theme'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.min.css')
    .pipe(gulp.dest('content/ej/themes'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.reportdesigner.core.min.css')
    .pipe(gulp.dest('content/ej/themes'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/responsive-css/**')
    .pipe(gulp.dest('content/ej/themes/responsive-css'));
  gulp.src('node_modules/syncfusion-javascript/Scripts/ej/common/ej.web.react.min.js')
    .pipe(gulp.dest('scripts'));
  gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js')
    .pipe(gulp.dest('scripts'));
  gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.reportdesigner.min.js')
    .pipe(gulp.dest('scripts'));
});
	