import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './SignupScreenStyle';
import './global' 

const phonenumberIcon = '../../assets/icon/phonenumberIcon.png';
const phoneIcon = '../../assets/icon/passwordIcon.jpg';
const emailIcon = '../../assets/icon/mailIcon.jpg';
const userIcon = '../../assets/icon/userIcon.png';
const arow = '../../assets/icon/arrow-to-left.jpg';




const SignupType = ({navigation}) => {
    const [value, setValue] = useState('Single');
    
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('Login')}}>
                <Image source={require(arow)} style={styles.arrowReturn}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <Text style={styles.textHeader}>Chọn loại</Text>
                <Text style={styles.textDesc}>Vui lòng chọn một trong hai</Text>
            </View>
            <View>
            <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <TouchableOpacity style={styles.mainWrapper} onPress={()=>{{setValue('Single'); navigation.navigate('SignupEmail'); global.value ="Single";}}}>
                    {/* <Fontisto name="date" size={24} color="white" /> */}
                    <Text style={{ color: 'white' }}>Cá nhân</Text>
                    <RadioButton value="Single" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainWrapper} onPress={()=>{setValue('Organisation'); navigation.navigate('SignupEmail'); global.value = "Organisation";}}>
                {/* <Ionicons name="alarm" size={24} color="white" /> */}
                    <Text style={{ color: 'white' }}>Tổ chức</Text>
                    <RadioButton value="Organisation" color="white"/>
                </TouchableOpacity>
            </RadioButton.Group>
            </View>
        </ScrollView>
    );
};
export default SignupType;