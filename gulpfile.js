var gulp  = require('gulp');

var   jshint       = require('gulp-jshint');
var   sass         = require('gulp-sass');
var   imagemin     = require('gulp-imagemin');
var   autoprefixer = require('gulp-autoprefixer');
var   sourcemaps   = require('gulp-sourcemaps');
const del          = require('del');
var   changed      = require('gulp-changed');
var   merge        = require('merge-stream');
var   stylish      = require('jshint-stylish');

//default task
//the defualt will be stated by using just 'gulp' in bash
gulp.task('default', ['styles','imagemin','jshint','watch']);

//styles task (First task)
gulp.task('styles', function(){
    return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'));
});

//image minify (Second task)
gulp.task('imagemin', function(){

    return gulp.src('./app/assets/images/src/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets//images/build/'));

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

//watch the js files, sass files and image files
gulp.task('watch', function() {
    gulp.watch('app/scripts/**/*.js', ['jshint']);
    gulp.watch('app/assets/sass/*.scss', ['styles']);
    gulp.watch('app/assets/images/src/**/*.*', ['imagemin']);
    //gulp.watch('app/assets/images/build/**/*.*', ['clean']);

});


