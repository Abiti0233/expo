import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../icon";

export const MemoListItem = () => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2025/4/5 10:00</Text>
      </View>
      <TouchableOpacity>
        <Icon name="delete" size={32} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    paddingHorizontal: 19,
    paddingVertical: 16,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#A0A3AD",
  },
});
