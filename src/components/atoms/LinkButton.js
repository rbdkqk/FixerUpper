import styled from 'styled-components';

export default function LinkButton({ hasLink, size }) {
  return (
    <LinkButtonWrap
      className='LinkButtonWrap'
      onClick={() =>
        console.log('상위 컴포넌트의 link 토글기능을 여기다 넣을 것')
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
          color: hasLink ? 'skyblue' : 'black',
        }}
      >
        <path
          d='M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6'
          stroke='currentColor'
        ></path>
      </svg>
    </LinkButtonWrap>
  );
}

const LinkButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;
