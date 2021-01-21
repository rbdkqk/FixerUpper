import { useState } from 'react';
import styled from 'styled-components';

export default function TextBox({ id, index, content, handleContentInput }) {
  const [currentContent, setCurrentContent] = useState(content);
  const [areaHeight, setAreaHeight] = useState(30);

  let ghost;

  return (
    <TextBoxContainer
      className={`TextBoxContainer_${id}`}
      areaHeight={areaHeight}
    >
      <GhostDiv
        className={`GhostDiv_${id}`}
        areaHeight={areaHeight}
        ref={(c) => (ghost = c)}
        aria-hidden='true'
      >
        {currentContent}
      </GhostDiv>
      <TextBoxWrap
        className={`TextBoxWrap_${id}`}
        areaHeight={areaHeight}
        onChange={(event) => {
          setCurrentContent(event.target.value);
        }}
        onBlur={() => handleContentInput(id, index, currentContent)}
        onKeyUp={() => {
          let newHeight = ghost.clientHeight;
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

  /* border: 1px solid black; */
  margin: 3px;
  position: relative;
`;

const GhostDiv = styled.div`
  border: none;
  width: 100%;
  outline: none;
  min-height: ${(props) => `${props.areaHeight}px`};
  padding: 0;
  box-shadow: none;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden; // Removes scrollbar
  position: absolute;
  font-size: 18px;
  line-height: 1.5em;
  font-family: Georgia, 'Malgun Gothic', serif;
`;

const TextBoxWrap = styled.textarea`
  /* border: 1px solid black; */
  border: none;
  outline: none;

  width: 100%;
  outline: none;
  height: ${(props) => `${props.areaHeight}px`};
  padding: 0;
  box-shadow: none;
  display: block;
  overflow: hidden; // Removes scrollbar
  position: absolute;
  resize: none;
  font-size: 18px;
  line-height: 1.5em;
  font-family: Georgia, 'Malgun Gothic', serif;
`;
