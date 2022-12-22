import React,{useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, ScrollView, Keyboard , TouchableOpacity, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './../Post/PostScreenStyle';
import './../Signup/SignupType';
import CustomButton from '../../Component/Element/CustomButton';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
import UserService from '../../Service/api/UserService';
//import {LinearGradient} from 'expo-linear-gradient';
// import {LinearGradient} from '@shoutem/ui'

const khanhimg = '../../assets/icon/khanh.jpg';
const addPicture = '../../assets/icon/addPicture.png';
const checkin = '../../assets/icon/checkin.png';

const PostScreen = ({navigation}) => {
    const [content, setContent] = useState('');
    const [address, setAddress] = useState('');
    const [people, setPeople] = useState('');
    const [ContentPicture, setContentPicture] = useState('');
    const title = 'Tham gia tình nguyện';
    const subtitle = 'Hỗ trợ';
    const type = 'TN';

    const ContentPictureOption = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2, 2],
        quality: 1,
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            ContentPictureOption,
        });
        console.log(result);
        if (result.uri) {
            setContentPicture(result.uri);
        }
    }

    const onPost = async () => {
        await UserService.PostContent(ContentPicture, content, title, subtitle, type, address, people).then((res) => {
            console.log(res.data.status);
            if(res.data.status === '201 CREATED')
                {navigation.navigate('joinSuccess');}
            
        }).catch(error => {
            console.error(error);
        });
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <View style = {styles.post}>
                    <View style = {styles.header}>
                        <View style= {styles.profile}>
                            <Image source={khanhimg} style = {styles.profile_img}/>
                            <View style = {styles.profile_details}>
                                <Text style = {styles.author}>Hỗ trợ trẻ quận 9</Text>
                                <View style={styles.checkin}>
                                    <Image source={require(checkin)} style={styles.checkinIcon}/>
                                    <Text style = {styles.checkinText}>TP HCM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <TextInput
                        onChangeText={(contentText) => {
                            setContent(contentText);
                        }}
                        style={styles.content_detail}
                        placeholder="Bạn muốn kêu gọi việc tình nguyện gì ..."
                        multiline={true}
                    />
                    <Text style={styles.headerInput}>Địa chỉ:</Text>
                    <TextInput
                        onChangeText={(addressText) => {
                            setAddress(addressText);
                        }}
                        style={styles.address}
                        placeholder="TPHCM"
                        multiline={true}/>
                    <View style={styles.address_people}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={styles.headerInput}>Số tình nguyện viên:</Text>
                            <TextInput
                                onChangeText={(peopleText) => {
                                    setPeople(peopleText);
                                }}
                                style={styles.people}
                                placeholder="100"
                                multiline={true}
                                keyboardType='numeric'
                            />
                        </View>
                        <TouchableOpacity onPress={()=>{pickImage()}}>
                            <View>
                                <Image style={styles.addPicture} source={require(addPicture)}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{width: '50%', }}>
                        <CustomButton title='Đăng bài' onPress={()=> onPost()} />
                    </View>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default PostScreen;