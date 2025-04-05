import { View, Text, StyleSheet } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      <View>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
