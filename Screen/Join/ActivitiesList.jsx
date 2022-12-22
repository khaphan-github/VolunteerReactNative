import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, Platform, View, Image, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import CustomHeader from "../../Component/Element/CustomHeader";
import QRCode from 'react-native-qrcode-svg';
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import HomeService from "../../Service/api/HomeService";

const ActivitiesList = ({ navigation, route }) => {
    const [Activities, setActivities] = useState([]);
    const Activity = ({ OrganizationAvt, title, date, QR }) => {
        const styles = StyleSheet.create({
            containter: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: COLOR.LightGray,
            },
            flexIcon: {
                flex: 1.4,
                justifyContent: 'center',
                alignItems: 'center',
            },
            avatar: {
                width: 55,
                height: 55,
                borderRadius: 30,
            },
            flexContent: {
                flex: 3,
                marginBottom: 10,
            },
            flexQR: {
                flex: 1,
                marginVertical: 10,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        return (
            <TouchableOpacity style={styles.containter} onPress={() => navigation.navigate('QRCheck', { QRcode: QR, Title: title })}>
                <View style={styles.flexIcon}>
                    <Image style={styles.avatar} source={OrganizationAvt} />
                </View>
                <View style={styles.flexContent}>
                    <Text style={{ fontSize: SIZES.h5, fontWeight: '500' }}>{title}</Text>
                    <Text>{date}</Text>
                </View>
                <View style={styles.flexQR}>
                    <Entypo name='chevron-small-right' style={{ fontSize: 30, opacity: 0.7, }} />
                </View>

            </TouchableOpacity>
        )
    }

    const getActivities = async () => {
        await HomeService.getActivities().then((res) => {
            console.log(res.data);
            setActivities(res.data);
        }).catch(error => {
        })
    }
    React.useEffect(() => {
        getActivities();
    }, []);

    return (
        <View style={styles.containter}>
            <CustomHeader title={'Danh sách hoạt động tham gia'} onPressBack={() => navigation.navigate('Home')} />
            <View style={styles.activities}>
                {
                    Activities.map((acc) =>
                        <Activity
                            key={acc.activitiesID}
                            OrganizationAvt={{ uri: acc.organizationAvt }}
                            title={acc.name}
                            date={'07:00 Ngày 13/12/2022'}
                            QR={acc.qr}
                        />)
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
            ...Platform.select({
                ios: {
                    marginTop: 25,
                },
            }),
    },
    activities: {
        marginTop: 15,
    }

});

export default ActivitiesList;