import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
const HDBankChangePassScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [WaitForLogin, setWaitForLogin] = useState(false);
    const HDBankChangePassword = async () => {
        setWaitForLogin(true);
        navigation.navigate('HDBankValidateOTP');
    }
    return (
        <View style={styles.centeredView}>
            <View style={styles.header}>
                <Pressable
                    style={styles.goback}
                    onPress={() => { navigation.navigate('HDBankAccount') }}>
                    <Image
                        style={styles.gobackIcon}
                        source={require('../../assets/icon/arrow-to-left.jpg')}
                    />
                </Pressable>
                <Text style={styles.headerName}>
                    Tài khoản HDBank của tôi
                </Text>
            </View>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.flexLogo}>
                        <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />
                    </View>
                    <CustomInputV1
                        label={'Nhập mật khẩu cũ'}
                        maxLength={30}
                        secureTextEntry={true}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <CustomInputV1
                        label={'Mật khẩu mới'}
                        maxLength={30}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <CustomInputV1
                        label={'Xác nhận mật khẩu mới'}
                        maxLength={30}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <CustomButton
                        title='Đổi mật khẩu'
                        isLoading={WaitForLogin}
                        onPress={() => { HDBankChangePassword() }}
                    />
                    <View style={styles.footer}>
                        <Pressable onPress={() => alert('Chức năng đang được cập nhật')}>
                            <Text style={styles.footerText}>Quên mật khẩu?</Text>
                        </Pressable>
                        <Text style={styles.footerText}>
                            Bạn chưa có tài khoản?
                            <Text style={styles.regis} onPress={() => navigation.navigate("HDBankRegisterInfo")}> Đăng ký</Text>
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: SIZES.h4,
        fontWeight: '600'
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

export default HDBankChangePassScreen;