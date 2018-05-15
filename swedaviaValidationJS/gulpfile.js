'use strict';

let gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

let path = {
    dist: {
        html: 'dist/',
        css: 'dist/css/',
        js: 'dist/js/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
    },
    app: {
        html: 'app/*.html',
        style: 'app/scss/*.scss',
        js: 'app/js/app.js',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*',
    },
    watch: {
        html: 'app/**/*.html',
        style: 'app/scss/**/**/*.scss',
        js: 'app/js/**/*.js',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*',
    }
};

let config = {
    server: {
        baseDir: './dist'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'webmaster-cube'
};

gulp.task('webserver', function () {
   browserSync(config);
});

gulp.task('html:dist', function () {
        return gulp.src(path.app.html)
            .pipe(gulp.dest(path.dist.html)).pipe(reload({stream: true}));
});

gulp.task('js:dist', function () {
    return gulp.src(path.app.js)
        .pipe(sourcemaps.init()).pipe(uglify()).pipe(sourcemaps.write()).pipe(gulp.dest(path.dist.js)).pipe(reload({stream: true}));
});

gulp.task('style:dist', function () {
    return gulp.src(path.app.style)
        .pipe(sourcemaps.init()).pipe(sass().on('error', sass.logError)).pipe(sourcemaps.write()).pipe(cleanCSS()).pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false, grid: true})).pipe(gulp.dest(path.dist.css)).pipe(reload({stream: true}));
});

gulp.task('image:dist', function () {
    return gulp.src(path.app.img)
        .pipe(imagemin({progressive: true, svgoPlugins: [{removeViewBox: false}], optimizationLevel: 5, interlaced: true})).pipe(gulp.dest(path.dist.img)).pipe(reload({stream: true}));
});

gulp.task('fonts:dist', function () {
    return gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.dist.fonts));
});

gulp.task('dist', [
    'html:dist',
    'js:dist',
    'style:dist',
    'fonts:dist',
    'image:dist'
    ]
);

gulp.task('watch', function(){
   watch([path.watch.html], function (event, cb) {
       gulp.start('html:dist');
   });
   watch([path.watch.style], function (event, cb) {
        gulp.start('style:dist');
   });
   watch([path.watch.js], function (event, cb) {
        gulp.start('js:dist');
   });
   watch([path.watch.img], function (event, cb) {
        gulp.start('image:dist');
   });
   watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:dist');
   });
});

gulp.task('default', ['dist', 'webserver', 'watch']);