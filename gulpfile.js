// require gulp
var gulp = require('gulp');
// default task
//require other packages
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var sass= require('gulp-sass');
//sass
gulp.task('sass', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles'))
});
// imagemin task
gulp.task('imagemin1', function() {
  return gulp.src('./app/assets/images/src/app/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/app'));
});
gulp.task('imagemin2', function() {
  return gulp.src('./app/assets/images/src/profile/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/profile'));
});
gulp.task('imagemin3', function() {
  return gulp.src('./app/assets/images/src/work/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/work'));
});
gulp.task('imagemin', ['imagemin1', 'imagemin2','imagemin3']);

var gulp = require('gulp');
var clean = require('gulp-clean');
//gulp clean
gulp.task('clean', function () {
	return gulp.src('./app/assets/images/build', {read: false})
		.pipe(clean());
});
//stylist reporter
gulp.task('jshint',function(){
	return gulp.src(['*.js','app/scripts/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});
//watch
gulp.task('watch', function() {
//  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./app/assets/sass/*.scss', ['sass']);
});
