import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, FlatList, Alert, Modal } from 'react-native';
import { styles } from './../Home/HomeScreenStyle';
import * as Progress from 'react-native-progress';
import './../Signup/SignupType';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

import { Feather } from '@expo/vector-icons'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../Component/Constants/Theme';
import { async } from 'q';
import HomeService from '../../Service/api/HomeService';
import AsyncStoraged from '../../Service/client/AsyncStoraged';


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const dot_child = '../../assets/icon/dotChild.png';
const storage = '../../assets/icon/storage.png';
const like = '../../assets/icon/like.png';
const redHeart = '../../assets/icon/icons8-heart-64.png';
const comment = '../../assets/icon/comment.png';
const send = '../../assets/icon/send.png';
const more = '../../assets/icon/icons8-more-90.png';
const khanhimg = '../../assets/icon/khanh.jpg';
const search = '../../assets/icon/icons8-search-100.png';
const logo = '../../assets/icon/icon.png'
const user = '../../assets/icon/icons8-male-user-64.png'
const notifi = '../../assets/icon/notification.png';
const home = '../../assets/icon/icons8-home-page-96.png'
const Post = ({ postdata, onEndReached, onEndReachedThreshold, onPressJoin }) => {
    const PostItem = ({ item, authorAvt, authorName, mainimage, timePost, headerPost, descPost, peopleLeft, joinedList, joinedNumber, postType }) => {
        const navigation = useNavigation();
        const isLogin = async () => {
            const userStored = await AsyncStoraged.getData();
            if (userStored === null) {
                return false;
            }
            return true;
        }
        const showAlert = () =>
            Alert.alert(
                "Việc Tử Tế",
                "Hãy đăng nhập để tiếp tục cùng Việc Tử Tế",
                [
                    {
                        text: "Thoát",
                        style: "ok",
                    },
                    {
                        text: "Đăng nhập",
                        onPress: () => { navigation.navigate('IntroSlider'); },
                        style: "cancel",
                    },

                ],
            );
        const [heartState, sethearthState] = useState(require(like));
        const [joinedState, setJoinedState] = useState('Tham Gia');
        const joinActivities = () => {

            if (!isLogin()) {
                showAlert();
                return;
            }
            navigation.navigate('Join', { postInfo: item })
        }
        const likeActivities = async () => {
            if (!isLogin()) {
                showAlert();
                return;
            }
            heartState == require(like) ? sethearthState(require(redHeart)) : sethearthState(require(like))
        }

        const donateActivities = () => {
            if (!isLogin()) {
                showAlert();
                return;
            }
            navigation.navigate('Donate', { postInfo: item });
        }

        return (
            <View style={styles.post}>
                <View style={styles.header}>
                    <View style={styles.flextHeader}>
                        <View style={styles.profile}>
                            <Image source={{ uri: authorAvt }} style={styles.profile_img} />
                            <View style={styles.profile_details}>
                                <Text style={styles.author}>{authorName}</Text>
                                <Text style={styles.time}>{timePost}</Text>
                            </View>
                        </View>
                        <View style={styles.more}>
                            <TouchableOpacity style={styles.save} onPress={() => { }}>
                                <Image source={require(more)} style={styles.like} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={{ uri: mainimage }} style={styles.img} />
                    <View style={styles.text}>
                        <Text style={styles.textHeader}>{headerPost}</Text>
                        <Text style={styles.textDesc}>{descPost}</Text>
                    </View>
                    {postType == 'TN' ?
                        <View style={styles.progressBar}>
                            <View style={styles.progressbarText}>
                                <Text style={styles.progressbarTextBold}>Còn {peopleLeft - joinedNumber} người</Text>
                                <Text style={styles.progressbarTextLight}> để hoàn thành mục tiêu</Text>
                            </View>
                            <Progress.Bar progress={joinedNumber / peopleLeft} color='#FF493C' height={8} width={SIZES.width - 20} unfilledColor='#F5F5F5' borderColor='#F5F5F5' borderRadius={25} />
                        </View>
                        :
                        <View style={styles.progressBar}>
                            <View style={styles.progressbarText}>
                                <Text style={styles.progressbarTextBold}>Còn {(item.totalMoney - item.currentMoney).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ</Text>
                                <Text style={styles.progressbarTextLight}> để hoàn thành mục tiêu</Text>
                            </View>
                            <Progress.Bar progress={item.currentMoney / item.totalMoney} color='#FF493C' height={8} width={SIZES.width - 20} unfilledColor='#F5F5F5' borderColor='#F5F5F5' borderRadius={25} />
                        </View>
                    }


                    <View style={styles.participateContainer}>
                        {/* <View style={styles.participatePeople}>
                            <View style={styles.avt}>
                                <View style={styles.participateAvt}>
                                    <View style={styles.participateAvtChil1}>
                                        <Image source={{ uri: joinedList[0] }} style={styles.avt} />
                                        <View style={styles.participateAvtChil2}>
                                            <Image source={{ uri: joinedList[1] }} style={styles.avt} />
                                            <View style={styles.participateAvtChil3}>
                                                <Image source={{ uri: joinedList[2] }} style={styles.avt} />
                                                <View style={styles.participateAvtChildDot}>
                                                    <View>
                                                        <Image source={require(dot_child)} style={styles.avt} />
                                                    </View>
                                                    <View style={styles.dot}>
                                                        <View style={{ opacity: 1 }}>
                                                            <Antdesign name='ellipsis1' color='#ffffff' size={20} style={{ textAlign: 'center', marginLeft: 5 }} />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View> */}
                        {postType == 'TN' ?
                            <View style={styles.joinBtn}>
                                <View style={styles.participateText}>
                                    <Text style={styles.participateTextBold}>{joinedNumber} Người</Text>
                                    <Text style={styles.participateTextLight}> Đã tham gia</Text>
                                </View>
                            </View>

                            :
                            <View style={styles.joinBtn}>
                                <View style={styles.participateText}>
                                    <Text style={styles.participateTextBold}>{item.currentUsers} Người</Text>
                                    <Text style={styles.participateTextLight}> Đã ủng hộ</Text>
                                </View>
                            </View>

                        }

                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.icon_like}>
                        <View style={styles.flexIcon}>
                            <TouchableOpacity style={styles.like} onPress={() => {
                                likeActivities()
                            }}>
                                <Image source={heartState} style={styles.like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.like} onPress={() => { }}>
                                <Image source={require(comment)} style={styles.like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.like} onPress={() => { }}>
                                <Image source={require(send)} style={styles.like} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.icon}>
                        {postType === 'TN' ? <Button
                            title={joinedState}
                            buttonStyle={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                borderRadius: 8,
                                width: 120,
                                height: '100%',
                                backgroundColor: 'red',
                            }}
                            containerStyle={styles.containerButton}
                            titleStyle={styles.titleButton}
                            onPress={() => {
                                joinActivities();
                            }}
                        /> : <Button
                            title='Ủng hộ'
                            buttonStyle={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                borderRadius: 8,
                                width: 120,
                                height: '100%',
                                backgroundColor: 'red',
                            }}
                            containerStyle={styles.containerButton}
                            titleStyle={styles.titleButton}
                            onPress={() => {
                                donateActivities();
                            }}
                        />}

                    </View>
                </View>
            </View>
        );
    }

    const RenderItem = ({ item }) =>
        <PostItem
            item={item}
            authorAvt={item.avtOwner}
            authorName={item.nameOwner}
            timePost={item.timeago}
            mainimage={item.mainimage}
            headerPost={item.title}
            descPost={item.content}
            peopleLeft={item.totalUsers}
            joinedList={item.avtCurrentUsers}
            joinedNumber={item.currentUsers}
            postType={item.type}
        />

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={postdata}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
            onEndReached={
                onEndReached
            }
            onEndReachedThreshold={onEndReachedThreshold}

        />
    );
}

