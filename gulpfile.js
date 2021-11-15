const {src, dest} = require('gulp')
const gulp = require('gulp')
const del = require('del')
const file_include = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const image_min = require('gulp-imagemin')
const uglify = require('gulp-uglify-es').default
const browser_sync = require('browser-sync').create()

function browserSync() {
    browser_sync.init({
        server: {
            baseDir: 'dist/'
        },
        port: 3000

    })
}

function html() {
    return src('src/*.html')
        .pipe(file_include())
        .pipe(dest('dist/'))
        .pipe(browser_sync.stream())
}

function scss() {
    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(dest('dist/css/'))
        .pipe(csso())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/css'))
        .pipe(browser_sync.stream())
}

function js() {
    return src('src/js/*.js')
        .pipe(dest('dist/js/'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/js/'))
        .pipe(browser_sync.stream())
}

function img() {
    return src('src/img/**/*.{svg,png,jpg}')
        .pipe(image_min({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest('dist/img/'))
        .pipe(browser_sync.stream())
}

function clean() {
    return del('./dist/')
}

function watchFiles() {
    gulp.watch('./src/**/*.html', html)
    gulp.watch('./src/scss/**/*.scss', scss)
    gulp.watch('./src/js/**/*.js', js)
    gulp.watch('./src/img/**/*.*', img)
}

let build = gulp.series(clean, gulp.parallel(html, scss, js, img))
let watch = gulp.parallel(build, watchFiles, browserSync)

exports.default = watch