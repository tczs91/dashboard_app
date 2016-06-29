var gulp  = require('gulp');

    jshint       = require('gulp-jshint');
    sass         = require('gulp-sass');
    imagemin     = require('gulp-imagemin');
    autoprefixer = require('gulp-autoprefixer');
    sourcemaps   = require('gulp-sourcemaps');
    del          = require('del');
    changed      = require('gulp-changed');

//default task
//the defualt will be stated by using just 'gulp' in bash
gulp.task('default', ['scripts','styles','watch']);

//styles task
gulp.task('styles', function(){
    return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'));
});

