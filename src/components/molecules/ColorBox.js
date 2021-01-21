import styled from 'styled-components';
import { TextColorButton } from '../atoms';

export default function ColorBox({ isShow }) {
  // 아래 두 배열을 상위에서 받아오되,x
  // 그걸 useState로 관리해서 클릭 여부를 결정하면 좋지 않을까?
  // 근데 그 개별 컴포넌트가 클릭되었다는걸 상위헤서 어떻게 체크하지? : useEffect로 가능할까?
  // 현재 색깔을 체크해서 동일할때만 '클릭되었음' 항목이 true로 내려가야 할 듯
  let textColorButtonList = [
    // 글자 색상
    {
      label: 'Black Text',
      fontColor: 'black',
      backgroundColor: 'white',
      size: 20,
    },
    {
      label: 'Red Text',
      fontColor: 'red',
      backgroundColor: 'white',
      size: 20,
    },
    {
      label: 'Green Text',
      fontColor: 'green',
      backgroundColor: 'white',
      size: 20,
    },
    {
      label: 'Blue Text',
      fontColor: 'blue',
      backgroundColor: 'white',
      size: 20,
    },
  ];

  let backgreoundColorButtonList = [
    // 배경 색상
    {
      label: 'Black Background',
      fontColor: 'white',
      backgroundColor: 'black',
      size: 20,
    },
    {
      label: 'Red Background',
      fontColor: 'white',
      backgroundColor: 'red',
      size: 20,
    },
    {
      label: 'Green Background',
      fontColor: 'white',
      backgroundColor: 'green',
      size: 20,
    },
    {
      label: 'Blue Background',
      fontColor: 'white',
      backgroundColor: 'blue',
      size: 20,
    },
  ];

  return (
    <ColorBoxWrap className='ColorBoxWrap' isShow={isShow}>
      <TextColorList className='TextColorList'>
        {textColorButtonList.map((textBtn, index) => {
          return (
            <TextColorButton
              key={index}
              label={textBtn.label}
              fontColor={textBtn.fontColor}
              backgroundColor={textBtn.backgroundColor}
              size={textBtn.size}
            />
          );
        })}
      </TextColorList>
      <BackgroundColorList className='BackgroundColorList'>
        {backgreoundColorButtonList.map((backgroundBtn, index) => {
          return (
            <TextColorButton
              key={index}
              label={backgroundBtn.label}
              fontColor={backgroundBtn.fontColor}
              backgroundColor={backgroundBtn.backgroundColor}
              size={backgroundBtn.size}
            />
          );
        })}
      </BackgroundColorList>
    </ColorBoxWrap>
  );
}

const ColorBoxWrap = styled.div`
  display: ${(props) => (props.isShow ? 'inline' : 'none')};
  position: absolute;
  z-index: 1px;
  padding: 5px;
  cursor: pointer;

  border: 1px solid black;
  border-radius: 5px;
`;

const TextColorList = styled.div`
  margin: 3px;
  padding: 2px;

  border: 1px solid black;
`;

const BackgroundColorList = styled.div`
  margin: 3px;
  padding: 2px;

  border: 1px solid black;
`;
