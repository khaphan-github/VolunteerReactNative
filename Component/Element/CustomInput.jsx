import React from 'react';
import {View,Text, TextInput, StyleSheet, Image } from 'react-native';
import { COLOR, SIZES } from '../Constants/Theme';

const CustomInput = ({value, placeholder, icon, secureTextEntry, onChangeText, error, errorMessage}) => {
    return(
        <React.Fragment>
        <View style={[styles.container, {borderColor: error ? COLOR.RedPink : COLOR.LightGray}]}>
            <Image style={styles.icon} source={icon}/>
           
            <TextInput value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 55,
        backgroundColor: COLOR.LightGray,
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 1,
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
    },
    errorMessage: {
        marginHorizontal: 5,
        color: COLOR.RedPink
    }
});
export default CustomInput;