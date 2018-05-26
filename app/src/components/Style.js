import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'
import BackButton from './BackButton'

class Project extends Component {
   
    getStyles(tokenData) {
        let tokenList = [];
        
        Object.entries(tokenData).forEach(([key, token]) => {
            tokenList.push (<ListItem key={String(key)}>{token.name}</ListItem>)
        });

        return tokenList;
    }

    render() {
        const {projectData } = this.props;

        console.log(projectData);
        
        return ( 
          <Container>
            <Heading>{projectData.name}</Heading>
            <BackButton clickEvent={()=> { this.props.history.push('/'); closeProject(); }}/>
            <Actions>
                <List>{projectData.tokens && this.getStyles(projectData.tokens)}</List>
                <Action>Add Style</Action>
            </Actions>

          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ projectData}) => ( <Style {...props} projectData={projectData}  /> )}
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
const List = styled.ul`
list-style:none;
padding:0;
margin:0 0 ${spacing*3}px 0;
`
const ListItem = styled.li `
${typeStyles.label1};
color:${colours.midGrey};
padding:0 0 ${spacing}px 0;
margin:0 0 ${spacing}px 0;
`
Project.defaultProps = {
    sectionTitle : 'Project Title'
}