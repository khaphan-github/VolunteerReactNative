import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './SignupScreenStyle';

const phonenumberIcon = '../../assets/icon/phonenumberIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.png';
const emailIcon = '../../assets/icon/emailIcon.png';
const userIcon = '../../assets/icon/userIcon.png';



const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [value, setValue] = useState('Single');
    
    const auth = ()  => {
        // if(!username.trim()) {
        //     alert('is null');
        // }
        // else {
        //     alert('not');
        // }
        UserService.getAuth(password, firstname, lastname, phonenumber, email).then((response) => {
            alert(response.data.id);
        }).catch(error => {
            alert('Đăng ký thành công');
        })
    }
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>

            <View style={styles.form}>
                <Text style={styles.textHeader}>Đăng ký</Text>
                <Text style={styles.textDesc}>Vui lòng điền đủ thông tin để đăng ký</Text>
            </View>
            <View>
            <Text>Type</Text>
            <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('Single')}>
                    {/* <Fontisto name="date" size={24} color="white" /> */}
                    <Text style={{ color: 'white' }}>Single</Text>
                    <RadioButton value="Single" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('Organisation')}>
                {/* <Ionicons name="alarm" size={24} color="white" /> */}
                    <Text style={{ color: 'white' }}>Organisation</Text>
                    <RadioButton value="Organisation" color="white"/>
                </TouchableOpacity>
            </RadioButton.Group>
            </View>
            <CustomInput
                onChangeText={fistnameText => setFirstname(fistnameText)}
                icon={require(userIcon)}
                placeholder='Tên'
                 />
            <CustomInput
                onChangeText={lastname => setLastname(lastname)}
                icon={require(userIcon)}
                placeholder='Họ'
                 />
            <CustomInput
                onChangeText={emailText => setEmail(emailText)}
                icon={require(emailIcon)}
                placeholder='Email'
                 />
            <CustomInput
                onChangeText={phonenumber => setPhonenumber(phonenumber)}
                icon={require(phonenumberIcon)}
                placeholder='Số điện thoại'
                 />
            <CustomInput
                onChangeText={passwordText => setPassword(passwordText)}
                icon={require(phoneIcon)}
                placeholder='Mật khẩu'
                secureTextEntry={true}  />
            
            <CustomButton onPress={auth} title='Đăng ký' />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Bạn đã có tài khoản?
                    <Text style={styles.login} onPress={() => navigation.navigate("Login")}> Đăng nhập</Text>
                </Text>
            </View>
        </ScrollView>
    );
};
export default LoginScreen;