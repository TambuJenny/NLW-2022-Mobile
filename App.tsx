import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Button() {
  return (
    <TouchableOpacity style ={styleButton.button}>
      <Text style ={styleButton.text}>Hello React-Native</Text>
    </TouchableOpacity>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mc Tambu</Text>
      <Button ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 12
  }
});

const styleButton = StyleSheet.create({

  text:
  {
    color: "#F5EDDC",
    fontSize:12
  },

  button:
  {
      backgroundColor: "#E94560",

      margin: 25,
      padding: 15,
      borderRadius: 5,

  }


});
