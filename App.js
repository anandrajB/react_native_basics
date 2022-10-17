import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style ={{margin : 10 , borderWidth : 2 , borderColor : 'red' , padding :10}}>hey this is a test</Text>
        <Text style = {styles.new}>hey </Text>
      </View>
      <Text>Hello world </Text>
      <StatusBar style="auto" />
      <Button title = "click me !"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    margin : 16,
    padding :  16,
    borderWidth : 2,
    textShadowColor : 'red',
  }
});


