import styled from 'styled-components';

import { TextEditButton } from '../atoms';

export default function EditBox({ isShow }) {
  return (
    <EditBoxWrap className='EditBoxWrap' isShow={isShow}>
      <EditBtnBox className='EditBtnBox'>
        <TextEditButton type='Bold' isDecorated={false} size={20} />
        <TextEditButton type='Italic' isDecorated={false} size={20} />
        <TextEditButton type='UnderLine' isDecorated={false} size={20} />
        <TextEditButton type='StrikeThrough' isDecorated={false} size={20} />
      </EditBtnBox>

      <LinkBtnBox className='LinkBtnBox'>
        <TextEditButton type='Link' isDecorated={false} size={20} />
        <span style={{ fontSize: '17px', margin: '0px', padding: '0px' }}>
          Link
        </span>
      </LinkBtnBox>
    </EditBoxWrap>
  );
}

// display: ${(props) => (props.isShow ? 'inline' : 'none')};
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
