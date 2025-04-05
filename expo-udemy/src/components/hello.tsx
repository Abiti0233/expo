import { View, Text, StyleSheet } from "react-native";
export const Hello = ({ text, bool }: { text: string; bool: boolean }) => {
  return (
    <>
      {bool ? (
        <View>
          <Text style={styles.container}>{text}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.container}>false</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
