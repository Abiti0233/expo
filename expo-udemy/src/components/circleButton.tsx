import { View, Text, StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";

type CircleButtonProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
};

export const CircleButton = ({ children, style, onPress }: CircleButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 26,
    right: 26,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    zIndex: 10,
  },
  circleButtonLabel: {
    color: "white",
    fontSize: 40,
  },
});
