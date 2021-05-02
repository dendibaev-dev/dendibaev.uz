const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const bemValidator = require("gulp-html-bem-validator");
const pugLinter = require("gulp-pug-linter");

module.exports = function pug2html(cb) {
  return gulp
    .src("src/*.pug")
    .pipe(plumber())
    .pipe(pugLinter({ reporter: "default" }))
    .pipe(pug())
    .pipe(bemValidator())
    .pipe(gulp.dest("build"));
};
