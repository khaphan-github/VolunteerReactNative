import {StyleSheet} from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';

export const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        height: SIZES.height,
        flex:1,
        marginVertical: 20,
    },
    header:{
        flex : 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    flexLogo: {
        flex: 0.23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        maxWidth: 66,
        maxHeight: 66,
    },
    flexOptions: {
        flex: 0.45,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flexIcon: {
        flex: 1,
    },
    Icon: {
        maxWidth: 30,
        maxHeight: 30,
        borderRadius: 15,
        backgroundColor: COLOR.LightGray,
    }
});