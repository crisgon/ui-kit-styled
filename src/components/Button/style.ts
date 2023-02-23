import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsSizes.md};
  padding: 8px 16px;
  border-radius: 10px;
  color: #fff;
`;
