import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomHeader from '../../Component/Element/CustomHeader';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import CustomButton from '../../Component/Element/CustomButton';

const ScanQR = ({ navigation, route }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            console.log(hasPermission);
        };
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.camera}
            />
            {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
            <CustomHeader title={'Điểm danh'}></CustomHeader>
            <View style={styles.title}>
                <Text style={styles.titleText}>Scan QR để điểm danh</Text>
                <Text style={styles.content}>Cảm ơn bạn đã tham gia tình nguyện cùng Việc Tử Tế, Hãy đưa mã này cho người tổ chức để điểm danh nhé!</Text>
            </View>
            <View style={styles.qrFrame}>
                <Image style={styles.img} source={require('../../assets/icon/AccountScreenICon/426-4264340_border-for-qr-code-area-parallel.png')}></Image>
            </View>
            <View style={styles.navigateBtn}>
                <View style={styles.navigate}>
                    <Text style={styles.titleText}>Scan QR để điểm danh</Text>
                    <Text style={styles.content}>Cảm ơn bạn đã tham gia tình nguyện cùng Việc Tử Tế, Hãy đưa mã này cho người tổ chức để điểm danh nhé!</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    camera: {
        position: 'absolute',
        width: SIZES.width,
        height: SIZES.height - 25,
    },
    title: {
        flex: 0.6,
        width: SIZES.width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 20,
        fontWeight: '500',
    },
    content: {
        textAlign: 'center',
        marginHorizontal: 20,
    },
    qrFrame: {
        flex: 1,
        marginVertical: 25,
    },
    navigateBtn: {
        flex: 1,
        backgroundColor: 'white',
    },
    navigate: {
        width: SIZES.width,
        marginTop: 20,
        alignItems: 'center'
    },
    img: {
        width: 250,
        height: 250,
    }

});

export default ScanQR;