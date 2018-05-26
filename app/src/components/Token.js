import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'
import BackButton from './BackButton'
import SideList from './SideList'

class Token extends Component {
   
    goToStyle(){

    }
 
    render() {
        const {tokenData,closeToken } = this.props;

        
        
        return ( 
          <Container>
            <Heading>{tokenData.data.name}</Heading>
            <BackButton clickEvent={()=> { this.props.history.push('/project'); closeToken(); }}/>
            <Actions>
            <SideList items={tokenData.data.styles} eventHandler={this.goToStyle.bind(this)}/>
                <Action>Add Style</Action>
            </Actions>

          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ projectData, tokenData, closeToken}) => ( <Token {...props} projectData={projectData}  tokenData={tokenData} closeToken={closeToken}/> )}
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
Token.defaultProps = {
}