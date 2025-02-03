import React from "react";
import { Button as PaperButton } from "react-native-paper";
import type { ButtonProps } from "react-native-paper";

export const Button = (props: ButtonProps) => {
  return <PaperButton {...props} />;
};
