import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomHeader from "../../Component/Element/CustomHeader";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import Ionicons from 'react-native-vector-icons/Ionicons';
const ConfirmScreen = ({ navigation, route }) => {
    const [WaitForDonate, setWaitForDonate] = useState(false);
    const [donateAmount, setDonateAmount] = useState();
    const [PostId, setPostId] = useState();
    const [message, setMessage] = useState();
    const [contentTransfer, setContentTransfer] = useState();
    const [Organization, setOrganization] = useState();
    const [OrganizationAcc, seOrganizationAcc] = useState();


    useEffect(() => {
        if (route.params?.postInfo) {
            setPostId(route.params?.postInfo.id);
            setDonateAmount(route.params?.donateAmount);
            setMessage(route.params?.message)
            setOrganization(route.params?.postInfo.owner)
        }
    }, [route.params?.postID]);
    const donate = () => {
        // Handle DONATE:
        setWaitForDonate(true);
        navigation.navigate('Success');
    }

    const vnPay = require('../../assets/icon/Payment/download.png');
    const bank = require('../../assets/icon/Payment/unnamed.png');

    const PaymentMethod = ({ title, image }) => {
        return (
            <TouchableOpacity style={stylesPayment.container}>
                <View style={stylesPayment.flexIcon}>
                    <Image style={stylesPayment.imageIcon} source={image} />
                </View>
                <View style={stylesPayment.flexTitle}>
                    <Text style={PaymentMethod.text}>{title}</Text>
                </View>
                <View style={stylesPayment.flexCheckIcon}>
                    <Ionicons name='checkmark-circle-outline' style={stylesPayment.checkicon} />
                </View>
            </TouchableOpacity>
        )
    }
    const stylesPayment = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 8,
            borderColor: COLOR.LightBlack
        },
        flexIcon: {
            flex: 1,
        },
        flexTitle: {
            flex: 3,
        },
        flexCheckIcon: {
            flex: 0.3,
        },
        imageIcon: {
            width: 40,
            height: 40,
        },
        checkicon: {
            fontSize: 25,
            opacity: 0.8,
        },

        text: {
            fontSize: SIZES.h3
        }
    });
    return (
        <ScrollView styles={styles.container}>
            <CustomHeader onPressBack={() => { navigation.navigate('Donate', {PostInfo: route.params?.postInfo}) }} title={'Xác nhận ủng hộ'} />
            <View style={styles.content}>
                <View style={styles.confirmInfo}>
                    <Text style={styles.label}>Thông tin chuyển khoản: </Text>
                    <CustomInputV1 label={'Đơn vị thụ hưởng:'} value={Organization} editable={false} />
                    <CustomInputV1 label={'Tài khoản thụ hưởng:'} value={'9081237236'} editable={false} />
                    <CustomInputV1 label={'Số tiền ủng hộ:'} value={donateAmount} editable={false} />
                    <CustomInputV1 label={'Nội dung chuyển khoản:'} value={''} editable={false} />
                </View>
                <View style={styles.confirmPaymentMethod}>
                    <Text style={styles.label}>Phương thức thanh toán: </Text>
                    <PaymentMethod title={'Thanh toán qua ví điện tử'} image={vnPay} />
                    <PaymentMethod title={'Thanh toán qua ngân hàng'} image={bank} />
                </View>

                <View style={styles.btn}>
                    <CustomButton
                        onPress={() => donate()}
                        title={'Ủng Hộ'}
                        isLoading={WaitForDonate}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    content: {
        marginTop: 20,
    },
    confirmInfo: {
        marginHorizontal: 20,
    },
    confirmPaymentMethod: {
        marginHorizontal: 20,
    },
    labelSecond: {
        fontSize: SIZES.h4,
    },
    label: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    btn: {
        marginHorizontal: 20,
    }
});

export default ConfirmScreen;