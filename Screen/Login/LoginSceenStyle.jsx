import {StyleSheet} from 'react-native';
//import { FONT_FAMILY } from '../../Component/Constants/Font';
import { COLOR, SIZES } from '../../Component/Constants/Theme';

export const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        height: SIZES.height,
        flex:1,
        paddingHorizontal: 30,
        marginVertical: 20,
    },
    flForm :{
        flex: 10,
        justifyContent: 'flex-end',
    },
    flOption: {
        marginTop: 15,
        flex: 6,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    backButton: {
        flex: 0.7,
        flexDirection: 'row',
    },
    arrowReturn: {
        width: 20,
        height: 20,
    },
    title: {
        paddingVertical: 20,
    },
    textHeader: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    label : {
        marginVertical: 35,
        fontSize: SIZES.h5,
        color: COLOR.GrayText,
    },
    textDesc: {
        color: COLOR.GrayText,
        fontSize: 15,
        fontWeight: 'bold',
    },

    loginOption: {
        flex:1,
        flexDirection: 'row', 
        marginHorizontal: 45,
    },
    oauth: {
        width: 40,
        height: 40,
        marginHorizontal: 15,
    },
    footer : {
        alignItems: 'center',
    },

    footerText: {
        color: COLOR.GrayText,
        fontSize: 15,
        paddingVertical: 6,
    },
    regis: {
        color: COLOR.Red,
        fontWeight: 'bold',
    } 
});