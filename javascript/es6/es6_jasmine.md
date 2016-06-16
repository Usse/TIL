##ES6 Jasmine

```bash
$ npm install --save babel-cli babel-preset-es2015
$ npm install --save-dev jasmine
```

.babelrc:

```json
{
  "presets": ["es2015"]
}
```

package.json:

```json
…
"scripts": {
  "test": "babel-node spec/run.js"
},
…
```

spec/run.js:

```js
import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')
jasmine.execute()
```