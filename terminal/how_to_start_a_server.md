###Easy ways to start a dev server

Python

```
python -m http.server 8888 &
```

Php

```
php -S localhost:8888
```


Ruby

```
ruby -run -e httpd . -p 8888
```


Node http server

```
npm install http-server -g
http-server -p 8888
```


Live reload and watch

```
npm install lr-http-server -g
lr-http-server -p 8888 -w
```


BrowserSync CLI

```
npm install browser-sync -g
browser-sync start --server --no-notify --port 8888
```