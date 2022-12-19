import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image,TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import HDBankService from "../../Service/api/HDBankService";
const HDBankLoginScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState('');
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [WaitForLogin, setWaitForLogin] = useState(false);

    const validateUsername = (_username) => {
        if (_username.trim().length === 0) {
            setUsernameErrorMessage('Tên đăng nhập không được để trống');
            setUsername(_username.trim());
            return false;
        }
        setUsernameErrorMessage('');
        setUsername(_username.trim());
        return true;
    }

    const validatePassword = (_password) => {
        if (_password.trim().length == 0) {
            setPasswordErrorMessage('Mật khẩu không được để trống');
            setPassword(_password.trim());
            return false;
        }
        setPasswordErrorMessage('');
        setPassword(_password.trim());
        return true;
    }

    const HDBankLogin = async (_username, _password) => {
        const isValidatedUsername = validateUsername(_username);
        const isValidatedPassword = validatePassword(_password);
        if (isValidatedUsername && isValidatedPassword) {
            setWaitForLogin(true);
            Keyboard.dismiss();
            let userPhone = '';

            HDBankService.login(_username, _password).then((res) => {
                console.log(res);
                userPhone = '0329199948';
            }).catch(error => {
                console.error(error);
                userPhone = '0329199948';
                navigation.navigate('HDBankValidateOTP', { phone: userPhone });
            }).then(() => { setWaitForLogin(false); });
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.centeredView}>
                <View style={styles.header}>
                    <Pressable
                        style={styles.goback}
                        onPress={() => { navigation.navigate('HDBankAccount') }}>
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
                        <CustomInputV1
                            label={'Tên đăng nhập'}
                            maxLength={64}
                            value={username}
                            onChangeText={(text) => {
                                validateUsername(text);
                            }}
                            errorMessage={usernameErrorMessage}
                        />
                        <CustomInputV1
                            label={'Mật khẩu'}
                            maxLength={64}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                validatePassword(text)
                            }}
                            errorMessage={passwordErrorMessage}
                        />
                        <CustomButton
                            title='Liên kết với chúng tôi'
                            isLoading={WaitForLogin}
                            onPress={() => { HDBankLogin(username, password) }}
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
        </TouchableWithoutFeedback>
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

export default HDBankLoginScreen;