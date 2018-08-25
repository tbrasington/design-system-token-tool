import React, {Component} from 'react'
import styled from 'styled-components'
import {colours,typeStyles,spacing} from '../DesignSystem'
export default class Modal extends Component {
    render() {
        return (
            <Container>
                <Close onClick={this.props.clickEvent}>Close</Close>
                <Content>{this.props.children}</Content>
            </Container>

            
        )
    }
}

const Container = styled.div`
with:100%;
max-width:540px;
height:100%;
max-height: 400px;
background:${colours.black};
box-shadow: 0 0 5px 0 #232323;
display:flex;
flex-direction:column;
`

const Close = styled.div`
cursor:pointer;
transition: color 0.2s ease-in;
width:80px;
height:44px;
${typeStyles.label6};
color:${colours.darkGrey};
:hover {
    color:${colours.lightGrey};
}`

const Content = styled.div`
width:100%;
height:auto;
flex:1;
`