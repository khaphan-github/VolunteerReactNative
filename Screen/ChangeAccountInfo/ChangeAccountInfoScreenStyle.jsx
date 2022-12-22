import { StyleSheet } from 'react-native'
import { COLOR, SIZES } from '../../Component/Constants/Theme';

export const styles = StyleSheet.create({
    container: {
        height: SIZES.height,
        marginVertical: 15,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    goback: {
        flex: 0.2,
        marginLeft: 15,
    },
    intputView: {
        paddingBottom: 10,
    },
    intputName: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    firstName: {
        flex: 1,
        marginRight: 8,
    },
    lastName: {
        flex: 0.5,
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
    userImage: {
        height: 220,
        marginBottom: 20,
    },
    avatar: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    flexAvatar: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 10,
        justifyContent: 'flex-end',
    },
    borderAvatar: {
        width: 135,
        height: 135,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: COLOR.LightGray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    avatarImage: {
        marginTop: 3,
        width: 130,
        height: 130,
        borderRadius: 80,
    },

    cameraIcon: {
        width: 35,
        height: 35,

        borderRadius: 75,
        elevation: 5,

    },
    changeImage: {
        width: 35,
        height: 35,
        borderRadius: 75,
        backgroundColor: 'white',
    },

    NoavatarImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 10,
    },
    borderCover: {
        flex: 5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    btnPickCover: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 60,
    },
    editCoverIcon: {
        width: 16,
        height: 16,
    },

    _btnPickCover: {
        backgroundColor: COLOR.LightGray,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 120,
    },
    coverImage: {
        position: 'absolute',
        width: SIZES.width,
        height: 180,
    },
    form: {
        marginHorizontal: 15,
    },
    radioSex: {
        marginRight: 60,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginVertical: 5,
    },
    mainWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 70,
    }
});