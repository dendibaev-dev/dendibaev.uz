const gulp = require("gulp");
const server = require("browser-sync").create();
const pug2html = require("./pug2html");
const script = require("./script");
const fonts = require("./fonts");
const imageMinify = require("./imageMinify");
const svgSprite = require("./svgSprite");
const css = require("./css");
const mics = require("./mics")


module.exports = function serve(cb) {
  server.init({
    server: {
      baseDir: "build",
    },
  });

  gulp.watch("src/**/*.pug", pug2html);
  gulp.watch("src/js/**/*.js", script);
  gulp.watch("src/common/fonts/*", fonts);
  gulp.watch("src/common/images/*", imageMinify);
  gulp.watch("src/common/images/icons/*.svg", svgSprite);
  gulp.watch("src/common/styles/*.css", css);
  gulp.watch("src/mics/*", mics);
  gulp.watch("build").on("change", server.reload);

  return cb();
};
