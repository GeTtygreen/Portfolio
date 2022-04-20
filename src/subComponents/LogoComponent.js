import React from 'react'
import styledComponents from 'styled-components'
import {DarkTheme} from '../Components/Themes'

const Logo = styledComponents.h1`
display: inline-block; 
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive; 

position: fixed; 
left: 2rem; 
top: 2rem; 
z-index: 3; 
`
const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
       G3Tty
    </Logo>
  )
}

export default LogoComponent
