## State management in Vue.js


At some point when building applications you will need to begin thinking about how to manage state.
Here we are loading some data from an api and setting it on the local state variable projects:

```javascript

import axios from 'axios'

export default {
  name: 'projects',
  data: function () {
    return {
      projects: []
    }
  },
  methods: {
    loadProjects: function () {
      axios.get('/some/url').then((response) => {
        this.projects = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadProjects()
  }
}

```

In our view template you can simply access the projects array and work with them in the template.


### Vuex
Vuex is a state management pattern + library for Vue.js applications.
It serves as a **centralized store** for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
![](https://raw.githubusercontent.com/vuejs/vuex/dev/docs/en/images/vuex.png)

```javascript

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},  
  modules: {},
});

export default store

```

- **state**:
  This is where you define the data structure for your app and here you can also define an initial state.
  ```javascript
  state: {
    projects: [],
    userProfile: {}
  }
  ```
- **actions**:
  Where you define the calls that will commit changes to your store
  ```javascript
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('/secured/projects').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
  ```
- **mutations**:
  The mutations calls are the only place that the store can be updated.
  ```javascript
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    }
  }
  ```
- **getters**:
  Getters are a way to grab computed data from the store.
  ```javascript
  getters: {
    completedProjects: state => {
      return state.projects.filter(project => project.completed).length
    }
  }
  ```
- **modules**:
  The modules object provides a way to split your store in multiple stores, but allow them to all remain part of the store tree.


---

1. [Vuex on Github](https://github.com/vuejs/vuex)
2. [Gitbook](https://vuex.vuejs.org/en/intro.html)
