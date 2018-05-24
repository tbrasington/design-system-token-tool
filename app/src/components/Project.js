import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'
import BackButton from './BackButton'

class Project extends Component {
   
    getTokens(tokenData) {
        return tokenData.map(token=> {
            return <ListItem>{token.name}</ListItem>
        })
    }

    render() {
        const {projectOpen,projectData,closeProject } = this.props;
        return ( 
          <Container>
            <Heading>{projectData.name}</Heading>
            <BackButton clickEvent={()=> { this.props.history.push('/'); closeProject(); }}/>
            <Actions>
                <List>{projectData.tokens.length>0 && this.getTokens(projectData.tokens)}</List>
                <Action>Add Token</Action>
                <Action showRule={false}>Render</Action>
            </Actions>

          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ closeProject,projectData,projectOpen}) => ( <Project {...props} closeProject={closeProject} projectData={projectData} projectOpen={projectOpen}   /> )}
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
const List = styled.ul`
`
const ListItem = styled.li ``
Project.defaultProps = {
    sectionTitle : 'Project Title'
}