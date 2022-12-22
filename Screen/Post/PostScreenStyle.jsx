import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
//import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    post:{
        width: '100%',
        marginTop: 50,
        marginHorizontal: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
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
        borderRadius: 25,
        margin: 10
    },

    profile_details: {
        height: 50,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    author:{
        // fontFamily: Roboto_900Black,
        fontWeight: '600',
        fontSize: 20
    },
    checkin:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7
    },
    checkinText:{
        fontWeight: '400',
        fontSize: 16
    }
    ,
    checkinIcon: {
        width: 20,
        height: 20,
        opacity: 0.7
    },
    content:{
        
    },
    content_detail:{
        height: 150,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor :'white',
        shadowColor : '#c5c5c5',
        shadowOpacity: 1,
        borderRadius: 5
    },
    headerInput:{
        paddingVertical: 10,
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    address:{
        height: 35,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor :'white',
        shadowColor : '#c5c5c5',
        shadowOpacity: 1,
        borderRadius: 5
    },
    people:{
        height: 35,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor :'white',
        shadowColor : '#c5c5c5',
        shadowOpacity: 1,
        width: 300,
        borderRadius: 5
    },
    addPicture:{
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    address_people:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});