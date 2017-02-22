var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');

gulp.task('default', function () {
    nodemon({
       script: 'server.js',
        env: {
           PORT: 8000
        },
        ext: 'js',
        ignore: ['/node_modules/**']
    })
    .on('restart', function () {
        console.log('Restarting App!!');
    });
});

gulp.task('unit-test', function () {
    gulp.src('tests/server/unit/*.js', {read: false})
        .pipe(gulpMocha({ reporter: 'nyan' }))
});

gulp.task('api-test', function () {
    env({ vars: {ENV: 'Test'} });
    gulp.src('tests/server/api/*.js', {read: false})
        .pipe(gulpMocha({ reporter: 'nyan' }))
})