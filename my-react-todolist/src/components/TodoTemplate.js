import React from 'react';
import styled from 'styled-components';
// position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
const TodoTemplateBlock = styled.div`
  position: relative; /* 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  width: 472px;
  height: 708px;

  background: white;
  border-radius: 16px; /* 모서리를 둥글게 */
  box-shadow: 0 0 8px 8 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나게 함 */

  margin-top: 96px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
