import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import CustomAlert from '../../Component/Element/CustomAlert';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';

import Auth from './Auth';
import { styles } from './LoginSceenStyle';

const mailIcon = '../../assets/icon/emailIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.png';
const fbIcon = '../../assets/icon/2021_Facebook_icon.svg.jpg';
const googleIcon = '../../assets/icon/Google__G__Logo.svg.jpg';
const zaloIcon = '../../assets/icon/zalo-seeklogo.jpg';
const arow = '../../assets/icon/arrow-to-left.jpg';
// rncs
const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setnotification] = useState('');
    const [message, setMessage] = useState('');
    const [ButtonPress, setButtonPress] = useState('');

    const showMessage = (message) => {
        setMessage(message);
        setnotification(true);

    }
    const authenticate = () => {
        setButtonPress(true);
        Auth.getAuth(username, password).then((res) => {
            showMessage(res.status);
            setButtonPress(false);
        }).catch(error => {
            showMessage(error);            
        })
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.flForm}>

                        <CustomAlert 
                            visible={notification} 
                            mess={message} 
                            onPress={() => setnotification(false)}
                        />

                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={() => {
                                alert(Connection.isNetworkAvailable())
                            }}>
                                <Image source={require(arow)} style={styles.arrowReturn} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.title}>

                            <Text style={styles.textHeader}>Đăng nhập</Text>
                            <Text style={styles.textDesc}>Vui lòng đăng nhập để tiếp tục</Text>
                        </View>

                        <CustomInput
                            onChangeText={usernameText => setUsername(usernameText)}
                            icon={require(mailIcon)}
                            placeholder='Email hoặc số điện thoại' />

                        <CustomInput
                            onChangeText={passwordText => setPassword(passwordText)}
                            icon={require(phoneIcon)}
                            placeholder='Mật khẩu'
                            secureTextEntry={true} />
                        <CustomButton onPress={authenticate} title='Đăng nhập' isLoading={ButtonPress} />
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