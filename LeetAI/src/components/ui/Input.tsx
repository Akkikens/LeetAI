import React from "react";
import { TextInput } from "react-native-paper";
import type { TextInputProps } from "react-native-paper";

export const Input = (props: TextInputProps) => {
  return <TextInput mode="outlined" {...props} />;
};
