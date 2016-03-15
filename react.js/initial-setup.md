##Inital setup

Standar setup with `React`, `ReactDOM` and `React-router`


####package.json
```javascript
{
  "name": "NAME",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {},
  "dependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.7.2",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "react": "^0.14.7",
    "react-dom": "^0.14.7",
    "react-router": "^2.0.1",
    "webpack": "^1.12.14"
  }
}
```

####webpack.config
```javascript
module.exports = {
  entry : './main.js',
  output : {
    path : './',
    filename : 'index.js'
  },
  devServer : {
    inline : true,
    port : 3333
  },
  module: {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : ['es2015', 'react']
        }
      }
    ]
  }
}
```

###Install
cd into the project folder

```
$:>  npm install
```

###Compile
```
$:>  webpack
```


###Watch
```
$:>  webpack-dev-server
```

The app will then be visible on [http://localhost:3333/](http://localhost:3333/)