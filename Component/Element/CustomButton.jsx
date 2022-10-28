import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
const CustomButton = ({ onPress, title, isLoading }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            {isLoading && <ActivityIndicator size='large' color='white'/>}
            {!isLoading && <Text style={styles.title}>{title}</Text>}
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