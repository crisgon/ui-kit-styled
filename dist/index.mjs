// src/index.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var Button = styled.button`
  font-size: ${(props) => props.theme.fontsSizes.sm};
  background-color: ${(props) => props.theme.colors.brandcolor_primary};
`;
function App() {
  return /* @__PURE__ */ jsx(Button, { children: " Ol\xE1 " });
}
export {
  App
};
