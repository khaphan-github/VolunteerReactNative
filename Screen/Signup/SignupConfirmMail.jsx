import React,{useState, useEffect, useRef} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput,Pressable, StyleSheet } from 'react-native';
import { Button, Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './SignupScreenStyle';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';
import { useRoute } from '@react-navigation/native';
import './global'


const phonenumberIcon = '../../assets/icon/phonenumberIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const emailIcon = '../../assets/icon/mailIcon.jpg';
const userIcon = '../../assets/icon/userIcon.png';
const arow = '../../assets/icon/arrow-to-left.jpg';
const trycode = '../../assets/icon/try.png';
const pwd = '../../assets/icon/passwordIcon.jpg';
const CustomButtonVerify = ({ onPress, title, isLoading }) => {
    return (
        <Pressable onPress={onPress} style={styleConfirm.buttonVerify}>
            {isLoading ? 
            <ActivityIndicator size='large' color='white' /> :
            <Text style={styleConfirm.title}>{title}</Text>}
        </Pressable>
    )
}
const CustomButtonTry = ({ onPress, title, isLoading }) => {
    return (
        <Pressable onPress={onPress} style={styleConfirm.buttonTry}>
            {isLoading ? 
            <ActivityIndicator size='large' color='white' /> :
            <Text style={styleConfirm.title}>{title}</Text>}
        </Pressable>
    )
}

const styleConfirm = StyleSheet.create({
    containerView: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonVerify: {
        backgroundColor: COLOR.Red,
        width: 180,
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        margin: 12 ,                   
        marginLeft: 0,
        marginRight: 5
    },
    buttonTry: {
        backgroundColor: COLOR.Red,
        width: 180,
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        margin: 12 ,
        marginLeft: 0,
        marginRight: 5
    }
    ,
    title: {
        color: 'white',
        fontSize: SIZES.h3,
        fontWeight: 'bold',
    }
});

const SignupConfirmMail = ({navigation}) => {
    const accessPageSignupFollowType = () =>global.value=='Single' ? navigation.navigate('SignupSingle',{
        email: route.params.email
    }) : navigation.navigate('SignupOrg',{
        email: route.params.email
    });
    const route = useRoute();
    let textInput = useRef(null);
    const lengthInput = 6;
    const [internalVal, setInternal] = useState('');
    const onChangeText = (value)=> {
        setInternal(value)
    }

    useEffect (()=> {
        textInput.focus()
    }, [])
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior = {'padding'}>
                <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('SignupEmail')}}>
                    <Image source={require(arow)} style={styles.arrowReturn}/>
                </TouchableOpacity>
                <Text style= {styles.textHeader}>{"Xác thực Mail"}</Text>
                <Text style= {styles.textDesc}>{"Nhập mã đã được gửi vào mail của bạn"}</Text>
                <View>
                    <TextInput 
                    ref={(input) => textInput = input}
                    onChangeText = {onChangeText}
                    style={{width: 0, height:0}}
                    value={internalVal}
                    maxLength={lengthInput}
                    returnKeyType='done'
                    keyboardType='numeric'/>
                    <View style={styles.containerInput}>
                        {
                            Array(lengthInput).fill().map((data, index) => (
                                <View
                                    key={index} 
                                    style={[
                                        styles.cellView,
                                        {
                                            borderBottomColor: index == internalVal.length ? '#FB6C6A' : '#272A33'
                                        }
                                    ]}>
                                    <Text style={styles.cellText}
                                    onPress={() => {textInput.focus()}}>{internalVal && internalVal.length > 0 ? internalVal[index] : ""}</Text>
                                </View>
                            ))
                        }
                        
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style = {styleConfirm.containerView}>
                <CustomButtonVerify title={'Xác thực'} onPress= {()=>accessPageSignupFollowType()}/>
                <CustomButtonTry title={'Gửi lại mã'}/>
            </View>
        </ScrollView>
    );
};
export default SignupConfirmMail;