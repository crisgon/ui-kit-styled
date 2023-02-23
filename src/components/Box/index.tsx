import React, { ComponentProps } from "react";
import * as S from "./style";

export interface BoxProps extends ComponentProps<typeof S.Box> {}

export function Box({ children, ...props }: BoxProps) {
  return <S.Box {...props}>{children}</S.Box>;
}

Box.displayname = "Box";
