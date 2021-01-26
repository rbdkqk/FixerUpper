import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextBox } from '../atoms';

export default function ContentsArea() {
  // 현재 나열된 TextBox들의 목록
  // 기본적으로 TextBox 객체 하나가 들어가 있는 상태여야 하지 않나?
  const [textList, setTextList] = useState([
    {
      id: 0,
      type: 'contents',
      index: 0,
      content: '',
    },
  ]);

  const [newTextBoxAdded, setNewTextBoxAdded] = useState(false);

  // textBoxIds를 위해, id들을 모아 만든 배열을 구하기
  const getIdsArray = () => {
    return textList.map((eachTextBox) => eachTextBox.id);
  };

  // TextBox들의 id만을 모은 배열 :
  const [textBoxIds, setTextBoxIds] = useState(getIdsArray());

  // 키보드 이벤트를 체크해서 아래 두 함수 중 어떤걸 실행할지 결정하는 함수
  // TextBox에 내려줘야 한다
  const getPressedKey = () => {};

  // 엔터 누르면 다음 TextBox 컴포넌트를 맨 뒤에 붙이는 함수
  const addNextTextBox = () => {};

  // shift+enter 누르면 현재 TextBox의 다음 줄로 넘기는 (enter의 원래 기능) 함수
  const addNextLine = () => {};

  // 여백이나 패딩을 클릭하면 어떻게 동작할지 결정하는 함수
  const handleBlankAreaClick = () => {
    if (textList[textList.length - 1].content.length > 0) {
      let nextId = Math.max.apply(null, textBoxIds) + 1;

      // textBoxIds에 다음 id를 추가하고,
      setTextBoxIds([...textBoxIds, nextId]);

      // textList 맨 뒤에, 새로운 TextBox 객체를 추가하고
      setTextList([
        ...textList,
        {
          id: nextId,
          type: 'contents',
          index: textList.length,
          content: '',
        },
      ]);

      setNewTextBoxAdded(true);
    }
  };

  // 각 TextBox의 content 내용 입력 반영하기
  const handleContentInput = (id, index, content) => {
    let before = textList.slice(0, index);
    let after = textList.slice(index + 1);
    setTextList([
      ...before,
      {
        id: id,
        type: 'contents',
        index: index,
        content: content,
      },
      ...after,
    ]);
  };

  // ContentsAreaWrap 안에 나열될 개별 TextBox들의 모임
  let contentsList = textList.map((eachTextBox) => {
    return (
      <TextBox
        key={eachTextBox.id}
        id={eachTextBox.id}
        index={eachTextBox.index}
        content={eachTextBox.content}
        handleContentInput={handleContentInput}
      />
    );
  });

  useEffect(() => {
    // 새 TextBox가 추가되면, 가장 밑의 TextBox에 focus 주기
    if (newTextBoxAdded) {
      document
        .querySelector(`.TextBoxWrap_${textList[textList.length - 1].id}`)
        .focus();
      setNewTextBoxAdded(false);
    }
  }, [newTextBoxAdded]);

  return (
    <ContentsAreaWrap
      className='ContentsAreaWrap'
      onClick={(e) => {
        let targetClassName = e.target.className;
        let TextBoxWrapIndex = targetClassName.indexOf('TextBoxWrap');

        if (TextBoxWrapIndex !== -1) {
          let TextBoxWrapClassName = targetClassName.slice(TextBoxWrapIndex);
          document.querySelector(`.${TextBoxWrapClassName}`).focus();
        } else {
          handleBlankAreaClick();
        }
      }}
    >
      {contentsList}
    </ContentsAreaWrap>
  );
}

const ContentsAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  width: 900px;
  max-width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30vh;
  border: 1px solid red;
`;
