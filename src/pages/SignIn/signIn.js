import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/feature/userSlice'
import styled from 'styled-components'

const SIGN_IN = gql`
  query signIn($name: String!, $password:String!) {
    signIn(name: $name, password: $password)
  }
`

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({ name: "", password: "" });
  const [confirm, setConfirm] = useState(false)

  const {loading, error, data} = useQuery(SIGN_IN, {
    skip: confirm === false,
    fetchPolicy: "no-cache",
    variables: {
      name: userInfo.name,
      password: userInfo.password
    }
  })

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSignin = () => {
    setConfirm(true)
  }

  if (loading) {
    return <>'로딩 중'</>
  }
  if (error) {
    setConfirm(false)
    alert('아이디와 비밀번호를 확인해주세요.')
  }
  if (data?.signIn.status === "ok") {
    setConfirm(false)
    dispatch(login(userInfo.name))
    setUserInfo({ name: "", password: "" })
    navigate('/todos')
  }

  return (
    <Wrap>
      <StyledInput
        name="name"
        value={userInfo.name}
        placeholder='아이디'
        type='text'
        onChange={onChange} />
      <StyledInput
        name="password"
        value={userInfo.password}
        placeholder='비밀번호'
        type='password'
        onChange={onChange} />

      <StyledButton onClick={onClickSignin}>
        확인
      </StyledButton>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vh;
`;

const StyledInput = styled.input`
  padding: 1vh;
  margin: 0.5vh;
  border: 2px solid #888;
  width: 25vh;
  font-size: 4vh;
`

const StyledButton = styled.button`
  background: #888;
  border: none;
  color: #fff;
  padding: 1vh;
  margin: 0.5vh;
  width: 27.5vh;
  font-size: 4vh;

  &:hover {
    background: #880217;
  }
`

export default SignIn