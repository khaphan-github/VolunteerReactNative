import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginVertical: 0,
    },
    form:{
        paddingBottom: 30,
    },

    textHeader: {
        marginTop: 140,
        fontSize: 40,
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold'
    },
    label : {
        marginVertical: 35,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    textDesc: {
        color: TEXT_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
    },

    loginOption: {
        flex:1,
        flexWrap: 'wrap',  
        marginHorizontal: 45,
    },
    oauth: {
        width: 40,
        height: 40,
        marginHorizontal: 15,
    },
    footer : {
        marginTop: 130,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    footerText: {
        color: TEXT_COLOR,
        fontSize: 15,
        paddingVertical: 6,

    },
    regis: {
        color: BUTTON_COLOR,
        fontWeight: 'bold',
    }
});