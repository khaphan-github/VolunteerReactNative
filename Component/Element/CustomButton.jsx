import React from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';
const CustomButton = ({onPress, title}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF493C',
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    title: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    }
});
export default CustomButton;