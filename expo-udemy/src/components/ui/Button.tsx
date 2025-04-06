import { Text, StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  ButtonLabel: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});
