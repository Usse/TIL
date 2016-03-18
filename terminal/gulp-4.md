##Gulp 4



###Incremental builds
You can filter out unchanged files between runs of a task using the `gulp.src` function's `since` option and `gulp.lastRun`



```js
function images() {
  return gulp.src(paths.images, {since: gulp.lastRun('images')})
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
}

function watch() {
  gulp.watch(paths.images, images);
}
```

###Dependencies

Gulp 4 drops the dependency parameter completely and replaces them with execution functions that can be used instead:

`gulp.series => for sequential execution`

`gulp.parallel => for parallel execution.`

So if you want to execute styles and scripts in parallel, you can write something like this:

```js
gulp.task('default', gulp.parallel('scripts', 'styles'));
```

<br>
---
<br>
refs. [migrating-to-gulp-4-by-example](https://blog.wearewizards.io/migrating-to-gulp-4-by-example)