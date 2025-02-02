import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { supabase } from "../../../lib/supabase/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}
