import React from 'react'
import * as H from './Header.style'

export default function Header() {
  return (
    <>
      <H.Wrapper>
        <H.MenuDiv>
          <H.Icon src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
          <H.MenuElement>영화</H.MenuElement>
          <H.MenuElement>TV</H.MenuElement>
          <H.MenuElement>프로그램</H.MenuElement>
          <H.MenuElement>인물</H.MenuElement>
        </H.MenuDiv>
      </H.Wrapper>
    </>  
  )
}
