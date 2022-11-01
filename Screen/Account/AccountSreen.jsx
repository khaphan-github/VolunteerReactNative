import { SafeAreaView, View, Text, Image, Pressable, ScrollView } from 'react-native';
import CustomButton from '../../Component/Element/CustomButton';

import { styles } from './AccountScreenStyle';
import Option from './Option';

const AccountScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.containter}>
                    <View style={styles.header} resizeMode="cover" source={require('../../assets/icon/lisa.jpg')}>
                        <Pressable style={styles.goback} onPress={() => { navigation.navigate('Home') }}>
                            <Image style={styles.gobackIcon} source={require('../../assets/icon/arrow-to-left.jpg')} />
                        </Pressable>

                        <View style={styles.account}>
                            <View style={styles.name}>
                                <Text style={styles.textName}>Lê Đỗ Thành Đạt</Text>
                                <Text>ledothanhdat@gmail.com</Text>
                            </View >
                            <Image style={styles.avatarImage} source={require('../../assets/icon/lisa.jpg')} />
                        </View>
                    </View>
                    <View style={styles.buttonInformation}>
                        <View style={styles.heartPoint}>
                            <Image style={styles.heartIcon} source={require('../../assets/icon/logo.jpg')} />
                            <Text style={styles.heartValue}>123</Text>
                        </View>
                    </View>
                    <View style={styles.options}>
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-customer-96.png')} title={'Thay đổi thông tin tài khoản'} />
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-favorite-96.png')} title={'Các hoạt động đã tham gia'} />
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-list-view-100.png')} title={'Danh sách theo giỏi'} />
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-ask-question-100.png')} title={'Trợ giúp'} />
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-privacy-policy-100.png')} title={'Chính xách bảo mật'} />
                        <Option headIcon={require('../../assets/icon/AccountScreenICon/icons8-policy-64.png')} title={'Điều khoản sử dụng'} />

                        <CustomButton title={'Đăng xuất'} />
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
}

export default AccountScreen;