import React, {Component} from 'react'
import {render} from 'react-dom'
import { HashRouter , Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {colours } from './DesignSystem'

import {ProjectContext} from './ProjectContext';
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
  constructor(props){
    super(props)
 

    this.loadData = (files) => {
      console.log('toggled theme')
      console.log(files)
      this.setState(state => ({
        projectData: 'foo'
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      projectData: {},
      loadData: this.loadData,
    };
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <ProjectContext.Provider value={this.state}>
              <Container>
                <TitleBar/>
                {routes.map((route, i) => <Route key={i} {...route} />)}
              </Container>
          </ProjectContext.Provider>
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
