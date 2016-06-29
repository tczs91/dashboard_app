var gulp  = require('gulp');

var   jshint       = require('gulp-jshint');
var   sass         = require('gulp-sass');
var   imagemin     = require('gulp-imagemin');
var   autoprefixer = require('gulp-autoprefixer');
var   sourcemaps   = require('gulp-sourcemaps');
var   del          = require('del');
var   changed      = require('gulp-changed');
var   merge        = require('merge-stream');

//default task
//the defualt will be stated by using just 'gulp' in bash
gulp.task('default', ['scripts','styles','watch']);

//styles task (First task)
gulp.task('styles', function(){
    return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'));
});

//image minify (Second task)
gulp.task('imagemin', function(){
    var app = gulp.src('./app/assets/images/src/app/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/app/'));

    var profile = gulp.src('./app/assets/images/src/profile/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/profile/'));

    var work = gulp.src('./app/assets/images/src/work/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/work/'));

    return merge(app, profile, work);

});



