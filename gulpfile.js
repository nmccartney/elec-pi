'use strict';

var gulp = require('gulp');

var scss = require('gulp-scss');
var jade = require('gulp-jade');

var gutil = require("gulp-util");
var run = require("run-sequence");
var del = require("del");
var size = require("gulp-size");
var open = require("gulp-open");
var slash = require('slash');
var file = require('file');
var fs = require('fs');

gulp.task("default",function(cb){
    run(
         // "browsersync",
         "watch",
        //  "open",
         cb);
});


// gulp watch:all
gulp.task('watch',function(){
    gulp.watch([ './scss/**/*.scss'], ['scss']  );
    gulp.watch('./jade/**/*.jade',['jade']);
});

/**
** JADE Tasks::
**/

gulp.task('jade',function(cb){
   run('jade:dist',cb);
});

gulp.task('jade:dist', function() {
	var YOUR_LOCALS = {};
  gulp.src('./jade/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:true
    }))
    .pipe(gulp.dest('./'));
});


/**
* -- SCSS tasks
**/

gulp.task('scss',function(cb){
   run('scss:dist',cb);
});

gulp.task('scss:dist',function(){
    return gulp.src('./scss/main.scss')
        .pipe(scss().on('error',function (err) {
            gutil.log(gutil.colors.red("ERROR", 'scss:dist'), err);
            this.emit("end", new gutil.PluginError('scss:dist', err, { showStack: true }));
        }))
        .pipe(size())
        .pipe(gulp.dest('./styles'))
        // .pipe(browserSync.reload({stream:true}));
});


