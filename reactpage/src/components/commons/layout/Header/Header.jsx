import React from 'react'
import * as H from './Header.style'
import { useNavigate } from "react-router-dom"

export default function Header() {
  const nav = useNavigate();
  const onClickHome = () => {
    nav('/')
  }

  return (
    <>
      <H.Wrapper>
        <H.MenuDiv>
          <H.Icon onClick={onClickHome} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
          <H.MenuElement>
            <H.StyledLink to="/Movie">영화</H.StyledLink>
          </H.MenuElement>

          <H.MenuElement>
            <H.StyledLink to="/TV">TV</H.StyledLink> 
          </H.MenuElement>
          <H.MenuElement>
            <H.StyledLink to="/Program">프로그램</H.StyledLink> 
          </H.MenuElement>
          <H.MenuElement>
            <H.StyledLink to="/Human">인물</H.StyledLink> 
          </H.MenuElement>
        </H.MenuDiv>
      </H.Wrapper>
    </>  
  )
}
