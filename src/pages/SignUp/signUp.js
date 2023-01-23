import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import styled from 'styled-components'

const SIGN_UP = gql`
  mutation signUp($userInformation: UserInput) {
    signUp(userInformation: $userInformation)
  }
`

const SignUp = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ name: "", password: "" });

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSignUp = () => {
    signUp({
      variables: {
        userInformation: {
          name: userInfo.name,
          password: userInfo.password,
          // mail: userInfo.mail,
        }
      },
    })
  }

  const signUpCompleted = () => {
    setUserInfo({ name: "", password: "", mail: "" })
    alert('회원가입 완료')
    navigate('/login')
  }

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: signUpCompleted
  });

  return (
    <Wrap>
      <StyledInput
        name='name'
        value={userInfo.name}
        placeholder='아이디'
        type='text'
        required
        onChange={onChange} />
      {/* <StyledInput
        name='mail'
        value={userInfo.mail}
        placeholder='이메일'
        type='email'
        required
        onChange={onChange} /> */}
      <StyledInput
        name='password'
        value={userInfo.password}
        placeholder='비밀번호'
        type='password'
        required
        onChange={onChange} />

      <StyledButton onClick={() => onClickSignUp()}>
        가입
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


export default SignUp