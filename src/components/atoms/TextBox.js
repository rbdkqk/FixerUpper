import { useState } from 'react';
import styled from 'styled-components';
import { MediaButton } from '../organisms';

export default function TextBox({
  id,
  index,
  content,
  handleContentInput,
  setModalState,
  handle_blockedText,
}) {
  // const [currentContent, setCurrentContent] = useState(content);
  // const [areaHeight, setAreaHeight] = useState(25);

  // 아래와 같은 경고가 뜨는데, 좀 더 찾아보고 수정할 것
  // 경고 : React Hook useEffect has a missing dependency: 'id'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // useEffect(() => {
  //   autosize(document.querySelector(`.TextBoxWrap_${id}`));
  // }, [currentContent]);

  return (
    <TextBoxWrapContainer>
      <MediaButton></MediaButton>
      <TextBoxWrap
        className={`TextBoxWrap_${id}`}
        contentEditable={true}
        onInput={(e) => {
          // onChange 기능이 없으므로 이걸로 대신함
          // 의문 : '매 글자 입력시마다 이 함수가 작동하므로 굉장히 비효율적이지 않을까?'
          // 그래서 onBlur로 focus가 빠질때만 작동하도록 하는 것을 고려했었음
          // 추가 의문 : onBlur를 아래와 같이 innerHTML을 보내도록 수정하니까, onInput/useState가 필요없어진 것 같다...?
          // => 그래서 일단 주석처리하고, issue로 남김
          // setCurrentContent(e.currentTarget.innerHTML);
          // handleContentInput(id, index, e.currentTarget.innerHTML);
        }}
        onBlur={(e) => handleContentInput(id, index, e.currentTarget.innerHTML)}
        onMouseUp={() => {
          handle_blockedText(id, index);
        }}
      ></TextBoxWrap>
    </TextBoxWrapContainer>
  );
}

const TextBoxWrapContainer = styled.div`
  max-width: 950px;
  width: 100%; // 이걸 100%으로 주면 들여쓰기처럼 보이는 문제가 있어서 고민 / 110% 등을 주면 괜찮지만, 그래도 될지 모르겠다
  display: flex;
`;

const TextBoxWrap = styled.div`
  max-width: 890px;
  width: 100%;
  display: inline-block;
  min-height: 25px;

  border: 1px solid black;
  outline: none;

  overflow: hidden; // Removes scrollbar
  font-size: 18px;
  /* line-height: 1.5em; */
  /* font-family: Georgia, 'Malgun Gothic', serif; */
`;
