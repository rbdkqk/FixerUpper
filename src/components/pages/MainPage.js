import { useState } from 'react';
import styled from 'styled-components';
import { TitleArea, ContentsArea } from '../templates';

export default function MainPage() {
  const [modalControl, setModalControl] = useState(false);

  const controlTextEditModal = () => {
    setModalControl(true);
  };

  return (
    <MainPageWrap className='MainPage'>
      <TitleArea controlTextEditModal={controlTextEditModal} />
      <ContentsArea
        modalControl={modalControl}
        setModalControl={setModalControl}
      />
    </MainPageWrap>
  );
}

// 여기서 issue 버튼에 대응하는 함수 등이 작성되어야 한다.
// 그러므로 상태관리 역시 여기서 다 진행한다

const MainPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  margin: 0;
  border: 1px solid black;
  height: 100vh;

  /* box-sizing: border-box; */
`;
