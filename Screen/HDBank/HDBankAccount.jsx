import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, FlatList, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import CustomInputV1 from '../../Component/Element/CustomInputV1';


const HDBankAccount = ({ navigation }) => {
    const [fullname, setFullname] = useState('Lê Thị Kim Khánh');
    const [cardId, setCardId] = useState('002704070000092');
    const [balance, setBalance] = useState('200.000.0 ');
    const [historyTransfer, setHistoryTransfer] = useState();
    const [contentLabel, setContentLabel] = useState();

    
    const getHistoryDonate = () => {
        // Call API - Get data transfer
    }
    const getHDBankAccount = async () => {
        
    }
    const getHistoryTransfer = async () => {
        // Call api transfer;
        const DATA = [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                date: '2021-01-28',
                desc: 'CREDIT TRANSFER ON MOBILE',
                amount: '5000.00',
            },
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb281a',
                date: '2021-01-28',
                desc: 'CREDIT TRANSFER ON MOBILE',
                amount: '5000.00',
            },
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53a1b28ba',
                date: '2021-01-28',
                desc: 'CREDIT TRANSFER ON MOBILE',
                amount: '5000.00',
            },
            {
                id: 'bd7acbea-c1b1-46c2-aed5-31d53abb28ba',
                date: '2021-01-28',
                desc: 'CREDIT TRANSFER ON MOBILE',
                amount: '5000.00',
            },
            {
                id: 'bd7acbea-c1b1-46c2-1ed5-3ad53abb28ba',
                date: '2021-01-28',
                desc: 'CREDIT TRANSFER ON MOBILE',
                amount: '5000.00',
            },
        ];
        setHistoryTransfer(DATA);
        setContentLabel('Lịch sử ủng hộ');
    }
    
    const HistoryTransfer = ({historyTransfer}) => {
        
        const DonateHistoryItem = ({ date, desc, amount }) => (
            <View style={styles.transferItem}>
                <View style={styles.transferDescibe}>
                    <Text style={styles.transferTime}>{date}</Text>
                    <Text style={styles.transferDesc}>{desc}</Text>
                </View>
                <View style={styles.transferAmount}>
                    <Text style={styles.transferAmountText}>{amount}</Text>
                </View>
            </View>
        );

        const renderItem = ({ item }) => (
            <DonateHistoryItem date={item.date} desc={item.desc} amount={item.amount} />
        );
        
        // Use effect
        return (
            <FlatList
                data={historyTransfer}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        );
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
                    Tài khoản HDBank
                </Text>
            </View>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.HDBankCard}>
                        <Image style={styles.logo} source={require('../../assets/icon/HDBank/hdbankLogo.png')} />
                        <View style={styles.flexUserinfo}>
                            <Text style={styles.fullname}>{fullname}</Text>
                            <Text style={styles.cardId}>{cardId}</Text>
                        </View>
                        <View style={styles.flexBalance}>
                            <Text style={styles.balance}>{balance} VNĐ</Text>
                        </View>
                    </View>
                    <View style={styles.navigationBtn}>
                        <Pressable style={styles.action} onPress={() => getHistoryTransfer()} >

                            <View style={styles.actionBtn}>
                                <Image style={styles.actionIcon} />
                            </View>
                            <Text style={styles.actionText}>Lịch sử ủng hộ</Text>
                        </Pressable>

                        <Pressable style={styles.action}>
                            <View style={styles.actionBtn}>
                                <Image style={styles.actionIcon} />
                            </View>
                            <Text style={styles.actionText}>Chuyển tài khoản</Text>
                        </Pressable>

                        <Pressable style={styles.action} onPress={() => navigation.navigate('HDBankChangePassword')}>

                            <View style={styles.actionBtn}>
                                <Image style={styles.actionIcon} />
                            </View>
                            <Text style={styles.actionText}>Đổi mật khẩu</Text>
                        </Pressable>

                        <Pressable style={styles.action} onPress={() => navigation.navigate('HDBankLogin')}>
                            <View style={styles.actionBtn}>
                                <Image style={styles.actionIcon} />
                            </View>
                            <Text style={styles.actionText}>Thêm tài khoản</Text>
                        </Pressable>
                    </View>
                    <View >
                        <Text style={styles.actionLabel}>{contentLabel}</Text>

                    </View>
                    
                    <HistoryTransfer historyTransfer={historyTransfer} />
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

    modalView: {
        flex: 1,
        width: SIZES.width,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
    },
    HDBankCard: {
        marginTop: 10,
        height: 175,
        backgroundColor: COLOR.LightGray,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logo: {
        flex: 1,
        width: 140,
        height: 50,
        margin: 10,
        resizeMode: 'cover',
    },
    flexUserinfo: {
        flex: 1.4,
        marginHorizontal: 15,
    },
    fullname: {
        fontSize: SIZES.h3,
        fontWeight: '500'
    },
    cardId: {

    },
    flexBalance: {
        flex: 0.6,
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    balance: {
        fontSize: SIZES.h3,
        fontWeight: '500'
    },

    navigationBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        marginVertical: 10,
    },
    content: {

    },

    action: {
        flex: 1,
    },
    actionBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        backgroundColor: COLOR.LightBlack,
    },
    actionText: {
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 10,

        fontWeight: '500',
    },
    actionLabel: {
        marginBottom: 8,
        fontSize: SIZES.h4,
        fontWeight: '500',
    },

    ///////////////////////////////

    transferItem: {
        flexDirection: 'row',
        height: 80,
        marginVertical: 5,
        borderRadius: 5,
        borderBottomWidth: 5,
        borderBottomColor: COLOR.LightBlack,
    },
    transferDescibe: {
        flex: 1,
    },
    transferAmount: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    transferTime: {
        fontSize: SIZES.h5,
        fontWeight: '400',
        marginHorizontal: 10,
        marginTop: 5,
    },
    transferDesc: {
        fontSize: SIZES.h5,
        fontWeight: '400',
        marginHorizontal: 10,
        marginTop: 5,
    },
    transferAmountText: {
        fontSize: SIZES.h4,
        fontWeight: '500',
        marginRight: 10,
    }
});

export default HDBankAccount;