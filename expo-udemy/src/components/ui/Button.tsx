import { Text, View, StyleSheet } from "react-native";

export default function Button({label}: {label: string}) {
  return (
    <View style={styles.Button}>
      <Text style={styles.ButtonLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24
  },
  ButtonLabel: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24
  },
})