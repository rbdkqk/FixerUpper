import styled from 'styled-components';
import { TitleBox } from '../organisms';

export default function TitleArea() {
  return (
    <TitleAreaWrap
      className='TitleAreaWrap'
      onClick={() => {
        document.querySelector('.TitleInputBox').focus();
      }}
    >
      <TitleBox />
    </TitleAreaWrap>
  );
}

const TitleAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  border: 1px solid blue;
`;

// padding을 포함하는 상단 가로 전체를 차지함
// padding 외의 여백을 클릭해도 title로 포커스가 가야 한다
// 이 컴포넌트에 onClick이 걸려야 할 듯?
