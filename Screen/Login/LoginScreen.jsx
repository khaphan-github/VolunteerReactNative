import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Linking } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
import Auth from './Auth';
import { styles } from './LoginSceenStyle';
import GoogleAuth from './GoogleAuth';

const mailIcon = '../../assets/icon/mailIcon.jpg';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const fbIcon = '../../assets/icon/2021_Facebook_icon.svg.jpg';
const arow = '../../assets/icon/arrow-to-left.jpg';

// rncs khaphan01@gmail.com khaphan001
const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [usernameErrorMessage, setusernameErrorMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [ButtonPress, setButtonPress] = useState('');

    const showEmailandPhoneErrorMessage = (_username) => {
        if (_username.length === 0) {
            setusernameErrorMessage('Tên đăng nhập không được trống');
        }
        else if (Auth.isValidPhone(_username) === false && Auth.isValidEmail(_username) === false) {
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
        else {
            setPasswordErrorMessage('');
        }
    }

    const validateToGetAuth = () => {
        const isValidUsername = Auth.isValidEmail(username) === true || Auth.isValidPhone(username) === true;
        if (isValidUsername && password.length >= 8) {
            return true;
        }
        return false;
    }

    const presWhenNoTextChange = () => {
        if (username.length === 0) {
            setusernameErrorMessage('Tên đăng nhập không được trống');
        }
        if (password.length === 0) {
            setPasswordErrorMessage('Mật khẩu không được trống');
        }
    }

    const authenticate = async () => {
        setButtonPress(true);
        presWhenNoTextChange();
        if (validateToGetAuth() === true) {
            await Auth.getAuth(username, password).then((res) => {
                if (res.status === 200 && res.data.token.length !== 0) {
                    AsyncStoraged.storeData(res.data.token);
                    navigation.navigate('Home');
                }
            }).catch(error => {
                setPasswordErrorMessage('Sai tên đăng nhập hoặc mật khẩu!');
                setusernameErrorMessage(' ');
                console.error(error);
            });
        }
        setButtonPress(false);
    };

    useEffect(() => {
            console.warn("useeffect");
    
    }, []);
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
                            onChangeText={(passwordText) => {
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
                            <Pressable onPress={() => alert('Chức năng đang được cập nhật')}>
                                <Image style={styles.oauth} source={require(fbIcon)} />
                            </Pressable>
                            <GoogleAuth style={styles.oauth}/>
                        </View>

                        <View style={styles.footer}>
                            <Pressable onPress={() => alert('Chức năng đang được cập nhật')}>
                                <Text style={styles.footerText}>Quên mật khẩu?</Text>
                            </Pressable>
                            <Text style={styles.footerText}>
                                Bạn chưa có tài khoản?
                                <Text style={styles.regis} onPress={() => navigation.navigate("Signup")}> Đăng ký</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView >

    );
};
export default LoginScreen;