import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import img_content2 from '../../assets/icon/img_content2.jpg'
import CheckBox from "@react-native-community/checkbox";

const JoinDetail = ({ navigation, route }) => {
    const [WaitForDonate, setWaitForDonate] = useState(false);
    const [donateAmount, setDonateAmount] = useState('0');
    const [shortDesc, setshortDesc] = useState();
    const [postImage, setPostImage] = useState();
    const [PostTitle, setPostTitle] = useState();
    const [giveMessage, setGiveMessage] = useState();
    const [postInfo, setpostInfo] = useState();

    useEffect(() => {
        if (route.params?.postInfo) {
            setpostInfo(route.params?.postInfo)
            setPostImage(route.params?.postInfo.mainimage);
            setPostTitle(route.params?.postInfo.title);
            setshortDesc(route.params?.postInfo.content);
        }
    }, [route.params?.postInfo]);

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
            <TouchableOpacity style={styles.donateOption} onPress={onPress}>
                <Text style={styles.donateOptionText}>{amount}</Text>
            </TouchableOpacity>
        );
    }

    const donate = () => {
        setWaitForDonate(true);
        // Call donate Screen.
        // Call confirm donate screen,
        navigation.navigate('Confirm', {
            donateAmount: donateAmount,
            postInfo: route.params?.postInfo,
            message: giveMessage
        })
        setWaitForDonate(false);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.centeredView}>
                <View style={styles.header}>
                    <Pressable
                        style={styles.goback}
                        onPress={() => { navigation.navigate('Home') }}>
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
                        </View>
                        <View style={styles.flexInput}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500',
                                width: '100%',
                                paddingBottom: 10,
                            }}>{PostTitle}
                            </Text>
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
                                    onChangeText={(text) => setGiveMessage(text)}
                                    placeholder={'Gửi lời nhắn ...'}
                                />
                            </View>

                        </View>

                        <View style={styles.flexDonateBtn}>
                            <CustomButton
                                title='Tiếp tục'
                                isLoading={WaitForDonate}
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

export default JoinDetail;