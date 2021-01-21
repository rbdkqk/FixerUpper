import styled from 'styled-components';

export default function TextColorButton({
  label, // label은 mousehover로 띄울 설명 툴팁에 사용할 것임
  fontColor,
  backgroundColor,
  size,
}) {
  return (
    <TextColorButtonWrap
      className='TextColorButtonWrap'
      onClick={() => {
        console.log(
          '상위 컴포넌트의 text color 및 text backgroundcolor 토글기능을 여기다 넣을 것'
        );
        console.log(
          '각 컬러버튼을 클릭했을 때, 어떤 text color 및 text backgroundcolor가 적용될 것인지 결정 필요'
        );
      }}
    >
      <svg
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        style={{
          padding: '2px',
          backgroundColor: backgroundColor,
          color: fontColor,
        }}
      >
        <path
          d='M7.5 14V1.5M1.5 5V1.5h12V5m-10 8.5H11'
          stroke='currentColor'
        ></path>
      </svg>
    </TextColorButtonWrap>
  );
}

const TextColorButtonWrap = styled.button`
  border: none;
  outline: none;
  background-color: white;
  margin: 0px 1px;
  padding: 0px;
  cursor: pointer;
`;

// hover 속성으로 label을 띄울 tooltip이 있어야 할 듯
