import React, { useState } from "react";
import {Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard} from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import img_content2 from '../../assets/icon/img_content2.jpg'
import CheckBox from "@react-native-community/checkbox";

const Success = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [password, setPassword] = useState('');
    const [WaitForLogin, setWaitForLogin] = useState(false);
    const [donateAmount, setDonateAmount] = useState('0');
    const HDBankLogin = async () => {
        setWaitForLogin(true);
        navigation.navigate('HDBankValidateOTP');
    }
    const Donate = async () => {

    }
    const DonateOption = ({ amount, onPress }) => {
        const styles = StyleSheet.create({
            donateOption: {
                width: 100,
                height: 40,
                margin: 5,
                borderRadius: 8,
                backgroundColor: COLOR.LightBlack,
                justifyContent: "center",
                alignItems: "center",
            },
            donateOptionText: {
                fontSize: SIZES.h4,
                fontWeight: '500'
            },
        });

        return (
            <Pressable style={styles.donateOption} onPress={onPress}>
                <Text style={styles.donateOptionText}>{amount}</Text>
            </Pressable>
        );
    }
    return (
        <View>
            <Image source={require('../../assets/icon/success.png')} style={{marginTop: 300,width: 250,height: 250, marginLeft: 80}}/>
            <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10}}>Thank you!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: SIZES.h4,
        fontWeight: '600'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 45,
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
    },

    flexLogo: {
        flex: 1.5,
        alignSelf: 'center',
    },
    flexInput: {
        flex: 3,
    },
    flexDonateBtn: {
        flex: 0.5,
    },
    logo: {
        width: SIZES.width,
        height: 200,
        marginBottom: 10,
        resizeMode: 'cover'
    },

    modalView: {
        flex: 1,
        width: SIZES.width,
        backgroundColor: "white",
        padding: 15,
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
    flexDonate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

});

export default Success;