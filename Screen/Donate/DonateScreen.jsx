import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
const DonateScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [WaitForLogin, setWaitForLogin] = useState(false);
    const [donateAmount, setDonateAmount] = useState('0');
    const HDBankLogin = async () => {
        setWaitForLogin(true);
        navigation.navigate('HDBankValidateOTP');
    }
    const Donate = async () => {

    }
    const DonateOption = ({ amount, onPress }) => {
        const styles = StyleSheet.create({
            donateOption: {
                width: 100,
                height: 40,
                margin: 5,
                borderRadius: 8,
                backgroundColor: COLOR.LightBlack,
                justifyContent: "center",
                alignItems: "center",
            },
            donateOptionText: {
                fontSize: SIZES.h4,
                fontWeight: '500'
            }
        });

        return (
            <Pressable style={styles.donateOption} onPress={onPress}>
                <Text style={styles.donateOptionText}>{amount}</Text>
            </Pressable>
        );
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
                </Text>
            </View>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.flexLogo}>
                        <Image style={styles.logo} source={require('../../assets/icon/AccountScreenICon/anh-bia-cover-anh-bia-facebook-cover-2.jpg')} />
                    </View>
                    <View  style={styles.flexInput}>
                        <CustomInputV1
                            label={'Số tiền ủng hộ'}
                            maxLength={30}
                            onChangeText={(text) => setDonateAmount(text)}
                            value={donateAmount}
                        />
                        <View style={styles.flexDonate}>
                            <DonateOption amount={'10.000'} onPress={() => setDonateAmount('10.000')} />
                            <DonateOption amount={'20.000'} onPress={() => setDonateAmount('20.000')} />
                            <DonateOption amount={'50.000'} onPress={() => setDonateAmount('50.000')} />
                            <DonateOption amount={'100.000'} onPress={() => setDonateAmount('100.000')} />
                            <DonateOption amount={'200.000'} onPress={() => setDonateAmount('200.000')} />
                            <DonateOption amount={'500.000'} onPress={() => setDonateAmount('500.000')} />
                        </View>
                        
                    </View>
                    <View  style={styles.flexDonateBtn}>
                        <CustomButton
                            title='Ủng hộ'
                            isLoading={WaitForLogin}
                            onPress={() => { Donate() }}
                        />
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
    },

    flexLogo: {
        flex: 1.5,
        alignSelf: 'center',
    },
    flexInput: {
        flex: 3,
    },
    flexDonateBtn: {
        flex: 0.5,
    },
    logo: {
        width: SIZES.width,
        height: 200,
        marginBottom: 30,
        resizeMode: 'cover',
    },

    modalView: {
        flex: 1,
        width: SIZES.width,
        backgroundColor: "white",
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
    flexDonate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

});

export default DonateScreen;