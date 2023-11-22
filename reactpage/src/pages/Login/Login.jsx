import React, { useState } from 'react'
import * as L from './Login.style'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [EmailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [active, setActive] = useState(false)

  

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.currentTarget.value && password) {
      setEmailError("")
      setActive(true)
    }
    if (!event.currentTarget.value && !password) {
      setActive(false)
    }
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.currentTarget.value && email) {
      setPasswordError("")
      setActive(true)
    }
    if (!event.currentTarget.value && !email) {
      setActive(false)
    }
  } 

  const onClickSubmit = () => {
    if (!email) {
      setEmailError("* 이메일을 입력해주세요.")
    } 
    if (!password) {
      setPasswordError("* 비밀번호를 입력해주세요.")
    }
  }

  return (
    <>
      <L.Wrapper>
        <L.LoginForm>
          <L.Title>이메일과 비밀번호를 입력해주세요.</L.Title>
          
          <L.InputDiv>
            <L.Text>이메일</L.Text>
            <L.InputBox onChange={onChangeEmail}/>
            <L.ErrorMessage>{EmailError}</L.ErrorMessage>
          </L.InputDiv>
          
          <L.InputDiv>
            <L.Text>비밀번호</L.Text>
            <L.InputBox onChange={onChangePassword} type="password" />
            <L.ErrorMessage>{passwordError}</L.ErrorMessage>
          </L.InputDiv>

          <L.SubmitBtn style={{ backgroundColor: active ? '#234252' : '#11256737' }} onClick={onClickSubmit}>로그인</L.SubmitBtn>
        </L.LoginForm>
      </L.Wrapper>
    </>
  )
}
