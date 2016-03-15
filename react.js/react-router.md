##React router

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.


###Installation
```sh
npm install --save react-router
```


###Include in project
```javascript
// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'
```


###Example

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

const Home = React.createClass({render: function() {return (<h1>Home</h1>)}})
const About = React.createClass({render: function() {return (<h1>About</h1>)}})
const Inbox = React.createClass({render: function() {return (<h1>Inbox</h1>)}})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('root'));
```

React Router knows how to build nested UI for us, so we don't have to manually figure out which <Child> component to render. For example, for a full path /about it would build <App><About /></App>.

Each <Route> will render its respective component when its path matches the URL. Only one of these three components will be rendered into the 'root' at any given time. With this strategy, we mount the router to the DOM 'root' once, then the router swap components in and out with route changes.



<br>**Use \<Link> not \<a>**

When creating anchors for your routes, you'll need to use `<Link to="">` instead of `<a href="">`. Don't worry though, when using the `<Link>` component, React Router will ultimately give you an ordinary anchor in the DOM. Using `<Link>` though is necessary for React Router to do some of its routing magic.


---

###More info
[https://github.com/reactjs/react-router/tree/master/docs/guides](https://github.com/reactjs/react-router/tree/master/docs/guides)

[https://github.com/reactjs/react-router-tutorial](https://github.com/reactjs/react-router-tutorial)

[https://css-tricks.com/learning-react-router/](https://css-tricks.com/learning-react-router/)