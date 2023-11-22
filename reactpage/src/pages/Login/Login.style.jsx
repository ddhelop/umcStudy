import styled from "styled-components";

export const Wrapper = styled.div`
  width:1920px;
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const LoginForm = styled.div`
  width: 800px;
  height:400px;
  margin-top:150px;
  padding:30px;
  border-radius:15px;
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const Title = styled.h1``

export const InputDiv = styled.div`
  margin-bottom: 15px;
`

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 4px;
`

export const InputBox = styled.input`
  width: 700px;
  height: 39px;
  padding-left:10px;
  border-radius:7px;
  border: 1px solid black;
`

export const ErrorMessage = styled.p`
  margin:5px;
  color:red;
`

export const SubmitBtn = styled.button`
  margin-top:20px;
  width: 700px;
  height:50px;
  border-radius:15px;
  border:none;
  background-color: #11256737;
  color:white;
  cursor: pointer;
`