const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

function compilaSass() {
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles'))
}

function comprimeHtml() {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
}

function comprimeJavaScript() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
}

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', {ignoreInitial: false}, compilaSass)
    gulp.watch('./src/*.html', {ignoreInitial: false}, comprimeHtml)
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, comprimeJavaScript)
}

exports.default = gulp.series(compilaSass, comprimeHtml, comprimeJavaScript);
exports.watch = watchFiles;


