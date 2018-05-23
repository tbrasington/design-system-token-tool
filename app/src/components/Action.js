import React, {Component} from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {colours,typeStyles,spacing} from '../DesignSystem'

export default class Action extends Component {
    render() {
        return (
            <Container onClick={this.props.clickEvent} showRule={this.props.showRule}>
               {this.props.children}
            </Container>
        )
    }
}

const Container = styled.div`
position:relative;
display:block;
${typeStyles.label3};
color:${colours.midGrey};
padding-bottom: ${spacing*3}px;
cursor:pointer;
transition: color 0.2s ease-in;

:hover {
    color:${colours.lightGrey};
}

::before {
    display:${props=>props.showRule ? 'block' : 'none'};  
    background: ${colours.midGrey};
    content: '  ';
    width: 38px;
    position:relative;
    height:2px;
    top:0;
    left:0;
    margin-bottom: ${spacing*3}px;
}
`

Action.defaultProps = {
    showRule:true
}