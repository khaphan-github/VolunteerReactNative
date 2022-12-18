import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
//import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEDBEE',
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
        paddingVertical: 7
    },
    borderStories_img:{
        width: 84, 
        marginLeft: 5, 
        backgroundColor: '#D65D42', 
        borderRadius: 60, 
        height: 84, 
        justifyContent: 'center'}
    ,
    stories_img:{
        height: 78,
        width: 78,
        backgroundColor: "#c5c5c7",
        borderRadius: 50,
        marginLeft: 3.5,
        borderWidth: 3,
        borderColor: 'white'
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
        flex: 1,
        paddingBottom: 10
    }
    ,
    post:{
        flex: 1,
        height: 540,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 2,
        
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
        flex: 1,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    }
    ,
    participateText: {
        display: 'flex',
        flexDirection:'row'
    },
    participateTextBold:{
        // fontFamily: 'Roboto_900Black',
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 100
    },
    participateTextLight:{
        // fontFamily: Roboto_300Light,
        fontSize: 17,
    }
    ,
    participatePeople:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }
    ,
    participateAvt:{
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
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
        height: 25,
        width: 25,
        backgroundColor: "#c5c5c7",
        borderRadius: 25, 

    },
    dot:{
        height: 25,
        width: 25,
        backgroundColor: '#9CA8B4',
        justifyContent: 'center',
        borderRadius: 25,
        opacity: 0.4,
        position: 'absolute'
    }
    ,
    containerButton: {
        flex: 1,
        height: '100%',
        width: 20,
        flexDirection:'row',
        justifyContent: 'center',
        borderRadius: 5
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
        marginVertical: 5,
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
        marginLeft: 5
    }

});