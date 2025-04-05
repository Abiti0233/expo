import { View, Text, StyleSheet } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* header */}
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* メモ一覧 */}
      <View style={styles.memoLists}>

        {/* 個別のメモ */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#467FD3",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "white",
  },
  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
  memoLists: {
    flex: 1,
    backgroundColor: "white",
  },
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
