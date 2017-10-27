const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Points to files to use
	gulp.dest - Points to folder to output
	gulp.watch - Watch files and folders fot changes
*/

gulp.task('message', function(){
	return console.log('Gulp is running...');
});

// copy ALL html files to dist folder
gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Scripts
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});
// Minify JS
gulp.task('minify', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Compile sass
gulp.task('sass', function(){
	gulp.src('src/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/images/*',['imageMin']);
	gulp.watch('src/sass/style.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHtml']);
});
