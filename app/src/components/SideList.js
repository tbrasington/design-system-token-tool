import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
 

class SideList extends Component {
   
    renderList(data,eventHandler) {
        let List = [];
        
        Object.entries(data).forEach(([key, item]) => {
            List.push (<ListItem key={String(key)} onClick={eventHandler.bind(this,{key:key,data:item})}>{item.name}</ListItem>)
        });

        return List;
    } 
    render() {
        const {items,eventHandler } = this.props;
        return ( <List>{items && this.renderList(items,eventHandler)}</List> )
    }
}


export default SideList;
 
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
cursor:pointer;
transition: color 0.2s ease-in;
:hover {
    color:${colours.lightGrey};
}
`