import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SIZES } from "../Constants/Theme";

const CustomHeader = ({ onPressBack, title, style }) => {
    return (
        <View style={styles.header}>
            <Pressable
                style={styles.goback}
                onPress={onPressBack}>
                <Image
                    style={styles.gobackIcon}
                    source={require('../../assets/icon/arrow-to-left.jpg')}
                />
            </Pressable>
            <Text style={styles.headerName}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    goback: {
        flex: 0.2,
        marginLeft: 15,
    },
    gobackIcon: {
        width: 20,
        height: 20,
    },
    headerName: {
        flex: 2,
        fontSize: SIZES.h5,
        fontWeight: 'bold'
    },
});

export default CustomHeader;