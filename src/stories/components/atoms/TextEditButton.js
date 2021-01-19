import styled from 'styled-components';

export default function TextEditButton({ type, isDecorated, size }) {
  let d, stroke;

  if (type === 'Bold') {
    d =
      'M3.5 7.5h5a3 3 0 100-6H3.58a.08.08 0 00-.08.08V7.5zm0 0h6a3 3 0 110 6H3.59a.09.09 0 01-.09-.09V7.5z';
    stroke = 'currentColor';
  } else if (type === 'Italic') {
    d = 'M4 1.5h9m-11 12h9m-2.5-12l-2 12';
    stroke = 'currentColor';
  } else if (type === 'UnderLine') {
    d = 'M2 13.5h11M3.5 1v6.5a4 4 0 108 0V1';
    stroke = 'currentColor';
  } else if (type === 'StrikeThrough') {
    d =
      'M3.5 10A3.5 3.5 0 007 13.5h1.487a3.013 3.013 0 003.013-3.013c0-1.205-.892-2.512-2-2.987M6.08 6.177A2.607 2.607 0 014.5 3.781 2.281 2.281 0 016.781 1.5H8A2.5 2.5 0 0110.5 4M2 7.5h11';
    stroke = 'currentColor';
  } else if (type === 'Link') {
    d =
      'M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6';
    stroke = 'currentColor';
  }

  return (
    <TextEditButtonWrap
      className={`${type}ButtonWrap`}
      onClick={() =>
        console.log(`상위 컴포넌트의 ${type} 토글기능을 여기다 넣을 것`)
      }
    >
      <svg
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        style={{
          padding: '2px',
          backgroundColor: 'white',
          color: isDecorated ? 'skyblue' : 'black',
        }}
      >
        <path d={d} stroke={stroke}></path>
      </svg>
    </TextEditButtonWrap>
  );
}

const TextEditButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0px 1px;
  padding: 0px;
  cursor: pointer;
`;
