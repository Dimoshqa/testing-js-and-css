var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('3. gulp sass-to-css/scss/style.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(gulp.dest('3. gulp sass-to-css/css/'))
});
