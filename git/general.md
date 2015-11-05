#GIT general


The important thing to remember about a Git repository is that it exists entirely in a single .git directory in your project root. Everybody has their own self-contained version of a repository.

You can initialize a Git repository anywhere with the `git init` command.

-

A **tree object** in git can be thought of as a directory. It contains a list of blobs (files) and other tree objects (sub-directories).
Given the root tree object, we can recurse through every tree object to figure out the state of the entire working tree. 

A **commit object** is essentially a pointer that contains a few pieces of important metadata.

-

When you create a commit, Git will give you the hash of that commit. Using `git show` with the `--format=raw` flag, we can see this newly-created commit’s metadata.

To save you from having to memorize these hashes, Git has **references**, or “refs”. A reference is simply a file stored somewhere in `.git/refs`, containing the hash of a commit object. (Branches are just references.)

**Branches** in Git are very lightweight, compared to other VCS, because they’re just references.

There are two types of **tags** in Git: lightweight tags and annotated tags.

```
$ git tag 1.0-lightweight
$ git tag -a -m "Tagged 1.0" 1.0
```

There are a few reasons why annotated tags are preferred over lightweight tags.
Probably the most important reason is that annotated tags have their own author information. This can be helpful when you want to know who created the tag, rather than who created the commit that the tag is referring to.
Annotated tags are also timestamped. Since new versions are usually tagged right before they are released, an annotated tag can tell you when a version was released rather than just when the final commit was made.


**Merging** in Git is the process of joining two histories (usually branches) together