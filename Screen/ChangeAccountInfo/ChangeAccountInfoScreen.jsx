import React from 'react';
import { SafeAreaView, View, Pressable, Image, Text, } from 'react-native';
import { SIZES } from '../../Component/Constants/Theme';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import { styles } from './ChangeAccountInfoScreenStyle';

const ChangeAccountInfoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <DatePicker
                onSelectedChange={date => setSelectedDate(date)}
            />  
            <View style={styles.header}>
                <Pressable style={styles.goback} onPress={() => { navigation.navigate('Account') }}>
                    <Image style={styles.gobackIcon} source={require('../../assets/icon/arrow-to-left.jpg')} />
                </Pressable>
                <Text style={styles.headerName}>Thay đổi thông tin tài khoản</Text>
            </View>
            <View style={styles.avatar}>
                <Image style={styles.avatarImage} source={require('../../assets/icon/lisa.jpg')} />
                <Text style={styles.headerName}>Chỉnh sửa</Text>
            </View>
            <View style={styles.form}>
                <Text style={{ fontSize: SIZES.h4 }}>Tên tài khoản</Text>
                <CustomInput icon={require('../../assets/icon/AccountScreenICon/icons8-ask-question-100.png')} style={styles.inputText} />
                <Text style={{ fontSize: SIZES.h4 }}>Giới tính</Text>
                <CustomInput style={styles.inputText}/>
                <Text style={{ fontSize: SIZES.h4 }}>Ngày sinh</Text>

                <Text style={{ fontSize: SIZES.h4 }}>Địa chỉ</Text>
                <CustomInput style={styles.inputText} />
                <CustomButton title={'Cập nhật'} />
            </View>
            <Text>CHange info</Text>
        </SafeAreaView>
    );
}
export default ChangeAccountInfoScreen;