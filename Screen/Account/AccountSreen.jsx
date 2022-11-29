import { useState } from 'react';
import { SafeAreaView, View, Text, Image, Pressable, ScrollView, ImageBackground } from 'react-native';
import CustomButton from '../../Component/Element/CustomButton';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
import { styles } from './AccountScreenStyle';
import Option from './Option';

const AccountScreen = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState();

    return (
        <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.containter}>
                    <View style={styles.header} resizeMode="cover" source={require('../../assets/icon/lisa.jpg')}>
                        <Pressable style={styles.goback} onPress={() => { navigation.navigate('Home') }}>
                            <Image style={styles.gobackIcon} source={require('../../assets/icon/arrow-to-left.jpg')} />
                        </Pressable>

                        <View style={styles.account}>
                            <View style={styles.name}>
                                <Text style={styles.textName}>Đạt</Text>
                                <Text>ledothanhdat@gmail.com</Text>
                            </View >
                            <Image style={styles.avatarImage} source={require('../../assets/icon/lisa.jpg')} />
                        </View>
                    </View>
                    
                    <View style={styles.options}>
                        <Option onPress={() => {navigation.navigate('ChangeAccountInfo')}} title={'Thay đổi thông tin tài khoản'} />
                        <Option title={'Tài Khoản HDBank của tôi'} onPress={() => {navigation.navigate('')}}/>
                        <Option title={'Danh sách theo dõi'} />
                        <Option title={'Trợ giúp'} />
                        <Option title={'Chính xách bảo mật'} />
                
                        <CustomButton title={'Đăng xuất'} onPress={ async () => {
                            await AsyncStoraged.removeData();
                            console.log(AsyncStoraged.getToken());
                            navigation.navigate('AuthStackNavigator', {screen: 'IntroSlider'});
                            }}/> 
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
}

export default AccountScreen;