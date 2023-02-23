import React from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "../components/Box";

export default {
  title: "Layout/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Dark: StoryObj = {};

export const Ligth: StoryObj = {
  args: {
    type: "light",
  },
};
