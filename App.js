import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder='Your course goal'/>
        <Button title='ADD GOAL'/>
      </View>
      <View>
        <Text>List of goals here...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    width: '80%',
    borderStyle: ' solid ',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: '8px',
    marginRight: 8,
    padding: 8,
  },
});
