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
      <View>

        {/* 個別のメモ */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025/4/5 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>＋</Text>
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
  }
});
