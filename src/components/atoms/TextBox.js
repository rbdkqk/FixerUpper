import { useState, useEffect } from 'react';
import styled from 'styled-components';
import autosize from 'autosize';

export default function TextBox({ id, index, content, handleContentInput }) {
  const [currentContent, setCurrentContent] = useState(content);
  const [areaHeight, setAreaHeight] = useState(25);

  /*  참고한 링크
    document.activeElement : https://stackoverflow.com/questions/9991990/get-id-of-focused-element-using-javascript/9992103
    getInputSelection 함수 : https://stackoverflow.com/questions/3053542/how-to-get-the-start-and-end-points-of-selection-in-text-area
  */
  function getInputSelection(el) {
    var start = 0,
      end = 0,
      normalizedValue,
      range,
      textInputRange,
      len,
      endRange;

    if (
      typeof el.selectionStart == 'number' &&
      typeof el.selectionEnd == 'number'
    ) {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      range = document.selection.createRange();

      if (range && range.parentElement() === el) {
        len = el.value.length;
        normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end,
    };
  }

  // 아래와 같은 경고가 뜨는데, 좀 더 찾아보고 수정할 것
  // 경고 : React Hook useEffect has a missing dependency: 'id'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps
  useEffect(() => {
    autosize(document.querySelector(`.TextBoxWrap_${id}`));
  }, [currentContent]);

  return (
    <TextBoxContainer
      className={`TextBoxContainer_${id}`}
      areaHeight={areaHeight}
      onClick={() => {
        document.querySelector(`.TextBoxContainer_${id}`).focus();
      }}
    >
      <TextBoxWrap
        className={`TextBoxWrap_${id}`}
        // ref={c => (this.textarea = c)}
        areaHeight={areaHeight}
        onChange={(event) => {
          setCurrentContent(event.target.value);
        }}
        onBlur={() => handleContentInput(id, index, currentContent)}
        onKeyUp={() => {
          let newHeight = document.querySelector(`.TextBoxWrap_${id}`)
            .clientHeight;
          setAreaHeight(newHeight);
        }}
        onMouseUp={() => {
          // 수정/보완 필요함 : textarea 사용할 수 없으므로, div(contenteditable) 태그로 변경해야 함
          let whole = window.getSelection();
          if (!whole) return;

          let wholeText = whole.anchorNode.childNodes[0].defaultValue;
          let selectedText = whole.toString();

          console.log({ currentContent, wholeText, selectedText });

          let { start, end } = getInputSelection(document.activeElement);

          let before = currentContent.slice(0, start);
          let after = currentContent.slice(end, currentContent.length);

          console.log({ before, after });

          let editedText = `${(
            <span style={{ color: 'red' }}>selectedText</span>
          )}`;

          document.querySelector(`.TextBoxWrap_${id}`).value = editedText;

          // setCurrentContent(before + editedText + after);

          // ==================================================================

          // textarea 의 내용을 앞뒤로 잘라내고, 그 사이에 '편집된 문자열을 태그로 감싸서' 끼워넣으려 했음
          // 아래 글에 따르면, textarea에서는 불가능하다고 함
          // div 태그의 contenteditable 속성을 이용하라고 한다... 구조를 바꿔야 할 듯
          // https://stackoverflow.com/questions/4705848/rendering-html-inside-textarea
        }}
        value={currentContent}
      ></TextBoxWrap>
    </TextBoxContainer>
  );
}

const TextBoxContainer = styled.div`
  max-width: 890px;
  width: 100%;
  height: ${(props) => `${props.areaHeight}px`};

  border: 1px solid black;
  margin: 3px;
  padding: 2px;
`;

const TextBoxWrap = styled.textarea`
  /* border: 1px solid black; */
  box-sizing: 'border-box';
  border: none;
  outline: none;

  width: 100%;
  min-height: 20px;
  height: 20px;

  /* padding: 2x; */
  box-shadow: none;
  display: block;
  overflow: hidden; // Removes scrollbar
  resize: none;
  font-size: 18px;
  /* line-height: 1.5em; */
  /* font-family: Georgia, 'Malgun Gothic', serif; */
`;
