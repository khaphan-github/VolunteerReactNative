import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Linking } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Auth from './Auth';
import { styles } from './LoginSceenStyle';
import UserService from '../../Service/api/UserService';

WebBrowser.maybeCompleteAuthSession();

const iosClientId = '618156629757-bsnp8k1eae52nc4ijr04hl79jbjj0vrb.apps.googleusercontent.com';
const androidClientId = '618156629757-lvr6bvq32v73gi4k9erec4ut64ise448.apps.googleusercontent.com';
const webClientId = '618156629757-hvsv6ur3brk3tbpabmeld87go7ln8pkn.apps.googleusercontent.com';

const mailIcon = '../../assets/icon/mailIcon.jpg';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const fbIcon = '../../assets/icon/2021_Facebook_icon.svg.jpg';
const googleIcon = '../../assets/icon/Google__G__Logo.svg.jpg';
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
        _password.length === 0 ? setPasswordErrorMessage('Mật khẩu không được trống') : setPasswordErrorMessage('')
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
                    AsyncStoraged.storeData(res.data);
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


    // Google authentication 
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: webClientId,
        iosClientId: iosClientId,
        androidClientId: androidClientId,
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const token = response.authentication.accessToken;
            fetchUserInfo(token);
        }
    }, [response]);

    async function fetchUserInfo(accessToken) {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const data = await response.json();
        console.log(data.picture);

        await UserService.sendGoogleUserData(data).then((response) => {
            console.log("LOGIN SUCCESS");
            console.log(response.data);
            AsyncStoraged.storeData(response.data);
            navigation.navigate("Home");
            console.warn(response.data.token);
        }).catch(error => {
            console.error(error);
        });
    }

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
                            <Pressable onPress={() => {promptAsync()}}>
                                <Image style={styles.oauth} source={require(googleIcon)} />
                            </Pressable>
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