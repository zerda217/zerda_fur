import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Wrap>
      <MainBanner>
        메인 홍보 배너
      </MainBanner>
      <Notice>

      </Notice>
      <div onClick={() => window.open('https://zerda217.notion.site/7a0a96d6494d47a597b9f5e2af45a807', '_blank')}>
      </div>

    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBanner = styled.div`
  width: 100%;
  height: 15vh;
  margin: 5% 0;
  background: #2dd;
`

const Notice = styled.div`
  width: 100%;
  height: 15vh;
  margin: 2% 0;
  background: #22ffaa;
`

export default index