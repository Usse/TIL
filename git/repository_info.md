###Basic info for repository



List all the modify to a file

```
git log --follow --name-only -- css/style.css
```


List all the commit from a specific user

```
git log --author=“USERNAME”
```

Git logs in one line

```
git log --oneline
```

Table with page and commit number 

```
git effort --above 50
```

List last commit

```
git log -p -2
```

Groups commits by user

```
git shortlog
```

See modified code since last pull
```
git diff @{1} 
```

See diffs since 10 commits ago
```
git log -p -10 ./filename
```
