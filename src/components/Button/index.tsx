import React, { ComponentProps } from "react";
import * as S from "./style";

export interface ButtonProps extends ComponentProps<typeof S.Button> {}

export function Button({ children, ...props }: ButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}

Button.displayname = "Button";
