import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextBox } from '../atoms';
import { EditBoxModal } from '../organisms';

export default function ContentsArea({ modalControl, setModalControl }) {
  class EachTextParagraph {
    constructor(id, type, index, content) {
      this.id = id;
      this.type = type;
      this.index = index;
      this.content = content;
    }
  }

  const [modalState, setModalState] = useState({
    isShow: false,
    x: 0,
    y: 0,
    textBoxId: NaN,
    textBoxIndex: NaN,
  });

  const closeTextEditModal = () => {
    setModalState({
      isShow: false,
      x: 0,
      y: 0,
      textBoxId: NaN,
      textBoxIndex: NaN,
    });
  };

  // 현재 나열된 TextBox들의 목록
  // 기본적으로 TextBox 객체 하나가 들어가 있는 상태여야 하지 않나?
  const [textList, setTextList] = useState([
    new EachTextParagraph(0, 'contents', 0, ``),
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
  const handleBlankAreaClick = (innerText) => {
    console.log({ innerText });
    if (innerText.length > 0) {
      let nextId = Math.max.apply(null, textBoxIds) + 1;

      // textBoxIds에 다음 id를 추가하고,
      setTextBoxIds([...textBoxIds, nextId]);

      // textList 맨 뒤에, 새로운 TextBox 객체를 추가하고
      setTextList([
        ...textList,
        new EachTextParagraph(nextId, 'contents', textList.length, ``),
      ]);

      setNewTextBoxAdded(true);

      closeTextEditModal();
    } else {
      // innerText가 없다면 (선택된 문자열이 없는 상황이라면 : 바깥의 빈 공간을 클릭했다면,)
      // -> 문자 꾸미기 모달을 닫는다
      closeTextEditModal();
    }
  };

  // 각 TextBox의 content 내용 입력 반영하기
  const handleContentInput = (id, index, content) => {
    let before = textList.slice(0, index);
    let after = textList.slice(index + 1);
    setTextList([
      ...before,
      new EachTextParagraph(id, 'contents', index, content),
      ...after,
    ]);
  };

  const getSelectedRange = () => {
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

    return { range, selectedText };
  };

  const [oldSelectedText, setOldSelectedText] = useState('');

  // 각 TextBox에서 onMouseUp으로 처리하던 것을, ContentArea에서 통합 처리하도록 변경함
  const handle_blockedText = (textBoxId, textBoxIndex) => {
    let { range, selectedText } = getSelectedRange();

    // console.log({ selectedText });

    // Getting selected text position (stackoverflow 글)
    // https://stackoverflow.com/questions/5176761/getting-selected-text-position
    let { x, y } = range.getBoundingClientRect();

    // console.log({ x, y });

    if (selectedText.length > 0) {
      setModalState({
        isShow: true,
        x: x,
        y: y,
        textBoxId: textBoxId,
        textBoxIndex: textBoxIndex,
      });
    } else {
      closeTextEditModal();
    }

    console.log({ selectedText, oldSelectedText });

    // 문제점 : 선택한 문자열 블록 위를 다시 클릭해도 모달이 닫히지 않는 문제가 있었음
    // useState로 비교할 값을 정해놓고, 이 값이 변하지 않았다면 모달을 닫도록 처리함
    // 값이 변한 경우에 닫히는 부분은 바로 위에 else 안에 있음
    if (oldSelectedText === selectedText) {
      console.log({ selectedText, oldSelectedText });
      closeTextEditModal();
    }

    setOldSelectedText(selectedText);
  };

  const decorateText = (type, isToggled, textBoxId, textBoxIndex, color) => {
    let { range, selectedText } = getSelectedRange();

    // console.log({ isToggled, selectedText });

    // 꾸미기를 위한 태그를 span으로 사용해서 그런건지,
    // div로 나뉜 여러줄을 한번에 수정하면, 여러줄이었던 문장이 한줄로 통합되어 버린다
    // issue로 남겨두었으며, 추후 수정 필요함 (span이 아닌 다른 태그를 써야 할까?)
    let newElement = document.createElement('span');
    newElement.innerHTML = selectedText;

    // 기존의 문제 : 매번 새로운 newElement를 선언하고 그 자리에 끼워넣을 뿐이었으므로, 기존 편집한 사항이 유지되지 않는 문제가 있었음
    // 만약 앞서 편집한 적이 있다면, (편집을 했었다면 span이 들어갔을테니 children이 존재할 것임)
    if (range.commonAncestorContainer.children) {
      let childrenNodes = range.commonAncestorContainer.children;
      // 선택한 글자와 같은 글자를 가진 span을 찾아서, 그 style을 newElement에 복사한다
      // 문제점 : 편집한 것과 동일한 블록을 잡는다면 괜찮은데, 편집하지 않은 부분이나 다른 편집을 가진 부분과 겹쳐서 선택하는 경우에는 편집이 덮어띄워진다 - 즉, 편집의 교집합이 동작하지 않는 문제를 해결해야 함
      // 추가개선 필요사항 : 각 편집 버튼의 색상을 주는 방법을 좀 변경해야 한다
      for (let i = 0; i < childrenNodes.length; i++) {
        if (childrenNodes[i].innerText === selectedText) {
          newElement.style.fontWeight = childrenNodes[i].style.fontWeight;

          newElement.style.fontStyle = childrenNodes[i].style.fontStyle;

          newElement.style.textDecoration =
            childrenNodes[i].style.textDecoration;
        }
      }
    }

    // 각 버튼의 type마다 다르게 작동하도록 의도함
    // 색상변경은 EditBox에도 아직 없음
    if (type === 'Link') {
      // 링크 버튼은 어떻게 처리할지 별도 구상이 필요함
      console.log('Link button clicked');
    } else if (type === 'Bold') {
      isToggled
        ? (newElement.style.fontWeight = 'bold')
        : (newElement.style.fontWeight = 'normal');
    } else if (type === 'Italic') {
      isToggled
        ? (newElement.style.fontStyle = 'italic')
        : (newElement.style.fontStyle = 'normal');
    } else if (type === 'UnderLine') {
      isToggled
        ? (newElement.style.textDecoration = 'underline')
        : (newElement.style.textDecoration = 'none');
    }
    // 'StrikeThrough : textDecoration을 사용해야 하는 점이 UnderLine과 겹쳐서, 일단 주석처리했음'
    // else if (type === 'StrikeThrough') {
    //   newElement.style.textDecoration = 'line-through;';
    // }

    // 문제점 : 여러 개의 style을 중복 적용하려면 어떻게 해야 할까? : issue #48 남겼음

    if (newElement.innerHTML) {
      range.deleteContents(); // 블록 잡은 대상을 지우고
      range.insertNode(newElement); // 그 위치에 새롭게 만든 'newElement' html엘리먼트를 끼워넣는다
    }
    let decoratedText = document.querySelector(`.TextBoxWrap_${textBoxId}`)
      .innerHTML;

    console.log({ decoratedText });
    let before = textList.slice(0, textBoxIndex);
    let after = textList.slice(textBoxIndex + 1);

    setTextList([
      ...before,
      new EachTextParagraph(textBoxId, 'contents', textBoxIndex, decoratedText),
      ...after,
    ]);
  };

  // ContentsAreaWrap 안에 나열될 개별 TextBox들의 모임
  let contentsList = textList.map((eachTextBox, index) => {
    return (
      <TextBox
        key={eachTextBox.id}
        id={eachTextBox.id}
        index={eachTextBox.index}
        content={eachTextBox.content}
        handleContentInput={handleContentInput}
        setModalState={setModalState}
        handle_blockedText={handle_blockedText}
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

  useEffect(() => {
    if (modalControl) {
      closeTextEditModal();
      setModalControl(false);
    }
  }, [modalControl]);

  return (
    <>
      <ContentsAreaWrap
        className='ContentsAreaWrap'
        onClick={(e) => {
          let targetClassName = e.target.className;
          let TextBoxWrapIndex = targetClassName.indexOf('TextBoxWrap');

          if (TextBoxWrapIndex !== -1) {
            let TextBoxWrapClassName = targetClassName.slice(TextBoxWrapIndex);
            document.querySelector(`.${TextBoxWrapClassName}`).focus();
          } else {
            let nodeContentsAreaWrap = document.querySelector(
              `.ContentsAreaWrap`
            );
            let childNodes = nodeContentsAreaWrap.childNodes;
            let length = childNodes.length;
            let innerText = childNodes[length - 1].innerText;
            handleBlankAreaClick(innerText);
          }
        }}
      >
        {contentsList}
      </ContentsAreaWrap>
      <EditBoxModal
        isShow={modalState.isShow}
        setModalState={modalState.setModalState}
        x={modalState.x}
        y={modalState.y}
        textBoxId={modalState.textBoxId}
        textBoxIndex={modalState.textBoxIndex}
        decorateText={decorateText}
      />
    </>
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
