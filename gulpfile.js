const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src("src/pug/index.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("src"))
        .pipe(browserSync.stream()); 
});

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/style.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("src/pug/**/*.pug", gulp.parallel('pug'));
})

gulp.task('build', function() {
    return gulp.src([
        "src/*.html",
        "src/css/style.min.css",
        "src/img/**/*",
        "src/fonts/**/*",
        "src/js/**/*.js"  
    ], { base: "src" })
    .pipe(gulp.dest("dist"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'pug'));


gulp.task('deploy', gulp.series('pug', 'styles', 'build'));