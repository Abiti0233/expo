import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/layout/header";
import Button from "../../components/ui/Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.Title}>Login</Text>
        <TextInput style={styles.input} value="email address"></TextInput>
        <TextInput style={styles.input} value="password"></TextInput>
        <Button label={"Submit"} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  Title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});
