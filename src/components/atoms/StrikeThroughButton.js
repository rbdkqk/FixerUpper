import styled from 'styled-components';

export default function StrikeThroughButton({ isStrikeThrough, size }) {
  return (
    <StrikeThroughButtonWrap
      className='StrikeThroughButtonWrap'
      onClick={() =>
        console.log('상위 컴포넌트의 StrikeThrough 토글기능을 여기다 넣을 것')
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
          color: isStrikeThrough ? 'skyblue' : 'black',
        }}
      >
        <path
          d='M3.5 10A3.5 3.5 0 007 13.5h1.487a3.013 3.013 0 003.013-3.013c0-1.205-.892-2.512-2-2.987M6.08 6.177A2.607 2.607 0 014.5 3.781 2.281 2.281 0 016.781 1.5H8A2.5 2.5 0 0110.5 4M2 7.5h11'
          stroke='currentColor'
        ></path>
      </svg>
    </StrikeThroughButtonWrap>
  );
}

const StrikeThroughButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;
