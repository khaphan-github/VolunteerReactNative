import React,{useState, useEffect} from 'react';
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
    const [title, setTitle] = useState('');
    const subtitle = 'Hỗ trợ';
    const type = 'TN';
    const [userName, setUsername] = useState('');
    const [avt, setAvt] = useState('');
    const ContentPictureTemp = '../../assets/icon/addPicture.png'

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

    const getUserStored = async () => {
        const userStored = await AsyncStoraged.getData();
        const _user = userStored.responseUser;
        setUsername(_user.firstname + ' '+_user.lastname);
        setAvt(_user.avatar)
    }

    useEffect(() => { getUserStored(); }, []);

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style= {{backgroundColor: '#F6F6F6', height: '100%'}}>
                <View style = {styles.post}>
                    <View style = {styles.header}>
                        <View style= {styles.profile}>
                            <Image source={{uri: avt}} style = {styles.profile_img}/>
                            <View style = {styles.profile_details}>
                                <Text style = {styles.author}>{userName}</Text>
                                <View style={styles.checkin}>
                                    <Image source={require(checkin)} style={styles.checkinIcon}/>
                                    <Text style = {styles.checkinText}>TP HCM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal: 10}}>
                    <View>
                    <Text style={styles.headerInput}>Nhập tiêu đề:</Text>
                        <TextInput
                            onChangeText={(titleText) => {
                                setTitle(titleText);
                            }}
                            style={styles.address}
                            placeholder="Hỗ trợ người dân miền Trung"
                            multiline={true}/>
                    </View>
                    <View style={styles.content}>
                    <Text style={styles.headerInput}>Nhập nội dung:</Text>
                        <TextInput
                            onChangeText={(contentText) => {
                                setContent(contentText);
                            }}
                            style={styles.content_detail}
                            placeholder="Bạn muốn kêu gọi việc tình nguyện gì ..."
                            multiline={true}
                        />
                        <TouchableOpacity onPress={()=>{pickImage()}}>
                        <Text style={styles.headerInput}>Thêm ảnh:</Text>
                            <View style={{ justifyContent:'center', alignItems: 'center',  marginHorizontal: 10, shadowColor: '#c5c5c5', shadowOpacity: 0.7, borderWidth: 2, borderColor: '#c5c5c5'}}>
                                <Image source={{uri: ContentPicture}}style={{height: 180, width:'100%'}}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.headerInput}>Địa chỉ:</Text>
                        <TextInput
                            onChangeText={(addressText) => {
                                setAddress(addressText);
                            }}
                            style={styles.address}
                            placeholder="TPHCM"
                            multiline={true}/>
                        <Text style={styles.headerInput}>Số tình nguyện viên:</Text>
                        <View style={styles.address_people}>
                            <View style={{justifyContent: 'center'}}>   
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
                    <View style={{justifyContent:'center', alignItems:'center',}}>
                        <View style={{width: 200,}}>
                            <CustomButton title='Đăng bài' onPress={()=> onPost()} />
                        </View>
                    </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default PostScreen;