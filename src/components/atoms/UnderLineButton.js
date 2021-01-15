import styled from 'styled-components';

export default function UnderLineButton({ isUnderLine, size }) {
  return (
    <UnderLineButtonWrap
      className='UnderLineButtonWrap'
      onClick={() =>
        console.log('상위 컴포넌트의 UnderLine 토글기능을 여기다 넣을 것')
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
          color: isUnderLine ? 'skyblue' : 'black',
        }}
      >
        <path
          d='M2 13.5h11M3.5 1v6.5a4 4 0 108 0V1'
          stroke='currentColor'
        ></path>
      </svg>
    </UnderLineButtonWrap>
  );
}

const UnderLineButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;
