var gulp  = require('gulp');

var   jshint       = require('gulp-jshint');
var   sass         = require('gulp-sass');
var   imagemin     = require('gulp-imagemin');
var   autoprefixer = require('gulp-autoprefixer');
var   sourcemaps   = require('gulp-sourcemaps');
const del          = require('del');
var   changed      = require('gulp-changed');
var   merge        = require('merge-stream');
var stylish = require('jshint-stylish');

//default task
//the defualt will be stated by using just 'gulp' in bash
gulp.task('default', ['styles','imagemin','clean','jshint','watch']);

//styles task (First task)
gulp.task('styles', function(){
    return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'));
});

//image minify (Second task)
gulp.task('imagemin', function(){
    //since we want to work on three pairs of srcs and dests
    //we want to split them into three order streams,
    //otherwise we will confront write after end error

    //minify the app images
    var app = gulp.src('./app/assets/images/src/app/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/app/'));

    //minify the profile images
    var profile = gulp.src('./app/assets/images/src/profile/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/profile/'));

    //minify the work images
    var work = gulp.src('./app/assets/images/src/work/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/work/'));

    //merge the three streams
    return merge(app, profile, work);


    // //where to use autoprefixer?
    // return gulp.src('src/images/src/**/*')
    // .pipe(sourcemaps.init())
    // .pipe(autoprefixer())
    // .pipe(imagemin())
    // .pipe(sourcemaps.write('.'))
    // .pipe(gulp.dest('src/images/build/*'));
});

//remove the build folder
gulp.task('clean', function(){
    return del([
    'app/assets/images/build/**/*', 'app/assets/images/build'
  ]);
});

//jshint
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

//
