import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Pressable, StyleSheet } from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import CustomInputV1 from '../../Component/Element/CustomInputV1';


const HDBankOTPScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [WaitForLogin, setWaitForLogin] = useState(false);

    const [timerCount, setTimer] = useState(20);

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    const ValidateOTP = async () => {
        setWaitForLogin(true);
        // Call API
        navigation.navigate('HDBankValidateOTP');
    }
    const ResendOTP = async () => {
        setTimer(20);
        // Call API
    }


    return (
        <View style={styles.centeredView}>
            <View style={styles.header}>
                <Pressable
                    style={styles.goback}
                    onPress={() => { navigation.navigate('HDBankLogin') }}>
                    <Image
                        style={styles.gobackIcon}
                        source={require('../../assets/icon/arrow-to-left.jpg')}
                    />
                </Pressable>
                <Text style={styles.headerName}>
                    Đăng nhập tài khoản HDBank
                </Text>
            </View>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={styles.flexLogo}>
                        <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textContent}>Việc tử tế đã gửi Mã xác thực qua số điện thoại 032 **** 938 </Text>

                    </View>
                    <View style={styles.otpInput}>
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                        <CustomInputV1 style={styles.textFlex} maxLength={1} keyboardType={'numeric'} />
                    </View>
                    <View style={styles.resendOTP}>
                        {timerCount > 0 ?
                            <Text style={styles.resendOTPTest}>Gửi lại mã trong {timerCount} giây</Text>
                            :
                            <Pressable onPress={() => { ResendOTP() }}>
                                <Text style={styles.resendOTPTest}>Gửi lại mã</Text>
                            </Pressable>
                        }
                    </View>
                    <CustomButton
                        title='Xác thực'
                        isLoading={WaitForLogin}
                        onPress={() => { ValidateOTP() }}
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
        fontSize: SIZES.h5,
        fontWeight: 'bold'
    },
    flexLogo: {
        alignSelf: 'center',
    },
    logo: {
        width: 257,
        height: 100,
        marginBottom: 30,
        resizeMode: 'cover',
    },
    modalView: {
        flex: 1,
        width: SIZES.width,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
    },

    content: {
        marginBottom: 15,
    },
    textContent: {
        fontSize: SIZES.h4,
        fontWeight: '400',
        opacity: 0.7,
    },

    resendOTP: {
        marginVertical: 6,
        alignItems: 'center',
    },
    resendOTPTest: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        opacity: 0.4,
    },

    otpInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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

export default HDBankOTPScreen;