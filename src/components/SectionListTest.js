import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import DATA from "../../data";
import Title from "./Title";

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);
  
const renderItem = ({item}) => <Text style={styles.item}>{item.name.toUpperCase()}</Text>

const createSectionList = (props) => (
    <View>
      <Title type= {props.type} />
    <SectionList
      //Merk op: DATA wordt via de import genomen vanuit data.js
      sections={DATA.filter(item => (item.type === 'restaurant'))}
      /*ander voorbeeld filter
      sections={DATA.filter(item => (item.title === 'Drinks' || item.title === 'Desserts'))}*/
      keyExtractor={(item, index) => item + index}
      // renderItem={({item}) => <Text>{item.name}</Text>}
      renderItem={renderItem}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
    </View>
)


  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });

  export default createSectionList