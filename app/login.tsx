import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signIn(email, password);
      router.replace("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Login to LeetAI
        </Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          loading={loading}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
        <Button
          mode="contained"
          onPress={() => router.push("/register")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Create Account
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    maxWidth: 300,
    marginVertical: 8,
    backgroundColor: "#4CAF50",
  },
  buttonLabel: {
    color: "#fff",
  },
});
