import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { useAuth } from "../src/hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome to LeetAI
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => router.push("/problems")}
            style={styles.button}
          >
            Start Coding
          </Button>

          <Button
            mode="contained"
            onPress={() => router.push("/learning-paths")}
            style={styles.button}
          >
            Learning Paths
          </Button>

          <Button
            mode="contained"
            onPress={() => router.push("/profile")}
            style={styles.button}
          >
            My Profile
          </Button>

          <Button
            mode="outlined"
            onPress={() => signOut()}
            style={styles.button}
          >
            Sign Out
          </Button>
        </View>
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
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
  },
  button: {
    marginVertical: 8,
  },
});
