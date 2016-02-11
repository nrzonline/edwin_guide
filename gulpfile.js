var gulp		= require('gulp'),
	coffee		= require('gulp-coffee'),
	sass		= require('gulp-sass'),
	minifycss	= require('gulp-minify-css'),
	haml		= require('gulp-haml'),
	minifyhtml	= require('gulp-minify-html'),
	livereload	= require('gulp-livereload'),
	fs			= require("fs"),
	plumber 	= require('gulp-plumber');

var paths = {
	'sassDirs'			: [],
	'hamlDirs'			: [],
	'coffeescriptDirs'	: []
};

var dive = function (dir, action) {
	if (typeof action !== "function")
		action = function (error, file) { };
	fs.readdir(dir, function (err, list) {
	if (err)
		return action(err);
	list.forEach(function (file) {
			var path = dir + "/" + file;
			fs.stat(path, function (err, stat) {
				if (stat && stat.isDirectory()) {
					dive(path, action);
					action(path);
				}
			});
		});
	});
};

var checkDirName = function(path) {
	var dirName = path.substring(path.lastIndexOf('/'), path.length);
	path = path.substring(2);
	if(dirName == '/sass') {
		paths.sassDirs.push(path + '/**/*.sass');
	} else if (dirName == '/haml') {
		paths.hamlDirs.push(path + '/**/*.haml');
	} else if (dirName == '/coffee') {
		paths.coffeescriptDirs.push(path + '/**/*.coffee');
	}
}

var getDestination = function(path, oldExtension, newExtension) {
	/* "/" in linux env, "\\" in windows */
	return path.substring(0, path.lastIndexOf("\\")).replace(oldExtension, newExtension)
}

gulp.task('analyseDirs', function() {
	dive('.', checkDirName);
});

function watchCoffee() {
	gulp.watch(paths.coffeescriptDirs, {base: './', emitOnGlob: false}, function(files) {
		console.log("Syncing \x1b[33mCoffeeScript\x1b[0m file: \x1b[90m" + files.path + "\x1b[0m")
		console.log("Destination: " + getDestination(files.path, 'coffee', 'js'))
		return gulp.src(files.path)
			.pipe(coffee())
			.on('error', function (err) {
					console.log(err);
					this.emit('end');
			})
			.pipe(gulp.dest(getDestination(files.path, 'coffee', 'js')))
			.pipe(livereload());
	});
}

function watchSass() {
	gulp.watch(paths.sassDirs, function(files) {
		console.log("Syncing \x1b[35mSASS\x1b[0m file: \x1b[90m" + files.path + "\x1b[0m")
		return gulp.src(files.path)
			.pipe(sass({
					indentedSyntax : true,
					errLogToConsole: true
			}))
			.pipe(minifycss())
			.on('error', function (err) {
					console.log(err);
					this.emit('end');
			})
			.pipe(gulp.dest(getDestination(files.path, 'sass', 'css')))
			.pipe(livereload());
	});
}

function watchHaml() {
	gulp.watch(paths.hamlDirs, {base: './', emitOnGlob: false}, function(files) {
		console.log("Syncing \x1b[97mHAML\x1b[0m file: \x1b[90m" + files.path + "\x1b[0m")
		return gulp.src(files.path)
			.pipe(haml())
			.on('error', function (err) {
					console.log(err);
					this.emit('end');
			})
			.pipe(minifyhtml())
			.pipe(gulp.dest(getDestination(files.path, 'haml', '')))
			.pipe(livereload());
	});
}

function watchPython() {
	gulp.watch('**/*.py', {emitOnGlob: false},  function(files) {
		setTimeout(function(){
			console.log("Triggering livereload: \x1b[35m" + files.path + "\x1b[0m")
			return gulp.src(files.path)
				.pipe(livereload());
		},1000);
	});
}

gulp.task('startLiveReload', function() {
	console.log('\x1b[92mStarting LiveReload\x1b[0m')
	livereload.listen();
});

gulp.task('watch',['analyseDirs', 'startLiveReload'], function() {
	setTimeout(function(){
		watchSass();
		watchCoffee();
		watchPython();
		watchHaml();
    }, 1000);
});

gulp.task('default',['watch'])
