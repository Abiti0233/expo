import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Header } from '../../components/layout/header';
import { CircleButton } from '../../components/circleButton';
import Icon from '../../components/icon';
export default function Edit() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput value={"買い物リ\nスト"} style={styles.input} multiline />
      </View>
      <CircleButton>
        <Icon name="check" size={40} color="white" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  }

})