import { useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Image, Pressable, ScrollView, ImageBackground } from 'react-native';
import CustomButton from '../../Component/Element/CustomButton';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
import { styles } from './AccountScreenStyle';
import Option from './Option';

const AccountScreen = ({ navigation }) => {
    const [userName, setUsername] = useState();
    const [avt, setAvt] = useState();
    const [email, setEmail] = useState();

    const getUserStored = async () => {
        const userStored = await AsyncStoraged.getData();
        const _user = userStored.responseUser;
        setUsername(_user.firstname + ' '+_user.lastname);
        setAvt(_user.avatar);
        setEmail(_user.email);
    }

    useEffect(() => { getUserStored(); }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.containter}>
                <View style={styles.header} resizeMode="cover" source={require('../../assets/icon/lisa.jpg')}>
                    <Pressable style={styles.goback} onPress={() => { navigation.navigate('Home') }}>
                        <Image style={styles.gobackIcon} source={require('../../assets/icon/arrow-to-left.jpg')} />
                    </Pressable>

                    <View style={styles.account}>
                        <View style={styles.name}>
                            <Text style={styles.textName}>{userName}</Text>
                            <Text>{email}</Text>
                        </View >
                        <Image style={styles.avatarImage} source={{uri: avt}} />
                    </View>
                </View>
                <View style={styles.mark}>

                </View>
                <View style={styles.options}>
                    <Option
                        onPress={() => { navigation.navigate('ChangeAccountInfo') }}
                        title={'Thay đổi thông tin tài khoản'} 
                        icoName={'user'}/>
                    <Option
                        title={'Các hoạt động gần đây'}
                        onPress={() => { navigation.navigate('') }} 
                        icoName={'heart'}/>
                    <Option
                        title={'Điểm danh hoạt động'}
                        onPress={() => { navigation.navigate('ScanQR') }} 
                        icoName={'frame'}/>
                    <Option
                        title={'Trợ giúp'} 
                        icoName={'question'}/>
                    <Option
                        title={'Chính xách bảo mật'} 
                        icoName={'doc'}/>

                    <CustomButton title={'Đăng xuất'} onPress={() => navigation.navigate('Login')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AccountScreen;