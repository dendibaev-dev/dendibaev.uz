const gulp = require("gulp");
const server = require("browser-sync").create();
const pug2html = require("./pug2html");
const script = require("./script");
const svgSprite = require("./svgSprite");
const mics = require("./mics")

module.exports = function serve(cb) {
  server.init({
    server: {
      baseDir: "build",
    },
  });

  gulp.watch("src/pages/*.pug", pug2html);
  gulp.watch("src/js/**/*.js", script);
  gulp.watch("src/common/images/icons/*.svg", svgSprite);
  gulp.watch("src/mics/*", mics);
  gulp.watch("build").on("change", server.reload);

  return cb();
};
