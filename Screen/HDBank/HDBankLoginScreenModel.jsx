import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
const HDBankLoginScreenModel = ({navigation,isModelVisible}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModelVisible}
                onRequestClose={() => {
                    isModelVisible
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable style={styles.alignNav} onPress={() => (!isModelVisible)}>
                            <View style={styles.nav}></View>
                        </Pressable>
                        <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />
                        <CustomInputV1
                            label={'Tên đăng nhập'}
                            maxLength={30}
                        />
                        <CustomInputV1
                            label={'Mật khẩu'}
                            maxLength={30}
                            secureTextEntry={true}
                        />
                        <CustomButton
                            title='Đăng nhập'
                            onPress={() => { onUpdateUser() }}
                        />
                        <View style={styles.footer}>
                            <Pressable onPress={() => alert('Chức năng đang được cập nhật')}>
                                <Text style={styles.footerText}>Quên mật khẩu?</Text>
                            </Pressable>
                            <Text style={styles.footerText}>
                                Bạn chưa có tài khoản?
                                <Text style={styles.regis} onPress={() => navigation.navigate("HDBankRegisterInfo")}> Đăng ký</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    alignNav: {
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: SIZES.h4, 
        fontWeight: '600' 
    },
    nav: {
        width: 70,
        height: 9,
        borderRadius: 10,
        backgroundColor: COLOR.LightBlack
    },
    logo: {
        width: 287,
        height: 100,
        marginBottom: 40,
        resizeMode: 'cover',
    },
    modalView: {
        flex: 1,
        width: SIZES.width,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'flex-end'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },

    footerText: {
        color: COLOR.GrayText,
        fontSize: 15,
        paddingVertical: 6,
    },
    regis: {
        color: COLOR.Red,
        fontWeight: 'bold',
    }
});

export default HDBankLoginScreenModel;