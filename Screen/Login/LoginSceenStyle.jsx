import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 30,
        marginVertical: 20,
    },
    flForm :{
        flex: 12,
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
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold'
    },
    label : {
        marginVertical: 35,
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
        color: TEXT_COLOR,
        fontSize: 15,
        paddingVertical: 6,
    },
    regis: {
        color: BUTTON_COLOR,
        fontWeight: 'bold',
    } 
});