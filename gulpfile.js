import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from "sass";
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

const compileSass = gulpSass(sass)

function compilaSass() {
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(compileSass())
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

export default gulp.series(compilaSass, comprimeHtml, comprimeJavaScript);
export {watchFiles as watch};


