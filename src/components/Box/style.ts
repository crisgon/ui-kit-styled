import styled from "styled-components";

interface BoxStyleProps {
  type: "light" | "dark";
}
export const Box = styled.div<BoxStyleProps>`
  border: 0;
  background-color: ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme, type }) =>
    type === "light" && theme.colors.white};
  padding: 8px 16px;
  border-radius: 6px;
`;
