import React,{useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, ScrollView, Keyboard , StatusBar, TextInput} from 'react-native';
import { styles } from './../Post/PostScreenStyle';
import './../Signup/SignupType';
import CustomButton from '../../Component/Element/CustomButton';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
//import {LinearGradient} from 'expo-linear-gradient';
// import {LinearGradient} from '@shoutem/ui'

const khanhimg = '../../assets/icon/khanh.jpg';
const addPicture = '../../assets/icon/addPicture.png';
const checkin = '../../assets/icon/checkin.png';

const PostScreen = () => {
    const [content, setContent] = useState('');
    const [address, setAddress] = useState('');
    const [people, setPeople] = useState('');

    async function PostContent(urlImage, _type) {
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }

        const username = userStored.responseUser.email ? userStored.responseUser.email : userStored.responseUser.phonenumber;
        console.info('USERNAME:' + username);

        const userToken = userStored.token;
        console.info('USER TOKEN:' + userToken);
        // TODO: Check valid token - then refresh token or login again;

        const baseAPIUpPost = "https://deloy-springboot-mongodb.herokuapp.com/api/firebase/post";
        let _url = baseAPIUpPost;
        _url += '/postImage'

        let fileName = urlImage.split('/').pop();
        let match = /\.(\w+)$/.exec(fileName);
        let typeImage = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();

        formData.append('file', {
            uri: urlImage,
            name: fileName,
            type: typeImage
        });
        formData.append('username', username);

        return await axios({
            method: 'post',
            url: _url,
            timeout: 3000,
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            },
            data: formData,
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
                        <View>
                            <Image style={styles.addPicture} source={require(addPicture)}/>
                        </View>
                    </View>
                </View>
                <View style={{width: 100}}>
                    <CustomButton title='Đăng bài' onPress={()=> PostContent()} />
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default PostScreen;