var gulp = require('gulp');
var construct = require('gulp-construct');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var connect = require('gulp-connect');

var src = {

  css: 'src/css/**/*.less',

  js: 'src/js/**/*.js',

  html: 'src/**/**.html',

  img: 'src/img/**'

}


gulp.task('construct',function() {
    gulp.src('src/**/*.html')
    	.pipe(construct({
          includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
          type: 'html'
      }))
      .pipe(construct({
          includerReg:/<link\s+href\=+"([^"]+)"\s+rel="stylesheet"\/>/g,
          type: 'css'
      }))
      .pipe(construct({
          includerReg:/<script\s+src\=+"([^"]+)"><\/script>/g,
          type: 'js'
      }))
      .pipe(gulp.dest('./build'));
});

gulp.task('connect', function () {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('css', function () {
    gulp.src('src/css/main.less')
        .pipe(less())
        .pipe(connect.reload())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('js', function () {
    gulp.src('src/js/lib/**.js')
      .pipe(connect.reload())
      .pipe(gulp.dest('./build/js/lib'));
    gulp.src('src/js/**.js')
      .pipe(connect.reload())
      .pipe(gulp.dest('./build/js'));
});

gulp.task('img', function() {
  gulp.src('src/img/**')
    .pipe(connect.reload())
    .pipe(gulp.dest('./build/img'));
});

gulp.task('html', function () {
  gulp.src(src.html)
    .pipe(connect.reload())
    .pipe(gulp.dest('./build'));
});


gulp.task('watch', function() {
  gulp.watch(src.html, ['html']);
  gulp.watch(src.js, ['js']);
  gulp.watch(src.css, ['css']);
  gulp.watch(src.img, ['img']);
});

gulp.task('default', ['connect', 'watch']);