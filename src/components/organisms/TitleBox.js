import styled from 'styled-components';
import { TitleInput } from '../atoms';

export default function TitleBox() {
  return (
    <TitleBoxWrap className='TitleBoxWrap'>
      <TopBlankArea className='TopBlankArea' />
      <TitleInput size={40} />
    </TitleBoxWrap>
  );
}

const TitleBoxWrap = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  max-width: 100%;
  width: 900px;

  border: 1px solid red; // 이건 나중에 지울 옵션
`;

// TopBlankArea는 나중에 다른 용도로 쓸 수도 있을 듯
const TopBlankArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-bottom: 5px;
  height: 25px;

  border: 1px solid red; // 이건 나중에 지울 옵션
`;
