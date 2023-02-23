import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {};
