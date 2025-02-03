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
        <Text variant="headlineMedium" style={styles.title}>
          Welcome to LeetAI
        </Text>
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
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome back to LeetAI
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  button: {
    marginVertical: 8,
  },
});
