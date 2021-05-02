const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

module.exports = function css() {
  return gulp
    .src("src/common/styles/*.css")
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"));
};
