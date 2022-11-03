import {StyleSheet} from 'react-native'
import { SIZES } from '../../Component/Constants/Theme';

export const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        height: SIZES.height,
        marginVertical: 20,
    }, 
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
    },
    goback: {
        flex: 0.2,
        marginLeft: 15,
    },
    headerName: {
        flex: 2,
        fontSize: SIZES.h5,
        fontWeight: 'bold'
    },
    gobackIcon: {
        width: 20,
        height: 20,
    },
    avatar: {
        flex: 1.5,
        alignItems: 'center'
    },
    avatarImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    form: {
        flex: 5,
        marginHorizontal: 10,
    },
    inputText: {
        height: 50,
    }
});