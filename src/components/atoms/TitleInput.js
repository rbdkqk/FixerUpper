import React, { useState } from 'react';
import styled from 'styled-components';

export default function TitleInput({ size }) {
  const [titleContent, setTitleContent] = useState('');

  return (
    <TitleInputWrap className='TitleInputWrap'>
      <TitleInputBox
        className='TitleInputBox'
        size={size}
        onChange={(e) => setTitleContent(e.target.value)}
      />
    </TitleInputWrap>
  );
}

const TitleInputWrap = styled.div`
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
  cursor: text;
`;

const TitleInputBox = styled.input.attrs({
  placeholder: 'Title',
})`
  margin: 5px 0px;
  border: none;
  outline: none;
  width: 100%;
  height: ${(props) => `${props.size}px`};
  font-size: ${(props) => `${props.size}px`};
  font-weight: 700;
  line-height: 1.2;
  display: inline-block;
`;

// const TitleInputBox = styled.span`
//   margin: 5px 0px;
//   border: none;
//   outline: none;
//   height: ${(props) => `${props.size}px`};
//   font-size: ${(props) => `${props.size}px`};
//   display: inline-block;
//   &:empty::before {
//     content: 'Title';
//     color: grey;
//     display: inline-block;
//   }
//   &:empty:focus::before {
//     content: 'Title';
//     color: grey;
//   }
// `;

// 참고한 글 : https://stackoverflow.com/questions/26960417/when-a-span-element-contains-no-text-fill-with-placeholder-text
// 참고한 글 : http://jsfiddle.net/davidThomas/rwmoehsc/3/
