import { View, Text, StyleSheet, type ViewStyle } from "react-native";

type CircleButtonProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const CircleButton = ({ children, style }: CircleButtonProps) => {
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
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
