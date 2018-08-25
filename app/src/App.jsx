import React, {Component} from 'react'
import Store from 'electron-store';
import { MemoryRouter , Route, Switch } from 'react-router-dom'
import fs from 'fs'
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
    


  this.openProject = this.openProject.bind(this)
  this.closeProject = this.closeProject.bind(this)
  this.openToken = this.openToken.bind(this)
  this.closeToken = this.closeToken.bind(this)
  this.openToken = this.openToken.bind(this)
  this.openStyle = this.openStyle.bind(this)
  this.closeStyle = this.closeStyle.bind(this)

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
    }
  }



  openProject(files, callback) {
    let that = this;

    fs.readFile(files, 'utf8', function (err,data) {
        
      if (err) {
        console.log(err);
      }
      that.setState(({
        projectData: JSON.parse(data),
        projectIsOpen:true,
        projectFile : files
      }), ()=> {callback()});

        //   // update the local store
     store.set({
       projectData : JSON.parse(data),
       projectIsOpen : true,
       projectFile : files
   });

    });


  //   // update the state


    

}

  // closes the project
  closeProject() {
    this.setState(state => ({
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

  openToken(data,callback)  {
    
    this.setState(state => ({
      tokenData : data
    }), callback());

    store.set({
      tokenData : data
    })
  }
  
  closeToken(callback)  {
    this.setState(state => ({
      tokenData : null
    }));
  }
  openStyle(){
   
  }
  closeStyle()  {
    
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
