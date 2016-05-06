var gulp = require('gulp'),
    construct = require('gulp-construct'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    path = require('path'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin');

var src = {

  css: 'src/css/**/*.less',

  js: 'src/js/**/*.js',

  html: 'src/**/**.html',

  img: 'src/img/**'

}

var js = {
  lib: ['src/js/lib/jquery-2.2.3.min.js', 'src/js/lib/TweenMax.min.js', 'src/js/lib/vue.js', 'src/js/lib/oz.js', 'src/js/lib/config.js'],
  main: ['src/js/index.js', 'src/js/main.js']
}

var css = [
  'src/css/main.less'
]

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
    gulp.src(css)
        .pipe(less())
        .pipe(connect.reload())
        .pipe(gulp.dest('./build/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({ message: 'css is done!' }));
});


gulp.task('js', function () {
    gulp.src(js.lib)
      .pipe(concat('lib.js'))
      .pipe(connect.reload())
      .pipe(gulp.dest('./build/js/'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(notify({ message: 'libJS is done!' }));
    gulp.src(js.main)
      .pipe(connect.reload())
      .pipe(gulp.dest('./build/js/'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(notify({ message: 'mainJS is done!' }));
});

gulp.task('img', function() {
  gulp.src('src/img/**')
    .pipe(connect.reload())
    .pipe(gulp.dest('./build/img'))
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/img'))
    .pipe(notify({ message: 'img is done!' }));
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