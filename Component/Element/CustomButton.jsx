import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { COLOR, SIZES } from '../Constants/Theme';
const CustomButton = ({ onPress, title, isLoading }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            {isLoading ? 
            <ActivityIndicator size='large' color='white' /> :
            <Text style={styles.title}>{title}</Text>}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.Red,
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    title: {
        color: 'white',
        fontSize: SIZES.h3,
        fontWeight: 'bold',
    }
});
export default CustomButton;