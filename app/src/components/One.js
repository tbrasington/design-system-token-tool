import React, {Component} from 'react'
import {render} from 'react-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class One extends Component {
    render() {
        

        return (
            <div>
               hello world <Link to='/landing'>Go to landing</Link>

               <Foobar/>
            </div>
        )
    }
}

const Foobar = styled.div`
width:200px;
height:300px;
background:red;
`