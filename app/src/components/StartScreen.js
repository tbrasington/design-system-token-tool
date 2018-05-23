import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'

const {dialog} = require('electron').remote

class StartScreen extends Component {
    constructor(props){
        super(props)
    }
    openProject() {
        
        let files = dialog.showOpenDialog({
          properties: ['openFile'], 
          filters: [
            {
                name: 'json', 
                extensions: ['json']
            }]
        });

      this.props.loadData(files[0])
    }

    render() {
        const {projectOpen } = this.props;

        console.log(projectOpen)
        return ( 
          <Container>
            <Heading>Design System Token Tool</Heading>
            <Actions>
                <Action>New Project</Action>
                <Action clickEvent={this.openProject.bind(this)} showRule={false}>Open Project</Action>
            </Actions>
          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ loadData,projectData,projectOpen}) => ( <StartScreen {...props} loadData={loadData} projectData={projectData} projectOpen={projectOpen}   /> )}
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
padding-top:${spacing*12}px;
`
