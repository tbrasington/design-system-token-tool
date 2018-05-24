import React, {Component} from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import {colours,typeStyles,spacing} from '../DesignSystem'
import BackIcon from '../Assets/BackIcon.svg'
export default class BackButton extends Component {
    render() {
        return (
            <Container onClick={this.props.clickEvent}>Back</Container>
        )
    }
}

const Container = styled.div`
${typeStyles.label6};
color:${colours.darkGrey};
cursor:pointer;
transition: color 0.2s ease-in;
padding: ${spacing*2}px ;
background-image:url(${BackIcon});
background-repeat:no-repeat;
background-position:left center;
width:80px;
:hover {
    color:${colours.lightGrey};
}
`