import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Test extends Component {
    render() {
        

        return (
            <div>
               hello Test <Link to='/'>Go to home</Link>
               <Foobar/>
            </div>
        )
    }
}

const Foobar = styled.div`
width:200px;
height:300px;
background:blue;
`