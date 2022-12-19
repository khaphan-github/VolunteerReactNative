import { useRoute } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import CustomAlert from '../../Component/Element/CustomAlert';
import UserService from '../../Service/api/UserService';
import { styles } from './SignupScreenStyle';
import Auth from './../Login/Auth';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';

const phonenumberIcon = '../../assets/icon/phonenumberIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const emailIcon = '../../assets/icon/mailIcon.jpg';
const userIcon = '../../assets/icon/userIcon.png';
const arow = '../../assets/icon/arrow-to-left.jpg';


const SignupEmail = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [emailErrorMessage, setemailErrorMessage] = useState('');
    const accessPage = () =>global.value=='Single' ? navigation.navigate('SignupSingle',{
        email: email
    }) : navigation.navigate('SignupOrg',{
        email: email
    });
    const accessPage2 = () => navigation.navigate('Login')
    const [ButtonPress, setButtonPress] = useState('');
    
    const fistname = "KIM KHANH";
    const lastname = "LE";
    const phonenumber = "0907025989";
    const type = "Single";
    const password = "123456Kk*"

    
    const showEmailErrorMessage = (_email) => {
        if (_email.length === 0) {
            setemailErrorMessage('Mail không được trống');
        }
        else if (Auth.isValidEmail(_email) === false) {
            setemailErrorMessage('Mail sai định dạng');
        }
        else {
            setemailErrorMessage('')
        }
    }
    
    const validateToGetAuth = () => {
        const isValidEmail_ = Auth.isValidEmail(email) === true;
        if (isValidEmail_ ){
            return true;
        }
        return false;
    }

    const presWhenNoTextChange = () => {
        if (email.length === 0) {
            setusernameErrorMessage('Mail không được trống');
        }
    }

    async function signUp(){
        
        let item ={fistname, lastname, phonenumber, type,email, password}
        let result = await fetch("https://deloy-springboot-mongodb.herokuapp.com/api/v1/users/register", {
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type" : 'application/json',
                "Accept": '*/*'
            }
        })
        
        result = await result.json();
        console.log("result: ", result)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('SignupType')}}>
                    <Image source={require(arow)} style={styles.arrowReturn}/>
                </TouchableOpacity>
                <View style={styles.form}>
                    <Text style={styles.textHeader}>Nhập địa chỉ Email</Text>
                    <Text style={styles.textDesc}>Vui lòng nhập địa chỉ email để bắt đầu đăng ký tài khoản</Text>
                </View>
                <CustomInput
                   onChangeText={(emailText) => {
                       setEmail(emailText);
                       showEmailErrorMessage(emailText);
                   }}
                    icon={require(emailIcon)}
                    placeholder='Email'
                   error={emailErrorMessage.length !== 0}
                   errorMessage={emailErrorMessage}
                    />
                <CustomButton onPress={() => {accessPage()}} title='Tiếp tục' />
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};
export default SignupEmail;