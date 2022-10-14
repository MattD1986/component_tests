import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import DATA from "../../data";
import Title from '../components/Title'



const List = (props) => {
    
  const renderItem = ({item}) => <Text style={styles.item}>{item.name.toUpperCase()}</Text>   

    return(
        <View>
            <Title type = {props.type} />
            <SectionList
                sections={DATA.filter(item => (item.type === props.type))}
                keyExtractor={(item, index) => item + index}
                renderItem = {renderItem}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>{section.title}</Text>
                  )}
            />
        </View>
    );
}

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

export default List;