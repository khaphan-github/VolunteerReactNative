import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import Auth from "../../Service/Validate/Auth";
const HDBankRegisterScreenInfo = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [fullnameError, setFullnameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [identifyNum, setIdentifyNum] = useState('');
    const [identifyNumError, setIdentifyNumError] = useState('');

    const [nextScreen, setNextScreen] = useState(true);
    const [WaitForLogin, setWaitForLogin] = useState(false);

    const validateFullname = (_fullname) => {
        if (_fullname.length === 0) {
            setFullnameError('Họ và tên không được để trống');
            setFullname(_fullname);
            return false;
        }
        if (_fullname.trim().length > 51) {
            setFullnameError('Họ và tên không vượt quá 52 ký tự');
            setFullname(_fullname);
            return false;
        }
        setFullnameError('');
        setFullname(_fullname);
        return true;
    }

    const validateEmail = (_email) => {
        if (_email.trim().length === 0) {
            setEmailError('Email không được để trống');
            setEmail(_email);
            return false;
        }
        if (!Auth.isValidEmail(_email.trim())) {
            setEmailError('Email sai định dạng');
            setEmail(_email);
            return false;
        }
        if (_email.trim().length > 255) {
            setEmailError('Email không vượt quá 255 ký tự');
            setEmail(_email);
            return false;
        }
        setEmailError('');
        setEmail(_email);
        return true;
    }

    const validatePhone = (_phone) => {
        if (_phone.trim().length === 0) {
            setPhoneError('Số điện thoại không được để trống');
            setPhone(_phone);
            return false;
        }
        if (!Auth.isValidPhone(_phone.trim())) {
            setPhoneError('Số điện thoại sai định dạng');
            setPhone(_phone);
            return false;
        }
        setPhoneError('');
        setPhone(_phone);
        return true;
    }
    
    const validateIdenityNum = (_identityNum) => {
        if (_identityNum.trim().length === 0) {
            setIdentifyNumError('CMND/CCCD không được để trống');
            setIdentifyNum(_identityNum);
            return false;
        }
        if (!Auth.isValidPhone(_identityNum.trim())) {
            setIdentifyNumError('CMND/CCCD sai định dạng');
            setIdentifyNum(_identityNum);
            return false;
        }
        setPhoneEsetIdentifyNumErrorrror('');
        setIdentifyNum(_identityNum);
        return true;
    }

    const Register = () => {
        // Call API
        setWaitForLogin(true);
        navigation.navigate('HDBankValidateOTP')
    }
    return (
        <View style={styles.centeredView}>
            <View style={styles.header}>
                <Pressable
                    style={styles.goback}
                    onPress={() => { navigation.navigate('HDBankLogin') }}>
                    <Image
                        style={styles.gobackIcon}
                        source={require('../../assets/icon/arrow-to-left.jpg')}
                    />

                </Pressable>
                <Text style={styles.headerName}>
                    Đăng nhập tài khoản HDBank
                </Text>
            </View>
            {nextScreen ?
                <View style={styles.modalView}>
                    <View style={styles.flexLogo}>
                        <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />
                    </View>
                    <ScrollView>
                        <CustomInputV1
                            label={'Họ và tên'}
                            maxLength={52}
                            value={fullname}
                            onChangeText={(text) => {validateFullname(text)}}
                            errorMessage={fullnameError}
                        />
                        <CustomInputV1
                            label={'Email'}
                            maxLength={99}
                            value={email}
                            onChangeText={(text) => {validateEmail(text)}}
                            errorMessage={emailError}
                        />
                        <CustomInputV1
                            label={'Phone'}
                            maxLength={10}
                            value={phone}
                            onChangeText={(text) => {validatePhone(text)}}
                            errorMessage={phoneError}
                        />
                        <CustomInputV1
                            label={'CMND/CCCD'}
                            maxLength={12}
                            value={identifyNum}
                            onChangeText={(text) => {validateIdenityNum(text)}}
                            errorMessage={identifyNumError}
                        />
                        <CustomButton
                            title='Tiếp Tục'
                            onPress={() => { setNextScreen(false) }}
                        />
                    </ScrollView>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Bạn đã có tài khoản?
                            <Text style={styles.regis} onPress={() => navigation.navigate("HDBankLogin", { isModelVisible: true })}> Đăng nhập</Text>
                        </Text>
                    </View>
                </View>
                :
                <View style={styles.modalView}>
                    <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />

                    <CustomInputV1
                        label={'Tên đăng nhập'}
                        maxLength={50}
                    />

                    <CustomInputV1
                        label={'Mật khẩu'}
                        secureTextEntry={true}
                        maxLength={99}
                    />
                    <CustomInputV1
                        label={'Xác nhận lại mật khẩu'}
                        secureTextEntry={true}
                        maxLength={99}
                    />

                    <CustomButton
                        title='Đăng ký'
                        isLoading={WaitForLogin}
                        onPress={() => { Register() }}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Bạn đã có tài khoản?
                            <Text style={styles.regis} onPress={() => navigation.navigate("HDBankLogin", { isModelVisible: true })}> Đăng nhập</Text>
                        </Text>
                    </View>
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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

export default HDBankRegisterScreenInfo;