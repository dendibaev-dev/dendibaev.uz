const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const pugLinter = require("gulp-pug-linter");
const bemValidator = require("gulp-html-bem-validator");

module.exports = function pug2html(cb) {
  return gulp
    .src("src/pages/*.pug")
    .pipe(plumber())
    .pipe(pugLinter({ reporter: "default" }))
    .pipe(pug())
    .pipe(bemValidator())
    .pipe(gulp.dest("build"));
};
