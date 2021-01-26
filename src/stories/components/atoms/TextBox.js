import { useState, useEffect } from 'react';
import styled from 'styled-components';
import autosize from 'autosize';

export default function TextBox({ id, index, content, handleContentInput }) {
  const [currentContent, setCurrentContent] = useState(content);
  const [areaHeight, setAreaHeight] = useState(25);

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
