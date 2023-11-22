import { Link } from "react-router-dom"
import styled from 'styled-components'

export const Wrapper = styled.div`
  width:1920px;
  height:80px;
  margin: -8px;
  border-bottom: 0.7px solid gray;
  
`
export const MenuDiv = styled.div`
  width:1000px;
  height:80px;
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  
  
`
export const Icon = styled.img`
  width:200px;
  margin-right:70px;
  cursor: pointer;
`
export const MenuElement = styled.div`
  color: white;
  margin-right: 60px;
  font-size: 20px;
  color:inherit;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
`

export const LoginForm = styled.div`
  margin-left: 15px;
`

export const Button = styled.button`
  width:90px;
  height:40px;
  border-radius: 15px;
  cursor: pointer;
`