import {StyleSheet} from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginVertical: 0,
    },
    form:{
        paddingBottom: 30,
    },

    textHeader: {
        marginTop: 120,
        fontSize: 40,
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
    type: {
        color: 'red'
    }
    ,
    footer : {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    footerText: {
        color: TEXT_COLOR,
        fontSize: 15,
        paddingVertical: 6,

    },
    login: {
        color: BUTTON_COLOR,
        fontWeight: 'bold',
    }
    ,
    mainWrapper: {
        backgroundColor: '#rgb(29,182,28)',
        borderRadius: 12,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginVertical:5
      }
    
});