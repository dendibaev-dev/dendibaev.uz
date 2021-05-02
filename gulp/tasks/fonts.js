const gulp = require("gulp");

module.exports = function fonts() {
  return gulp.src("src/common/fonts/*").pipe(gulp.dest("build/fonts"));
};
