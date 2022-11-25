import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView , StatusBar } from 'react-native';
import { Colors, RadioButton } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import UserService from '../../Service/api/UserService';
import { styles } from './../Home/HomeScreenStyle';
import * as Progress from 'react-native-progress';
import './../Signup/SignupType';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import {Feather} from '@expo/vector-icons'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
//import {LinearGradient} from 'expo-linear-gradient';
// import {LinearGradient} from '@shoutem/ui'

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const khanhimg = '../../assets/icon/khanh.jpg';
const khaimg = '../../assets/icon/kha.jpg';
const datimg = '../../assets/icon/dat.jpg';
const dot_child = '../../assets/icon/dotChild.png';
const storage = '../../assets/icon/storage.png';
const like = '../../assets/icon/like.png';
const comment = '../../assets/icon/comment.png';
const send = '../../assets/icon/send.png';
const img_content = '../../assets/icon/img_content.jpg';

function Post({post}){
    return(
        <View>
            <View style = {styles.post}>
                <View style = {styles.header}>
                    <View style= {styles.profile}>
                        <Image source={post.profile_img} style = {styles.profile_img}/>
                        <View style = {styles.profile_details}>
                            <Text style = {styles.author}>{post.author}</Text>
                            <Text style = {styles.time}>{post.time}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.content}>
                    <Image source={post.img} style = {styles.img}/>
                    <View style = {styles.text}>
                        <Text style={styles.textHeader}>{post.textHeader}</Text>
                        <Text style={styles.textDesc}>{post.textDesc}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={styles.progressbarText}>
                            <Text style={styles.progressbarTextBold}>{post.peopleLeft} người</Text>
                            <Text style={styles.progressbarTextLight}> để hoàn thành mục tiêu</Text>
                        </View>
                        <Progress.Bar progress={0.3} width={390} color='#FF493C' height={10}  formatText='100' unfilledColor='#F5F5F5' borderColor='#F5F5F5' borderRadius={25}/>
                    </View>
                    <View style={styles.participateContainer}> 
                        <View style={styles.participatePeople}>
                            <View style={styles.participateAvt}>
                                <View style={styles.participateAvtChil1}>
                                    <Image source={require(datimg)} style={styles.avt}/>
                                    <View style={styles.participateAvtChil2}>
                                        <Image source={require(khanhimg)} style={styles.avt}/>
                                            <View style={styles.participateAvtChil3}>
                                                <Image source={require(khaimg)} style={styles.avt}/>
                                                    <View style={styles.participateAvtChildDot}>
                                                        <View>
                                                            <Image source={require(dot_child)} style={styles.avt}/>
                                                        </View>
                                                        <View style={styles.dot}>
                                                            <View style={{opacity: 1}}>
                                                                <Antdesign name='ellipsis1' color='#ffffff' size={'20'} style={{textAlign:'center'}}/>
                                                            </View>
                                                        </View>
                                                    </View>
                                            </View>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.participateText}>
                                <Text style={styles.participateTextBold}>{post.peopleOk} Người</Text>
                                <Text style={styles.participateTextLight}> Đã tham gia</Text>
                            </View>
                        </View>
                        <Button 
                            title="Tham gia"
                            buttonStyle={{ backgroundColor: 'red' }}
                            containerStyle={styles.containerButton}
                            titleStyle={styles.titleButton}
                            />
                    </View>
                </View>
                <View style = {styles.footer}>
                    <View style = {styles.icon_like}>
                        <TouchableOpacity style={styles.like} onPress={() => {}}>
                        <Image source={require(like)} style={styles.like}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.like} onPress={() => {}}>
                            <Image source={require(comment)} style={styles.like}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.like} onPress={() => {}}>
                            <Image source={require(send)} style={styles.like}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.icon}>
                        <TouchableOpacity style={styles.like} onPress={() => {}}>
                            <Image source={require(storage)} style={styles.like}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
function Stories({img, name}){
    return(
        <View>
            <View style={styles.borderStories_img}>
                <Image source={img} style = {styles.stories_img}/>
            </View>
        </View>
    )
}

const Home = () => {
    const[data, setData] = React.useState([
        {author: "Lê Đỗ Thành Đạt", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 23, comment: 32, profile_img: require(datimg), peopleOk: '20' , peopleLeft: '10'},
        {author: "Phan Hoàng Kha", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khaimg), peopleOk: '20', peopleLeft: '10'},
        {author: "Lê Thị Kim Khánh", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khanhimg), peopleOk: '20', peopleLeft: '10'},
        {author: "Lê Đỗ Thành Đạt", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 23, comment: 32, profile_img: require(datimg), peopleOk: '20' , peopleLeft: '10'},
        {author: "Phan Hoàng Kha", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khaimg), peopleOk: '20', peopleLeft: '10'},
        {author: "Lê Thị Kim Khánh", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khanhimg), peopleOk: '20', peopleLeft: '10'},
        {author: "Lê Đỗ Thành Đạt", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 23, comment: 32, profile_img: require(datimg), peopleOk: '20' , peopleLeft: '10'},
        {author: "Phan Hoàng Kha", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khaimg), peopleOk: '20', peopleLeft: '10'},
        {author: "Lê Thị Kim Khánh", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content), likes: 50, comment: 50, profile_img: require(khanhimg), peopleOk: '20', peopleLeft: '10'}
    ])
    return(
        <View  style={{flex: 1}}>
            <SafeAreaView style = {{backgroundColor:'white'}}>
                <StatusBar barStyle="dark-content" animated={true} backgroundColor='white'/>
                <View style ={styles.statusbar}>
                    <Text style ={styles.nameApp}>#Viectute</Text>
                    <View style={{display:'flex', flexDirection:'row', marginRight: 20}}>
                        <FontAwesome name='plus-square-o' style={{fontSize: 30}}/>
                        <Feather name='navigation' style={{fontSize: 30, marginLeft: 10}}/>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{height:115}}>
                <View style={styles.stories}>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                        <View style={{paddingRight: 7, marginTop: 3}}>
                            <Image source={require(khanhimg)} style={styles.stories_img}/>
                            <View style={{position: 'absolute'}}>
                                <View style={styles.addbtnStoriesContainer}>
                                    <Ionicons name='add'style={styles.addbtnStories}/>
                                </View>
                            </View>
                        </View>
                        {data.map((post) => <Stories key="{item}" img={post.profile_img} name={post.author}/>)}
                    </ScrollView>
                </View>
            </View>
            <ScrollView style={styles.container}> 
                {data.map((post) => <Post post={post}/>)}
            </ScrollView>
        </View>
    );
}

export default Home