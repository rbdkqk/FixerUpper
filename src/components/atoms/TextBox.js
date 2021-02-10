import { useState } from 'react';
import styled from 'styled-components';

export default function TextBox({
  id,
  index,
  content,
  handleContentInput,
  setModalState,
}) {
  const [currentContent, setCurrentContent] = useState(content);
  // const [areaHeight, setAreaHeight] = useState(25);

  // 아래와 같은 경고가 뜨는데, 좀 더 찾아보고 수정할 것
  // 경고 : React Hook useEffect has a missing dependency: 'id'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // useEffect(() => {
  //   autosize(document.querySelector(`.TextBoxWrap_${id}`));
  // }, [currentContent]);

  return (
    <TextBoxWrap
      className={`TextBoxWrap_${id}`}
      contentEditable={true}
      onInput={(e) => setCurrentContent(e.currentTarget.innerText)} // onChange 기능이 없으므로 이걸로 대신함
      onBlur={() => handleContentInput(id, index, currentContent)}
      onMouseUp={() => {
        /*  start, end 위치를 정확히 잡아서 앞뒤 남은것들과 붙여넣는다고 생각해서 작성했던 코드 (그게 아니었던 것 같다)
          let whole = window.getSelection();
          if (!whole) return;

          let wholeText = whole.anchorNode.wholeText;

          let selectedText = whole.toString();

          console.log({ currentContent, wholeText, selectedText });

      
          let selection = window.getSelection();

          let start = selection.anchorOffset;
          let end = selection.focusOffset;

          if (start > end) {
            [start, end] = [end, start];
          }

          console.log({ start, end });

          let before = currentContent.slice(0, start);
          let after = currentContent.slice(end, currentContent.length);

          console.log({ before, after, currentContent });
        */

        // 아래와 같이 하면 start, end 이런것들을 잡을 필요가 없어보이는데?
        // 검색어 : 'how to insert tag in div contenteditable'
        // 참고한 내용 : https://stackoverflow.com/questions/4823691/insert-an-html-element-in-a-contenteditable-element

        // 브라우저에 따라 getSelection 존재 여부 등이 다를 수 있으므로, userSelection을 선언하고 아래와 같이 처리함
        let userSelection;
        if (window.getSelection) {
          userSelection = window.getSelection();
        } else if (document.selection) {
          // should come last; Opera!
          userSelection = document.selection.createRange();
        }

        let range = userSelection.getRangeAt(0);
        let selectedText = userSelection.toString();

        let newElement = document.createElement('span');
        newElement.innerHTML = selectedText;
        newElement.style.color = 'blue'; // 이 부분은 버튼(기능)마다 달라야 한다 (추가수정 필요한 부분)

        range.deleteContents(); // 블록 잡은 대상을 지우고
        range.insertNode(newElement); // 그 위치에 새롭게 만든 'newElement' html엘리먼트를 끼워넣는다

        let decoratedText = document.querySelector(`.TextBoxWrap_${id}`)
          .innerHTML;

        console.log({ decoratedText });
        setCurrentContent(decoratedText);

        // ==================================================================

        // textarea 의 내용을 앞뒤로 잘라내고, 그 사이에 '편집된 문자열을 태그로 감싸서' 끼워넣으려 했음
        // 아래 글에 따르면, textarea에서는 불가능하다고 함
        // div 태그의 contenteditable 속성을 이용하라고 한다... 구조를 바꿔야 할 듯
        // https://stackoverflow.com/questions/4705848/rendering-html-inside-textarea

        // Getting selected text position (stackoverflow 글)
        // https://stackoverflow.com/questions/5176761/getting-selected-text-position
        let { x, y } = range.getBoundingClientRect();

        console.log({ x, y });

        if (selectedText.length > 0) {
          setModalState({
            isShow: true,
            x: x,
            y: y,
          });
        } else {
          setModalState({
            isShow: false,
            x: x,
            y: y,
          });
        }
      }}
      value={currentContent}
    ></TextBoxWrap>
  );
}

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
