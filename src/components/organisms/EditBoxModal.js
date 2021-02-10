import { useState } from 'react';
import styled from 'styled-components';
import { EditBox } from '../molecules';

export default function EditBoxModal({ isShow, setModalState, x, y }) {
  if (!isShow) {
    return <></>;
  } else {
    return (
      <ModalWrap
        className={`ModalWrap`}
        onClick={(e) => {
          if (e.target.className.indexOf(`ModalWrap`) !== -1) {
            console.log(`ModalWrap`);
          }
        }}
      >
        <ModalEditBox className={`ModalEditBox`} x={x} y={y}>
          <EditBox />
        </ModalEditBox>
      </ModalWrap>
    );
  }
}

const ModalWrap = styled.div``;

const ModalEditBox = styled.div`
  position: fixed;
  width: 200px; // 임의로 정한 값임
  top: ${(props) => `${props.y - 40}px`};
  left: ${(props) => `${props.x + 5}px`};
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 3;
`;
