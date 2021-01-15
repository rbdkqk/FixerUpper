import styled from 'styled-components';

export default function ContentsArea() {
  return <ContentsAreaWrap className='ContentsAreaWrap'></ContentsAreaWrap>;
}

const ContentsAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  width: 900px;
  max-width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30vh;
  border: 1px solid red;
`;
