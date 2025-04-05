import { View, StyleSheet } from "react-native";
import { Header } from "../../components/layout/header";
import { MemoListItem } from "../../components/memo/memoListItem";
import { CircleButton } from "../../components/circleButton";
import Icon from "../../components/icon";

const List = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* メモ一覧 */}
      <View style={styles.memoLists}>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <Icon name="plus" size={40} color="white" />
      </CircleButton>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  memoLists: {
    flex: 1,
    backgroundColor: "white",
  },
});
