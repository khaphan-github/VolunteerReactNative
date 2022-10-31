import React from 'react';
import {View, TextInput, StyleSheet, Image } from 'react-native';
import { TEXT_INPUT } from '../Constants/Color';
import { COLOR, SIZES } from '../Constants/Theme';
const CustomInput = ({value, placeholder, icon, secureTextEntry, onChangeText}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={icon}/>
           
            <TextInput value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
        marginVertical: 10,
        height: 55,
        backgroundColor: COLOR.LightGray,
        borderRadius: 5,
        justifyContent: 'center',
    },
    input: {
        fontSize: SIZES.h4,
        marginLeft: 45,
        paddingVertical: 13,
    },
    icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        marginHorizontal: 15,
        marginVertical: 13,
    }
});
export default CustomInput;