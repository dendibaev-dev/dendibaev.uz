const gulp = require("gulp");
const rimraf = require("rimraf");
const mics = require("./gulp/tasks/mics");
const pug2html = require("./gulp/tasks/pug2html");
const script = require("./gulp/tasks/script");
const serve = require("./gulp/tasks/serve");
const fonts = require("./gulp/tasks/fonts");
const css = require("./gulp/tasks/css");
const imageMinify = require("./gulp/tasks/imageMinify");
const svgSprite = require("./gulp/tasks/svgSprite");

function clean(cb) {
  rimraf("./build", cb);
}

const dev = gulp.parallel(
  pug2html,
  script,
  fonts,
  imageMinify,
  svgSprite,
  mics,
  css,
);
const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build, serve);
module.exports.build = gulp.series(build);
