import { StyleSheet, ScrollView, View } from "react-native"
import Home from "./src/screen/Home/Home";

const App = () => {
  return(
    <View style={styles.app}>
      <Home />
    </View>
    
   )

  };

const styles = StyleSheet.create({
  app:{
    flex:1,
  }
})

export default App;