const Story = ({ data }) => {
    return (
        data.map((data) =>
            <View key={data.id}>
                <Image source={{ uri: data.img }} style={styles.stories_img} />
            </View>
        )
    );
}
const StoryHeader = ({ data }) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.stories}>
            <Image source={require(khanhimg)} style={styles.stories_img} />
            <View style={{ position: 'absolute' }}>
                <View style={styles.addbtnStoriesContainer}>
                    <Ionicons name='add' style={styles.addbtnStories} />
                </View>
            </View>
            <Story data={data}></Story>
        </ScrollView>);
}


const Home = () => {
    const navigation = useNavigation();
    const [modalVisible, setmodalVisible] = useState(false);
    const [PostData, setPostData] = React.useState([]);
    const [storiesData, setstories] = React.useState([
        {
            'id': '0badKq4rXmXy39J1CATp',
            'img': 'https://storage.googleapis.com/volunteer-app-c93c9.appspot.com/users/ledothanhdat1208@gmail.com/avatar.png',
        },

    ]);
    const [visible, setVisible] = useState(false);

    const closeMenu = () => setVisible(false);
    const openMenu = (v) => setVisible(true);
    const accessPage2 = () => navigation.navigate('Donate');
    const [SrollToStart, setSrollToStart] = useState(false);

    const [posPost, setPosPost] = useState(0);
    const getMorePost = async () => {
        await HomeService.getPostByLimit(5, posPost).then((res) => {
            console.log(res.data);
            if (res.status == 200) {
                setPostData(res.data);
                setPosPost(posPost + 5);
            }
        }).catch(error => {
            console.warn(error);
        })
    }
    const getStories = () => {
        // implement
    }
    
    React.useEffect(() => {
        getMorePost();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <StatusBar barStyle='dark-content' animated={true} backgroundColor='white' />
                <View style={styles.statusbar}>
                    <Text style={styles.nameApp}>#Viectute</Text>
                    <View style={styles.option}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: 20 }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Post') }}>
                                <FontAwesome name='plus-square-o' style={{ fontSize: 28, opacity: 0.7, }} />
                            </TouchableOpacity>

                            <Feather name='navigation' style={{ fontSize: 28, marginLeft: 10, opacity: 0.7, }} />
                        </View>
                    </View>
                </View>
                <StoryHeader data={storiesData}></StoryHeader>

            </SafeAreaView>

            <View style={styles.container}>
                <Post
                    onEndReached={() => { getMorePost() }}
                    onEndReachedThreshold={0.7}
                    postdata={PostData} />
            </View>
            <View style={styles.navigationBody}>
                <View style={styles.navBar}>
                    <View style={styles.flexFooter}>
                        <View style={styles.navigationElement}>
                            <TouchableOpacity style={styles.navigateBtn} onPress={() => { }}>
                                <Entypo name='home' style={{ fontSize: 28, opacity: 0.7, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navigationElement}>
                            <TouchableOpacity style={styles.navigateBtn} onPress={() => { }}>
                                <Ionicons name='search-outline' style={{ fontSize: 28, opacity: 0.7, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navigationMainElement}>
                            <TouchableOpacity style={styles.navigateBtn} onPress={() => { navigation.navigate('Activities') }}>
                                <Image source={require(logo)} style={styles.mainIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navigationElement}>
                            <TouchableOpacity style={styles.navigateBtn} onPress={() => { }}>
                                <AntDesign name='message1' style={{ fontSize: 25, opacity: 0.8, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navigationElement}>
                            <TouchableOpacity style={styles.navigateBtn} onPress={() => { navigation.navigate('Account') }}>
                                <Octicons name='three-bars' style={{ fontSize: 25, opacity: 0.8, }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View >

    );
}

export default Home;