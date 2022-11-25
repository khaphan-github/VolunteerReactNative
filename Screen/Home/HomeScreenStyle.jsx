import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
//import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    statusbar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: 'white'
    },
    nameApp:{
       // fontFamily: 'Roboto_900Black',
        fontWeight: '600',
        fontSize: 30,
        color:'red', 
        paddingLeft: 10,
    },
    stories:{
        flex: 1,
        backgroundColor:'white',
        paddingTop: 20,
    },
    borderStories_img:{
        width: 85, 
        marginLeft: 5, 
        backgroundColor: '#D65D42', 
        borderRadius: 60, 
        height: 85, 
        justifyContent: 'center'}
    ,
    stories_img:{
        height: 80,
        width: 80,
        backgroundColor: "#c5c5c7",
        borderRadius: 50,
        marginLeft: 2.5,
        borderWidth: 3,
        borderColor: 'white'
    },
    stories_name:{
        textAlign : 'center',
        fontSize: 12, 
        margin: 8,
        width: 75
    },
    addbtnStoriesContainer:{
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: 55,
        width: 23,
        height: 23,
        borderRadius: 50, 
        borderWidth: 1.5,
        borderColor: '#ffffff',
        justifyContent: 'center'
    }
    ,
    addbtnStories:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12
    }
    ,
    content:{
        paddingBottom: 10
    }
    ,
    post:{
        flex: 1,
        height: 540,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 5,
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center' 
    }
    ,
    profile: {
        display: 'flex',
        flexDirection: 'row'
    }
    ,

    profile_img: {
        height: 50,
        width: 50,
        backgroundColor: "#c5c5c7",
        borderRadius: 25,
        margin: 10
    },

    profile_details: {
        height: 45,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    author:{
        // fontFamily: Roboto_900Black,
        fontWeight: '600',
        fontSize: 16
    },
    time: {
        fontSize: 14,
        paddingTop: 5,
        opacity: 0.6
    },
    img: {
        maxWidth: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    text: {
        width: '100%',
        height: 70,
        paddingLeft: 10,
        paddingTop: 10,
        
    },
    textHeader: {
        fontSize: 16,
       //  fontFamily: 'Roboto_900Black',
        fontWeight: 'bold'
    },
    textDesc:{
        // fontFamily: 'Roboto_300Light',
        paddingRight: 5,
        
    }
    ,
    progressBar:{
        marginTop: 10,
        height: 50,
        marginLeft: 10
    },
    progressbarText:{
        display: 'flex',
        flexDirection: 'row'
    }
    ,
    progressbarTextLight:{
        fontSize: 17,
        color: '#FF493C',
        paddingBottom: 10,
        // fontFamily: 'Roboto_300Light',
    },
    progressbarTextBold:{
        // fontFamily: 'Roboto_900Black',
        fontWeight: '500',
        fontSize: 17,
        color: '#FF493C',
        paddingBottom: 10,
        
    }
    ,
    participateContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        height: 40
    }
    ,
    participateText: {
        display: 'flex',
        flexDirection:'row'
    },
    participateTextBold:{
        // fontFamily: 'Roboto_900Black',
        marginLeft: 105,
        fontSize: 17,
        marginTop: 8,
        fontWeight: '500'
    },
    participateTextLight:{
        // fontFamily: Roboto_300Light,
        fontSize: 17,
        marginTop: 8
    }
    ,
    participatePeople:{
        display: 'flex',
        flexDirection: 'column',
    }
    ,
    participateAvt:{
        marginTop: 10,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row'
    },

    participateAvtChil1:{
        position: "absolute",
        flexDirection:"row"
    },
    participateAvtChil2:{
        position: "absolute",
        flexDirection:"row",
        marginLeft: 20
    }
    ,
    participateAvtChil3:{
        position: "absolute",
        flexDirection:"row",
        marginLeft: 20
    }
    ,
    participateAvtChildDot:{
        position: "absolute",
        flexDirection:"row",
        marginLeft: 20
    }
    ,
    avt:{
        height: 30,
        width: 30,
        backgroundColor: "#c5c5c7",
        borderRadius: 25
    },
    dot:{
        height: 30,
        width: 30,
        backgroundColor: '#9CA8B4',
        justifyContent: 'center',
        borderRadius: 25,
        opacity: 0.4,
        position: 'absolute'
    }
    ,
    containerButton: {
        height: 38,
        width: 100,
        marginRight: 10,
        borderRadius: 9,
        marginTop: 4,
    },
    titleButton:{
       // fontFamily: 'Roboto_900Black',
        fontWeight: '700',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
    ,
    footer: {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection:'row',
    }
    ,
    icon: {
        display: 'flex',
        marginRight: 5
    }
    ,
    icon_like: {
        display: 'flex',
        flexDirection:'row',
    }
    ,
    like: {
        width: 24,
        height: 24,
        margin: 5
    }

});