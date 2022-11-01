import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { Colors } from 'react-native-paper';
import { COLOR } from '../../Component/Constants/Theme';
import CustomAlert from '../../Component/Element/CustomAlert';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import AsyncStoraged from '../../Service/client/AsyncStoraged';

import Auth from './Auth';
import { styles } from './LoginSceenStyle';

const mailIcon = '../../assets/icon/mailIcon.jpg';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const fbIcon = '../../assets/icon/2021_Facebook_icon.svg.jpg';
const googleIcon = '../../assets/icon/Google__G__Logo.svg.jpg';
const zaloIcon = '../../assets/icon/zalo-seeklogo.jpg';
const arow = '../../assets/icon/arrow-to-left.jpg';
// rncs
const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [usernameErrorMessage, setusernameErrorMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [ButtonPress, setButtonPress] = useState('');

    const showEmailandPhoneErrorMessage = (username) => {
        if(username.length === 0) {
            setusernameErrorMessage('Tên đăng nhập không được trống');
        }
        else if(Auth.isValidPhone(username) === false && Auth.isValidEmail(username) === false) {
            setusernameErrorMessage('Tên đăng nhập sai định dạng');
        }
        else {
            setusernameErrorMessage('')
        }
    }
    const showPasswordMessage = (_password) => {
        if (_password.length === 0) {
            setPasswordErrorMessage('Mật khẩu không được trống');
        }
        else if(_password.length < 8) {
            setPasswordErrorMessage('Mật khẩu ít nhất 8 ký tự');
        }
        else {
            setPasswordErrorMessage('');
        }
    }
    
    const validateToGetAuth = () => {
        const isValidUsername = Auth.isValidEmail(username) === true || Auth.isValidPhone(username) == true;
        if(isValidUsername && password.length >= 8) {
            return true;
        }
        return false;
    }
    const authenticate = async () => {
        console.log('Press');
        setButtonPress(true);
        if (validateToGetAuth() === true) {
            console.log('Press');
            await Auth.getAuth(username, password).then((res) => {
                console.log('Token ' + res.data.token);
                AsyncStoraged.storeData(res.data.token);
                AsyncStoraged.getData().then((data) => { console.log('Store Token: ' + data) });
                navigation.navigate('Home');
            }).catch(error => {
                console.error(error);
            });
        }
        setButtonPress(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.flForm}>
                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('IntroSlider');
                            }}>
                                <Image source={require(arow)} style={styles.arrowReturn} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.title}>

                            <Text style={styles.textHeader}>Đăng nhập</Text>
                            <Text style={styles.textDesc}>Vui lòng đăng nhập để tiếp tục</Text>
                        </View>

                        <CustomInput
                            onChangeText={(usernameText) => {
                                setUsername(usernameText);
                                showEmailandPhoneErrorMessage(usernameText);
                            }}
                            icon={require(mailIcon)}
                            placeholder='Email hoặc số điện thoại'
                            error={usernameErrorMessage.length !== 0}
                            errorMessage={usernameErrorMessage}
                        />

                        <CustomInput
                            onChangeText={ (passwordText) => {
                                setPassword(passwordText);
                                showPasswordMessage(passwordText);
                            }}
                            icon={require(phoneIcon)}
                            placeholder='Mật khẩu'
                            secureTextEntry={true}
                            error={passwordErrorMessage.length !== 0}
                            errorMessage={passwordErrorMessage}
                        />
                        <CustomButton onPress={() => authenticate()} title='Đăng nhập' isLoading={ButtonPress} />
                    </View>
                    <View style={styles.flOption}>

                        <Text style={styles.label}>Hoặc đăng nhập với</Text>

                        <View style={styles.loginOption}>
                            <Image style={styles.oauth} source={require(fbIcon)} />
                            <Image style={styles.oauth} source={require(googleIcon)} />
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Quên mật khẩu?</Text>
                            <Text style={styles.footerText}>
                                Bạn chưa có tài khoản?
                                <Text style={styles.regis} onPress={() => navigation.navigate("Signup")}> Đăng ký</Text>

                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
};
export default LoginScreen;