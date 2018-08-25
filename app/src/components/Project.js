import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'
import BackButton from './BackButton'
import SideList from './SideList'
class Project extends Component {
   


    goToToken(itemData){
        // function on app
        //this.
        console.log("go to token")
        console.log(itemData)

        this.props.openToken(itemData,()=>{this.props.history.push('/token')})
    }

    render() {

        const {projectData,closeProject } = this.props;
        
        return ( 
          <Container>
            <Heading>{projectData.name}</Heading>
            <BackButton clickEvent={()=> { this.props.history.push('/'); closeProject(); }}/>
            <Actions>
                <SideList items={projectData.tokens} eventHandler={this.goToToken.bind(this)}/>
                <Action showRule={false}>Render</Action>
            </Actions>

          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ closeProject,projectData,openToken}) => ( <Project {...props} closeProject={closeProject} projectData={projectData} openToken={openToken}  /> )}
  </ProjectContext.Consumer>
);

const Container = styled.div`
padding-top: ${layout_marginTop}px;
padding-left: ${layout_marginLeft}px;
padding-right: ${layout_marginRight}px;
width:100%;
`

const Heading = styled.div`
${typeStyles.label1};
color:${colours.lightGrey};
`

const Actions = styled.div`
padding-top:${spacing*2}px;
`

Project.defaultProps = {
    sectionTitle : 'Project Title'
}