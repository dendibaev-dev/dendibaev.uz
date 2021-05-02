const gulp = require("gulp");
const rimraf = require("rimraf");
const pug2html = require("./gulp/tasks/pug2html");
const script = require("./gulp/tasks/script");

const path = {
  build: {
    html: "./build/",
    js: "./build/js",
    style: "./build/css",
    images: "./build/images",
    icons: "./build/images/icons",
    fonts: "./build/fonts",
    separate: "./build/separate",
    misc: "./build/",
  },
  src: {
    html: "./src/pages/*.pug",
    js: "./src/js/main.js",
    style: "./src/scss/main.scss",
    images: "./src/common/assets/images/*.*",
    icons: "./src/common/assets/icons/*.svg",
    fonts: "./src/common/fonts/*.*",
    separate: "./src/common/separate/*/*.*",
    misc: ["./src/mics/*", "./src/mics/*/*.*"],
  },
  watch: {
    html: [
      "./src/pages/*.pug",
      "./src/pages/**/*.pug",
      "./src/pages/**/**/*.pug",
    ],
    js: ["./src/js/*.js", "./src/pages/**/*.js", "./src/pages/**/**/*.js"],
    style: [
      "./src/common/scss/**/*.scss",
      "./src/common/scss/*.scss",
      "./src/components/**/*.scss",
      "./src/components/**/**/*.scss",
    ],
    images: "./src/common/assets/images/*.*",
    icons: "./src/common/assets/icons/*.svg",
    fonts: "./src/common/fonts/*/*.*",
    separate: "./src/common/separate/*/*.*",
    misc: "./src/mics/*",
  },
};

function clean(cb) {
  rimraf(path.build.html, cb);
}

module.exports.start = gulp.series(gulp.parallel(pug2html, script));
module.exports.build = gulp.series(clean, gulp.parallel(pug2html, script));
