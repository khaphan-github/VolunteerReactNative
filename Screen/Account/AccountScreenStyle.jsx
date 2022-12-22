import { StyleSheet } from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';

export const styles = StyleSheet.create({
    containter: {
        flex: 1,
        width: SIZES.width,
        height: SIZES.height,
    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 10,
    },
    goback: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gobackIcon: {
        width: 20,
        height: 20,
    },
    account: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    name: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 15,
    },
    textName: {
        fontSize: SIZES.h4,
        fontWeight: 'bold'
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    buttonInformation: {
        flex: 0.09,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    relatedActivity: {
        flex: 1,
        backgroundColor: 'green',
    },
    heartPoint: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    heartIcon: {
        flex: 1,
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
    heartValue: {
        flex: 2,
        textAlign: 'center',
        fontSize: SIZES.h3,
        fontWeight: '500',
        marginRight: 10,
    },
    options: {
        flex: 0.8,
        marginHorizontal: 10,
    },
});