const gulp = require("gulp");
const size = require("gulp-size");

module.exports = function mics(cb) {
  return gulp
    .src(["src/mics/*", "src/mics/*/*.*"])
    .pipe(size())
    .pipe(gulp.dest("build"));
};
