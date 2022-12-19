import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import img_content2 from '../../assets/icon/img_content2.jpg'
import CheckBox from "@react-native-community/checkbox";

const DonateScreen = ({ navigation, route }) => {
    const [isSelected, setSelection] = useState(false);
    const [password, setPassword] = useState('');
    const [WaitForLogin, setWaitForLogin] = useState(false);
    const [donateAmount, setDonateAmount] = useState('0');
    const [postImage, setPostImage] = useState();
    const [PostTitle, setPostName] = useState();
    const [PostId, setPostId] = useState();

    useEffect(() => {
        if (route.params?.postID) {
            setPostId(route.params?.postID);
            setPostName(route.params?.postName);
            setPostImage(route.params?.postImage);
        }
    }, [route.params?.postID]);

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
            },
        });

        return (
            <Pressable style={styles.donateOption} onPress={onPress}>
                <Text style={styles.donateOptionText}>{amount}</Text>
            </Pressable>
        );
    }

    const donate = async () => {
        // Call donate Screen.
        // Call confirm donate screen,
        navigation.navigate('Success')
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.centeredView}>
                <View style={styles.header}>
                    <Pressable
                        style={styles.goback}
                        onPress={() => {navigation.navigate('Home')}}>
                        <Image
                            style={styles.gobackIcon}
                            source={require('../../assets/icon/arrow-to-left.jpg')}
                        />
                    </Pressable>
                    <Text style={styles.headerName}>
                        Quyên góp
                    </Text>
                </View>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.flexLogo}>
                            <Image style={styles.logo} source={{ uri: postImage }} />
                            <View style={{ width: '100%', position: 'absolute' }}>
                                <Image source={require('../../assets/icon/phuden.jpg')} style={{ height: 30, opacity: 0.4 }} />
                                <Text style={{
                                    position: 'absolute',
                                    fontSize: 18,
                                    fontWeight: '500',
                                    color: 'white',
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                    width: '100%',
                                    marginLeft: 9
                                }}>{PostTitle}</Text>
                            </View>
                        </View>
                        <View style={styles.flexInput}>
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
                            <View style={{ marginTop: 10 }}>
                                <CustomInputV1
                                    label={'Lời nhắn'}
                                    maxLength={30}
                                    onChangeText={(text) => setPassword(text)}
                                    placeholder={'Gửi lời nhắn ...'}
                                />
                            </View>

                        </View>

                        <View style={styles.flexDonateBtn}>
                            <CustomButton
                                title='Ủng hộ'
                                isLoading={WaitForLogin}
                                onPress={() => { donate() }}
                            />
                        </View>

                    </View>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    label: {
        fontSize: SIZES.h4,
        fontWeight: '600'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
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
        fontSize: SIZES.h4,
        fontWeight: 'bold'
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
        marginBottom: 10,
        resizeMode: 'cover'
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
        justifyContent: 'center'
    },

});

export default DonateScreen;