const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const csso = require("postcss-csso");
const dutil = require("./doc-util");
const gulp = require("gulp");
const linter = require("gulp-scss-lint");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const task = "sass";

sass.compiler = require("sass");

const dev_plugins = [autoprefixer({ cascade: false })];

const prod_plugins = [csso({ forceMediaMerge: false })];

gulp.task("build-sass-fonts", function() {
  return gulp
    .src("./css/uswds-fonts.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules/uswds/dist/scss/stylesheets", "./css/settings"],
          outputStyle: "expanded"
        })
        .on("error", function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== "development") {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("build-sass-components", function() {
  return gulp
    .src("./css/uswds-components.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules/uswds/dist/scss/stylesheets", "./css/settings"],
          outputStyle: "expanded"
        })
        .on("error", function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== "development") {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("build-sass-custom", function() {
  return gulp
    .src("./css/uswds-custom.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules/uswds/dist/scss/stylesheets", "./css/settings"],
          outputStyle: "expanded"
        })
        .on("error", function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== "development") {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("build-sass-utilities", function() {
  return gulp
    .src("./css/uswds-utilities.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules/uswds/dist/scss/stylesheets", "./css/settings"],
          outputStyle: "expanded"
        })
        .on("error", function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== "development") {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task(
  "build-sass-dev",
  gulp.parallel(
    "build-sass-fonts",
    "build-sass-components",
    "build-sass-custom",
    "build-sass-utilities"
  )
);

gulp.task("build-sass-prod", function() {
  return gulp
    .src([
      "./assets/css/uswds-fonts.css",
      "./assets/css/uswds-components.css",
      "./assets/css/uswds-custom.css",
      "./assets/css/uswds-utilities.css"
    ])
    .pipe(
      sourcemaps.init({
        largeFile: true,
        loadMaps: true
      })
    )
    .pipe(concat("styles.css"))
    .pipe(postcss(prod_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("build-sass", gulp.series("build-sass-dev", "build-sass-prod"));

gulp.task("scss-lint", function(done) {
  if (!cFlags.test) {
    dutil.logMessage("scss-lint", "Skipping linting of Sass files.");
    return done();
  }

  return gulp
    .src(["./css/**/*.scss"])
    .pipe(
      linter({
        config: ".scss-lint.yml"
      })
    )
    .pipe(linter.failReporter("E"));
});

gulp.task(task, gulp.series("build-sass"));
