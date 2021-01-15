import styled from 'styled-components';

export default function ItalicButton({ isItalic, size }) {
  return (
    <ItalicButtonWrap
      className='ItalicButtonWrap'
      onClick={() =>
        console.log('상위 컴포넌트의 Italic 토글기능을 여기다 넣을 것')
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
          color: isItalic ? 'skyblue' : 'black',
        }}
      >
        <path d='M4 1.5h9m-11 12h9m-2.5-12l-2 12' stroke='currentColor'></path>
      </svg>
    </ItalicButtonWrap>
  );
}

const ItalicButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;
