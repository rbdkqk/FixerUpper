import styled from 'styled-components';

export default function BoldButton({ isBold, size }) {
  return (
    <BoldButtonWrap
      className='BoldButtonWrap'
      onClick={() =>
        console.log('상위 컴포넌트의 bold 토글기능을 여기다 넣을 것')
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
          color: isBold ? 'skyblue' : 'black',
        }}
      >
        <path
          d='M3.5 7.5h5a3 3 0 100-6H3.58a.08.08 0 00-.08.08V7.5zm0 0h6a3 3 0 110 6H3.59a.09.09 0 01-.09-.09V7.5z'
          stroke='currentColor'
        ></path>
      </svg>
    </BoldButtonWrap>
  );
}

const BoldButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;
