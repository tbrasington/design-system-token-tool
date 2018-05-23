import React, {Component} from 'react'
import {render} from 'react-dom'
import { HashRouter , Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {colours } from './DesignSystem'

import StartScreen from './components/StartScreen'

const routes = [
  {
    title: 'Home',
    path: '/',
    component: StartScreen,
    exact:true
  }
]

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Container>
          <TitleBar/>
          {routes.map((route, i) => <Route key={i} {...route} />)}
          </Container>
        </Switch>
      </HashRouter>
    )
  }
}

const Container = styled.div`
flex:1;
width:100%;
min-height:100%;
background:${colours.black};
`

const TitleBar = styled.div`
-webkit-user-select: none;
-webkit-app-region: drag;
width:100vw;
height:24px;
position:absolute;
top:0;
left:0;
`
export default App
