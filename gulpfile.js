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