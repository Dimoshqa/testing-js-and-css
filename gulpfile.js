var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass'), // SASS в CSS
    cssnano = require("gulp-cssnano"), // Минимизация CSS
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    imagemin = require('gulp-imagemin'), // Сжатие изображений
    concat = require("gulp-concat"), // Объединение файлов - конкатенация
    uglify = require("gulp-uglify"), // Минимизация javascript
    rename = require("gulp-rename"); // Переименование файлов



gulp.task('sass', function(){
  return gulp.src('3. gulp sass-to-css/scss/style.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(gulp.dest('3. gulp sass-to-css/css/'))
});
