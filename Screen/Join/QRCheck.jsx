import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../Component/Element/CustomHeader";
import QRCode from 'react-native-qrcode-svg';
import { COLOR, SIZES } from "../../Component/Constants/Theme";


const QRCheck = ({ navigation, route }) => {
    const [Activities, setActivities] = useState([]);
    const [QR, setQR] = useState();
    const [title, setTitle] = useState();
    

    React.useEffect(() => {
        if(route.params?.QRcode) {
            setQR(route.params?.QRcode);
            setTitle(route.params?.Title);
        }
    }, [route.params?.QRcode]);
    return (
        <View style={styles.containter}>
            <CustomHeader title={'Điểm Danh'} onPressBack={() => navigation.navigate('Home')} />
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.header}>Điểm danh bằng QR</Text>
                    <Text style={styles.content}>Cảm ơn bạn đã tham gia tình nguyện cùng Việc Tử Tế, Hãy đưa mã này cho người tổ chức để điểm danh nhé!</Text>
                    <View style={styles.QR}>
                        <QRCode
                            value="HnsdYQ1fmgnvhgg"
                            size={200}
                            color={COLOR.DeepBlue}
                        />
                    </View>
                    <Text style={styles.headersecond}>Hoạt Động:</Text>
                    <Text style={styles.contentsecond}>{title}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    body: {
        marginVertical: 40,
    },
    title: {
        marginTop: 20,
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: SIZES.h1,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 15,
    },
    headersecond: {
        fontSize: SIZES.h2,
        fontWeight: '500',
        textAlign: 'center',
    },
    content: {
        fontSize: SIZES.h4,
        textAlign: 'center',
    },
    contentsecond: {
        fontSize: SIZES.h4,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    QR: {
        marginVertical: 60,
        alignItems: 'center',
        textAlign: 'center',
    }
});

export default QRCheck;