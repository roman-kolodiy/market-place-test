const gulp = require('gulp'); // подключение gulp
const autoprefixer = require('gulp-autoprefixer');// подключение autoprefixer

gulp.task('autoprefixer', function(){
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['autoprefixer'], function(){

    gulp.watch('src/css/**/*.css', ['autoprefixer']);

});

gulp.task('default', ['watch']);