import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (step === 2) {
      try {
        setLoading(true);
        await signUp(email, password, name);
        router.replace("/");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Create Account
        </Text>
        {step === 0 && (
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        )}
        {step === 1 && (
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
        )}
        {step === 2 && (
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        )}
        <Button
          mode="contained"
          onPress={handleNext}
          loading={loading}
          style={styles.button}
        >
          {step < 2 ? "Next" : "Create Account"}
        </Button>
        <Button
          mode="text"
          onPress={() => router.push("/login")}
          style={styles.button}
        >
          Already have an account? Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});
