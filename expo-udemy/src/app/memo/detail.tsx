import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header } from "../../components/layout/header";
import { CircleButton } from "../../components/circleButton";
import Icon from "../../components/icon";
import { router } from "expo-router";

export default function Detail() {
  const handlePress = () => {
    router.push("/memo/edit");
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025/4/5 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
          ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
          買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
          ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 160, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="white" />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  memoHeader: {
    height: 96,
    justifyContent: "center",
    paddingHorizontal: 19,
    paddingVertical: 24,
    backgroundColor: "#467FD3",
  },
  memoTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  memoDate: {
    fontSize: 12,
    color: "white",
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
