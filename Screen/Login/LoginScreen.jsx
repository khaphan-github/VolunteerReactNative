import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './LoginSceenStyle';

const mailIcon = '../../assets/icon/mailIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.png';
const fbIcon = '../../assets/icon/2021_Facebook_icon.svg.png';
const googleIcon = '../../assets/icon/Google__G__Logo.svg.png';
const zaloIcon = '../../assets/icon/zalo-seeklogo.png';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = ()  => {
        if(!username.trim()) {
            alert('is null');
        }
        else {
            alert('not');
        }
        UserService.getAuth(username, password).then((response) => {
            alert(response.data.id);
        }).catch(error => {
            alert('Đăng nhập thành công');
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
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
                secureTextEntry={true}  />
            <CustomButton onPress={auth} title='Đăng nhập' />
           
            <Text style={styles.label}>Hoặc đăng nhập với</Text>

            <View style={styles.loginOption}>
                <Image style={styles.oauth} source={require(fbIcon)} />
                <Image style={styles.oauth} source={require(googleIcon)} />
                <Image style={styles.oauth} source={require(zaloIcon)} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Quên mật khẩu?</Text>
                <Text style={styles.footerText}>
                    Bạn chưa có tài khoản?
                    <Text style={styles.regis}> Đăng ký</Text>
                </Text>
            </View>
        </View>
    );
};
export default LoginScreen;