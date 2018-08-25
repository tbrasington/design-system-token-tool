import React, {Component} from 'react'
import {render} from 'react-dom'
import { MemoryRouter , Route, Switch } from 'react-router-dom'
import fs from 'fs'
import Store from 'electron-store';
import styled from 'styled-components'
import {colours } from './DesignSystem'

import {ProjectContext} from './ProjectContext';
import StartScreen from './components/StartScreen'
import Project from './components/Project'
import Style from './components/Style'
import Token from './components/Token'


const store = new Store();


const routes = [
  {
    title: 'Home',
    path: '/',
    component: StartScreen,
    exact:true
  },{
    title: 'Home',
    path: '/home',
    component: StartScreen,
    exact:true
  },
  {
    title: 'Project',
    path: '/project',
    component: Project,
    exact:true
  },
  {
    title: 'Token',
    path: '/Token',
    component: Token,
    exact:true
  },
  {
    title: 'Style',
    path: '/Style',
    component: Style,
    exact:true
  },
]


class App extends Component {
  constructor(props){
    super(props)
 
    const self = this;

    this.openProject = (files, callback) => {

      fs.readFile(files, 'utf8', function (err,data) {
          
          if (err) {
            // todo ; build a notification component
            return console.log(err);
          }

          console.info('open project',JSON.parse(data))
      
          // update the state
          self.setState(state => ({
            projectData: JSON.parse(data),
            projectIsOpen:true,
            projectFile : files
          }), callback());
          
          // update the local store
          store.set({
            projectData : JSON.parse(data),
            projectIsOpen : true,
            projectFile : files
          });
      });
    };
    // closes the project
    this.closeProject = () => {
      self.setState(state => ({
            projectData: null,
            projectIsOpen:false,
            projectFile : ''
          }));
          // update the local store
          store.set({
            projectData: null,
            projectIsOpen:false,
            projectFile : ''
          });
    }

    this.openToken = (data,callback) => {
      
      this.setState(state => ({
        tokenData : data
      }), callback());

      store.set({
        tokenData : data
      })
    }
    this.closeToken = (callback) => {
      this.setState(state => ({
        tokenData : null
      }));
    }
    this.openStyle = () => {
     
    }
    this.closeStyle = () => {
      
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      projectData:store.get('projectData')|| null,
      projectIsOpen:store.get('projectIsOpen') || false ,
      projectFile:store.get('projectFile') || '' ,
      tokenData: store.get('tokenData') || null,
      styleData : store.get('styleData') || null,
      openProject: this.openProject,
      closeProject : this.closeProject,
      openToken : this.openToken,
      closeToken : this.closeToken,
      openStyle : this.openStyle,
      closeStyle : this.closeStyle
    };

  }

  handlePersistance() {      

    console.log(store.get('projectData'))
    console.log(store.get('tokenData'))
    //return '/'
    if(store.get('projectData')!==null && store.get('tokenData')!==null) {
      return '/token'
    } if(store.get('projectData')!==null) {
      return '/project'
    }
    return '/'
  
  }
 
  render() {
 
    return (
      <MemoryRouter initialEntries={[this.handlePersistance()]} >
        <Switch>
          <ProjectContext.Provider value={this.state}>
              <Container>
                <TitleBar/>
                {routes.map((route, i) => <Route key={i} {...route} />)}
              </Container>
          </ProjectContext.Provider>
        </Switch>
      </MemoryRouter>
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
