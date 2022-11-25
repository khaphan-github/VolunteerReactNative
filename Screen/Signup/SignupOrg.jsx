import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './SignupScreenStyle';
import './SignupType';

const phonenumberIcon = '../../assets/icon/phonenumberIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const emailIcon = '../../assets/icon/mailIcon.jpg';
const userIcon = '../../assets/icon/userIcon.png';
const arow = '../../assets/icon/arrow-to-left.jpg';




const SignupOrg = ({navigation}) => {
    const [value, setValue] = useState('Single');
    
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [firstname, setFirstname] = useState('');
    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('');

    const [lastname, setLastname] = useState('');
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState('');

    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumberErrorMessage, setPhonenumberErrorMessage] = useState('');

    const [nameOrg, setnameOrg] = useState('');
    const [nameOrgErrorMessage, setNameOrgErrorMessage] = useState('');
    
    const showMessagePwd = (_password ) => {
        if (_password.length === 0) {
            setPasswordErrorMessage('Mật khẩu không được trống');                 
        }
        else{
            setPasswordErrorMessage('');
        }
    }
    const showMessageFn = (_firstname ) => {
        if(_firstname.length === 0){
            setFirstnameErrorMessage('Tên không được trống');
        }
        else{
            setFirstnameErrorMessage('');
        }
    }
    const showMessageLs = (_lastname ) => {
        if(_lastname.length === 0){
            setLastnameErrorMessage('Họ không được trống');
        }
        else{
            setLastnameErrorMessage('');
        }
    }
    const showMessagePn = (_phonenumber ) => {
        if(_phonenumber.length === 0){
            setPhonenumberErrorMessage('Số điện thoại không được trống');
        }
        else {
            setPhonenumberErrorMessage('');
        }
    }
    
    const showMessageNameOrg = (_nameOrg) => {
        if(_nameOrg.length === 0){
            setNameOrgErrorMessage('Tên tổ chức không được trống');
        }
        else {
            setNameOrgErrorMessage('');
        }
    }   

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('SignupType')}}>
                    <Image source={require(arow)} style={styles.arrowReturn}/>
                </TouchableOpacity>
            <View style={styles.form}>
                <Text style={styles.textHeader}>Đăng ký</Text>
                <Text style={styles.textDesc}>Vui lòng điền đủ thông tin để đăng ký</Text>
            </View>
            <CustomInput
                   onChangeText={(nameOrgtext) => {
                       setnameOrg(nameOrgtext);
                       showMessageNameOrg(nameOrgtext);
                   }}
                    icon={require(userIcon)}
                    placeholder='Tên tổ chức'
                   error={nameOrgErrorMessage.length !== 0}
                   errorMessage={nameOrgErrorMessage}
                    />
            <CustomInput
                   onChangeText={(firstnameText) => {
                       setFirstname(firstnameText);
                       showMessageFn(firstnameText);
                   }}
                    icon={require(userIcon)}
                    placeholder='Tên người đại diện'
                   error={firstnameErrorMessage.length !== 0}
                   errorMessage={firstnameErrorMessage}
                    />
                <CustomInput
                    onChangeText={(lastnameText) => {
                        setLastname(lastnameText);
                        showMessageLs(lastnameText);
                    }}
                    icon={require(userIcon)}
                    placeholder='Họ người đại diện'
                    error={lastnameErrorMessage.length !== 0}
                    errorMessage={lastnameErrorMessage}
                    />
                <CustomInput
                    onChangeText={(phonenumberText) => {
                        setPhonenumber(phonenumberText);
                        showMessagePn(phonenumberText);
                    }}
                    icon={require(phonenumberIcon)}
                    placeholder='Số điện thoại'
                    error={phonenumberErrorMessage.length !== 0}
                    errorMessage={phonenumberErrorMessage}
                    />
                <CustomInput
                    onChangeText={(passwordText) => {
                        setPassword(passwordText);
                        showMessagePwd(passwordText);
                    }}
                    icon={require(phoneIcon)}
                    placeholder='Mật khẩu'
                    secureTextEntry={true}
                    error={passwordErrorMessage.length !== 0}
                    errorMessage={passwordErrorMessage}
                    />
            
            <CustomButton title='Đăng ký' />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Bạn đã có tài khoản?
                    <Text style={styles.login} onPress={() => navigation.navigate("Login")}> Đăng nhập</Text>
                </Text>
            </View>
        </ScrollView>
    );
};
export default SignupOrg;