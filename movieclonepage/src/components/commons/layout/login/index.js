import { useState } from 'react'
import styled from "@emotion/styled"

export default function LoginForm() {
  const [toggle, setToggle] = useState(false)

  const onClickToggle = () => {
    setToggle(!toggle)
  }

  const BtnLogin = styled.button`
    margin-left: 20px;
    margin-right: 15px;
    width:100px;
    height:40px;
    border-radius: 18px;
    font-size:16px;
    font-weight:700;
  `


  return (
    <>
      <BtnLogin onClick={onClickToggle}>{toggle ? "로그인" : "로그아웃"}</BtnLogin>
      <div>{toggle ? "로그인해주세요!":"환영합니다!"}</div>
    </>
  )
}