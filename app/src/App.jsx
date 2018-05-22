import React, {Component} from 'react'
import {render} from 'react-dom'
import { HashRouter , Route, Switch } from 'react-router-dom'

import One from './components/One'
import Test from './components/Test'

const routes = [
  {
    title: 'Home',
    path: '/',
    component: One,
    exact:true
  },
  {
    title: 'Landing',
    path: '/landing',
    component: Test,
    exact:true
  },
]

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </HashRouter>
    )
  }
}
export default App
