import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
//import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    post:{
        flex: 1,
        height: 540,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 2,
        paddingTop: 100
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
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
        height: 50,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    author:{
        // fontFamily: Roboto_900Black,
        fontWeight: '600',
        fontSize: 22
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
        marginVertical: 40
    },
    content_detail:{
        height: 150,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#7C7C7C',
        borderWidth: 2
    },
    headerInput:{
        paddingVertical: 10,
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    people:{
        height: 35,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#7C7C7C',
        borderWidth: 2, 
        width: 100
    },
    address:{
        height: 35,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#7C7C7C',
        borderWidth: 2
    },
    addPicture:{
        width: 100,
        height: 100,
        borderRadius: 5
    },
    address_people:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});