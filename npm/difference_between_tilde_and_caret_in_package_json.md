###Difference between tilde(~) and caret(^) in package.json

In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.


| type          | meaning  |
|---            |---|
| ~version      | Approximately equivalent to version  |
| ^version      | Compatible with version  |
| version       |  Must match version exactly |
| >version      | Must be greater than version  |
| >=version     |  Must be greater or equals than version |
| 1.2.x         |  1.2.0, 1.2.1, etc., but not 1.3.0 |