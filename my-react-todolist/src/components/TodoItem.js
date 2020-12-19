import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

// display: flex;
// align-items: center;
// justify-content: center;
const Remove = styled.div`
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex; /* todoitem 가로로 정렬 */
  align-items: center; /* 위 아래 가운데 */
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da; /* 1px 네모 테두리 */
  border-radius: 16px; /* 둥글게 */

  font-size: 24px; /* 체크표시(MdDone) 크게 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer; /* cursor 모양 손가락으로 */

  ${(props) =>
    props.done &&
    css`
      /* done is true : 테두리 색, 마크 색 */
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1; /* 텍스트 가로로 끝까지 공간 차지하게하기 */
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

// 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지하게 되어 성능 최적화
export default React.memo(TodoItem);
