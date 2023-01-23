import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

const GET_TODOS = gql`
  query todoList {
    todoList
  }
`

const Todos = () => {
  const [addTodo, setAddTodo] = useState('');

  const {data} = useQuery(GET_TODOS);

  const onChange = (e) => {
    setAddTodo(e.target.value)
  }

  return (
    <Wrap>
      <h2>투두리스트 ({data?.todoList.todoList.length})</h2>

      <StyledInput
        type='text'
        name='addTodo'
        value={addTodo}
        placeholder='할 일 추가'
        onChange={onChange}
      />
      <button> 추가 </button>

      {data?.todoList.todoList.map((todo) => 
        <StyledList key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.complete === true ? '⭕️' : '💤'}</div>
          <div>{todo.title}</div>
          <div>{todo.user.name}님</div>
        </StyledList>
      )}
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
  margin: 1vh;
  border: 2px solid #888;
  width: 50vh;
  font-size: 2vh;
`

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 40% 30%;
  width: 70vh;
  padding: 1vh;
  border: 2px solid #777;
  border-width: 0 0 2px 0;
`

export default Todos