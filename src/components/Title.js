import React from "react";
import propTypes from 'prop-types';
import { Text, StyleSheet } from "react-native";

const Title = (props) => <Text style={styles.text}>te verkrijgen in: {props.type}</Text>

Title.propTypes = {
    type: propTypes.string.isRequired
}

Title.defaultProps = {
    type: 'restaurant'
}

export default Title;

const styles = StyleSheet.create({
    text:{
        textSize:50,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 5,
    }
})