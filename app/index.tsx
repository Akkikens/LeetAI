import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { user, loading } = useAuth();
  const fadeAnim = new Animated.Value(0);
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!user) {
    return (
      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <View style={styles.content}>
          <Text style={styles.logo}>LeetAI</Text>
          <Text variant="headlineMedium" style={styles.title}>
            Welcome to LeetAI
          </Text>
          <Text style={styles.subtitle}>Learn coding for free. Forever.</Text>
          <Button
            mode="contained"
            onPress={() => router.push("/login")}
            style={styles.button}
          >
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push("/register")}
            style={styles.button}
          >
            Sign Up
          </Button>
        </View>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome back!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50", // Duolingo green
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "80%",
    marginVertical: 8,
  },
});
