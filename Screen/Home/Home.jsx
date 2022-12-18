import * as React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView , StatusBar} from 'react-native';
import { Colors, RadioButton, Menu, Provider } from 'react-native-paper';
import CustomButton from '../../Component/Element/CustomButton';
import CustomInput from '../../Component/Element/CustomInput';
import { styles } from './../Home/HomeScreenStyle';
import * as Progress from 'react-native-progress';
import './../Signup/SignupType';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import {Feather} from '@expo/vector-icons'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


//import {LinearGradient} from 'expo-linear-gradient';
// import {LinearGradient} from '@shoutem/ui'

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const avt1 = '../../assets/icon/avt1.png';
const avt2 = '../../assets/icon/avt2.png';
const avt3 = '../../assets/icon/avt3.png';
const avt4 = '../../assets/icon/avt4.png';
const dot_child = '../../assets/icon/dotChild.png';
const storage = '../../assets/icon/storage.png';
const like = '../../assets/icon/like.png';
const comment = '../../assets/icon/comment.png';
const send = '../../assets/icon/send.png';
const img_content1 = '../../assets/icon/img_content1.jpg';
const img_content2 = '../../assets/icon/img_content.jpg';
const img_content3 = '../../assets/icon/img_content2.jpg';
const img_content4 = '../../assets/icon/img_content1.jpg';
const khanhimg = '../../assets/icon/khanh.jpg';
const khaimg = '../../assets/icon/kha.jpg';
const datimg = '../../assets/icon/dat.jpg';

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
                                    <Image source={require(avt1)} style={styles.avt}/>
                                    <View style={styles.participateAvtChil2}>
                                        <Image source={require(avt2)} style={styles.avt}/>
                                            <View style={styles.participateAvtChil3}>
                                                <Image source={require(avt3)} style={styles.avt}/>
                                                    <View style={styles.participateAvtChildDot}>
                                                        <View>
                                                            <Image source={require(dot_child)} style={styles.avt}/>
                                                        </View>
                                                        <View style={styles.dot}>
                                                            <View style={{opacity: 1}}>
                                                                <Antdesign name='ellipsis1' color='#ffffff' size={'20'} style={{textAlign:'center', marginLeft:5}}/>
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
                            buttonStyle={{ display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent:'center',
                                        borderRadius: 8,
                                        width: 120,
                                        height: '100%',
                                        backgroundColor: 'red',}}
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
    const navigation = useNavigation();
    const[data, setData] = React.useState([
        {key: '123',author: "Trung tâm bảo trợ trẻ em Tâm Bình", time: "30 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ TRẺ', textDesc: 'Cần người tìm người cần giúp đỡ việc dọn dẹp và tân trang lại trung tâm để đón năm mới',img: require(img_content2), likes: 23, comment: 32, profile_img: require(avt1), peopleOk: '10' , peopleLeft: '50'},
        {key: '124',author: "Hỗ trợ người già neo đơn", time: "1 giờ trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content1), likes: 50, comment: 50, profile_img: require(avt2), peopleOk: '20', peopleLeft: '10'},
        {key: '125',author: "Chùa Bửu Sơn", time: "10 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content2), likes: 50, comment: 50, profile_img: require(avt3), peopleOk: '20', peopleLeft: '10'},
        {key: '126',author: "Trung tâm hỗ trợ người khuyết tật", time: "40 giây trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content3), likes: 23, comment: 32, profile_img: require(avt4), peopleOk: '20' , peopleLeft: '10'},
        {key: '127',author: "Chùa Gò Kén", time: "1 ngày trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content4), likes: 50, comment: 50, profile_img: require(avt1), peopleOk: '20', peopleLeft: '10'},
        {key: '128',author: "Trường Biên Giới", time: "3 ngày trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content1), likes: 50, comment: 50, profile_img: require(avt2), peopleOk: '20', peopleLeft: '10'},
        {key: '129',author: "Hỗ trợ người lớn tuổi", time: "5 giờ trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content2), likes: 23, comment: 32, profile_img: require(avt3), peopleOk: '20' , peopleLeft: '10'},
        {key: '120',author: "Hỗ trợ người nghèo", time: "1 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content3), likes: 50, comment: 50, profile_img: require(avt4), peopleOk: '20', peopleLeft: '10'},
        {key: '121',author: "Chùa Tây Ninh", time: "10 phút trước", textHeader: 'TÂN TRANG TRUNG TÂM BẢO TRỢ', textDesc: 'Cần người tình nguyện tham gia dọn dẹp và tân trang lại trung tâm',img: require(img_content4), likes: 50, comment: 50, profile_img: require(avt1), peopleOk: '20', peopleLeft: '10'}
    ])
    const [visible, setVisible] = useState(false);
  
    const closeMenu = () => setVisible(false);
    const openMenu = (v) => setVisible(true);
    const accessPage2 = () => navigation.navigate('Donate');
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
            <ScrollView>
                <View>
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
                <View>
                            <View style = {styles.post}>
                                <View style = {styles.header}>
                                    <View style= {styles.profile}>
                                        <Image source={require(avt4)} style = {styles.profile_img}/>
                                        <View style = {styles.profile_details}>
                                            <Text style = {styles.author}>Trung tâm hỗ trợ lũ lụt Việt Nam</Text>
                                            <Text style = {styles.time}>2 ngày trước</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style = {styles.content}>
                                    <Image source={require(img_content3)} style = {styles.img}/>
                                    <View style = {styles.text}>
                                        <Text style={styles.textHeader}>GÂY QUỸ GIÚP ĐỠ NGƯỜI DÂN MIỀN TRUNG SAU LŨ LỤT</Text>
                                        <Text style={styles.textDesc}>Chung tay gây quỹ giúp người dân ở miền Trung sau những thiệt hại do lũ</Text>
                                    </View>
                                    <View style={styles.progressBar}>
                                        <View style={styles.progressbarText}>
                                            <Text style={styles.progressbarTextBold}>150.000.000</Text>
                                            <Text style={styles.progressbarTextLight}> để hoàn thành mục tiêu</Text>
                                        </View>
                                        <Progress.Bar progress={0.3} width={390} color='#FF493C' height={10}  formatText='100' unfilledColor='#F5F5F5' borderColor='#F5F5F5' borderRadius={25}/>
                                    </View>
                                    <View style={styles.participateContainer}> 
                                        <View style={styles.participatePeople}>
                                            <View style={styles.participateAvt}>
                                                <View style={styles.participateAvtChil1}>
                                                    <Image source={require(avt1)} style={styles.avt}/>
                                                    <View style={styles.participateAvtChil2}>
                                                        <Image source={require(avt2)} style={styles.avt}/>
                                                            <View style={styles.participateAvtChil3}>
                                                                <Image source={require(avt3)} style={styles.avt}/>
                                                                    <View style={styles.participateAvtChildDot}>
                                                                        <View>
                                                                            <Image source={require(dot_child)} style={styles.avt}/>
                                                                        </View>
                                                                        <View style={styles.dot}>
                                                                            <View style={{opacity: 1}}>
                                                                                <Antdesign name='ellipsis1' color='#ffffff' size={'20'} style={{textAlign:'center', marginLeft:5}}/>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                            </View>
                                                    </View>
                                                </View>
                                            </View>
                                            
                                            <View style={styles.participateText}>
                                                <Text style={styles.participateTextBold}>50 Người</Text>
                                                <Text style={styles.participateTextLight}> Đã tham gia</Text>
                                            </View>
                                        </View>
                                        <Button 
                                            title="Ủng hộ"
                                            buttonStyle={{ display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent:'center',
                                                        borderRadius: 8,
                                                        width: 120,
                                                        height: '100%',
                                                        backgroundColor: 'red',}}
                                            containerStyle={styles.containerButton}
                                            titleStyle={styles.titleButton}
                                            onPress={()=> {accessPage2();}}
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
                <ScrollView style={styles.container}> 
                    {data.map((post) => <Post post={post}/>)}
                </ScrollView>
            </ScrollView>
        </View>
    );
}

export default Home;