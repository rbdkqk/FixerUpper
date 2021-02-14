import styled from 'styled-components';

import { TextEditButton } from '../atoms';

export default function EditBox({ textBoxId, textBoxIndex, decorateText }) {
  return (
    <EditBoxWrap className='EditBoxWrap'>
      <EditBtnBox className='EditBtnBox'>
        <TextEditButton
          type='Bold'
          size={20}
          textBoxId={textBoxId}
          textBoxIndex={textBoxIndex}
          decorateText={decorateText}
        />
        <TextEditButton
          type='Italic'
          size={20}
          textBoxId={textBoxId}
          textBoxIndex={textBoxIndex}
          decorateText={decorateText}
        />
        <TextEditButton
          type='UnderLine'
          size={20}
          textBoxId={textBoxId}
          textBoxIndex={textBoxIndex}
          decorateText={decorateText}
        />
        {/* {'StrikeThrough : textDecoration을 사용해야 하는 점이 UnderLine과 겹쳐서, 일단 주석처리했음'} */}
        {/* <TextEditButton type='StrikeThrough'  size={20} /> */}
      </EditBtnBox>

      <LinkBtnBox className='LinkBtnBox'>
        <TextEditButton
          type='Link'
          size={20}
          textBoxId={textBoxId}
          textBoxIndex={textBoxIndex}
          decorateText={decorateText}
        />
        <span style={{ fontSize: '17px', margin: '0px', padding: '0px' }}>
          Link
        </span>
      </LinkBtnBox>
    </EditBoxWrap>
  );
}

const EditBoxWrap = styled.div`
  position: absolute;
  z-index: 5px;
  padding: 5px;
  cursor: pointer;

  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
`;

const EditBtnBox = styled.div`
  display: flex;
  float: left;
  margin: 0px;
  padding: 0px 3px;
  border-right: 1px solid black;
`;

const LinkBtnBox = styled.div`
  display: flex;
  float: left;
  margin: 0px;
  padding: 0px 2px;
  /* border-left: 1px solid black; */
`;
