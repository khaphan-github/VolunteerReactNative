import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { COLOR, SIZES } from '../Constants/Theme';

const CustomInputV1 = ({ style,keyboardType, value, placeholder, secureTextEntry, onChangeText, errorMessage, maxLength, label }) => {

    return (
        <View style={style}>
            {label &&
                <Text style={styles.label}>{label}
                    <Text style={{ color: COLOR.RedPink }}> *</Text>
                </Text>}
            <View style={[styles.container, { borderColor: errorMessage ? COLOR.RedPink : COLOR.LightBlack }]}>
                <TextInput
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                />
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 50,

        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
    },
    label: {
        fontSize: SIZES.h4,
        fontWeight: '400'
    },
    input: {
        fontSize: SIZES.h4,
        marginLeft: 10,
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
        paddingBottom: 5,
        color: COLOR.RedPink
    }
});
export default CustomInputV1;