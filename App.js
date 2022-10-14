import React from "react";
import { StyleSheet, Text, View, StatusBar, SectionList } from "react-native";
import SectionListTest from "./src/components/SectionListTest";
import SectionListWithProps from './src/components/SectionListWithProps'

export default App = () => (
  <View style={styles.container}>
    {//<SectionListWithProps type='restaurant' />
      <SectionListTest type='restaurant' />
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  }
});


