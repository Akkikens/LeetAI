import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../src/context/AuthContext";
import { theme } from "../src/constants/theme";

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>
    </PaperProvider>
  );
}
