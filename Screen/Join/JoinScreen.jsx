import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { RadioButton } from "react-native-paper";
import { COLOR } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomHeader from "../../Component/Element/CustomHeader";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import { Linking } from "react-native";
import HomeService from "../../Service/api/HomeService";
const JoinScreen = ({ navigation, route }) => {
    const [WaitForJoin, setWaitForJoin] = useState(false);
    const [sex, setSex] = useState('male');
    const [postId, setpostId] = useState();
    const [postOwner, setOwner] = useState();
    const [postLoc, setPostLoc] = useState();
    const [postTime, setPostTime] = useState();

    React.useEffect(() => {
        if(route.params?.postInfo) {
            setpostId(route.params?.postInfo.id);
            setOwner(route.params?.postInfo.owner);
            setPostLoc(route.params?.postInfo.address);
        }
    }, [route.params?.postInfo]);

    const registerToJoinActivities = async () => {
        setWaitForJoin(true);
        // Call API Join Activities';
        await HomeService.joinActivities(postId).then((res) => {
            console.log("PostID", postId);
            console.log(res.data);
        }).catch(error => {
            console.error(error);
        })
        navigation.navigate('Activities')
        setWaitForJoin(false);
    }
    return (
        <View>
            <CustomHeader title={'Đăng ký tham gia hoạt đông'} onPressBack={() => navigation.navigate('Home')}></CustomHeader>
            <View style={styles.form}>
                <CustomInputV1 label={'Đơn vị tổ chức:'} value={postOwner} editable={false} />
                <CustomInputV1 label={'Địa điểm tổ chức:'} value={postLoc} editable={false} />
                <CustomInputV1 label={'Thời gian tổ chức:'} value={'7h30 13/12/2022'} editable={false} />

                <View>
                    <Text>Chọn phương tiện di chuyển:</Text>
                    <RadioButton.Group
                        onValueChange={(sex) => setSex(sex)}
                        value={sex}>
                        <View style={styles.radioSex}>
                            <View style={styles.mainWrapper}>
                                <RadioButton value="male" color={COLOR.RedPink} />
                                <Text>Xe máy</Text>
                            </View>
                            <View style={styles.mainWrapper}>
                                <RadioButton value="female" color={COLOR.RedPink} />
                                <Text>Xe buýt</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
                <View>
                    <Text>Xem Đường Đi</Text>
                </View>
                <CustomInputV1 label={'Ghi chú:'} />

            </View>
            <View style={styles.btn}>
                <CustomButton
                    onPress={() => registerToJoinActivities()}
                    title={'Tham gia ngay'}
                    isLoading={WaitForJoin}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    radioSex: {
        marginRight: 60,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginVertical: 5,
    },
    mainWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        marginHorizontal: 20,
    }
});

export default JoinScreen;