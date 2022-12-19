import { StyleSheet } from 'react-native';
import { BUTTON_COLOR, TEXT_COLOR } from '../../Component/Constants/Color';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
//import { FONT_FAMILY } from '../../Component/Constants/Font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEDBEE',
    },
    statusbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 7,
        backgroundColor: 'white',
    },
    nameApp: {
        // fontFamily: 'Roboto_900Black',
        fontWeight: '600',
        fontSize: 30,
        color: 'red',
        paddingLeft: 10,
    },
    option: {
        justifyContent: 'center',
    },
    stories: {
        marginVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    borderStories_img: {
        width: 60,
        marginLeft: 5,
        backgroundColor: '#D65D42',
        borderRadius: 60,
        height: 60,
        justifyContent: 'center'
    }
    ,
    stories_img: {
        height: 65,
        width: 65,
        backgroundColor: "#c5c5c7",
        borderRadius: 50,
        marginLeft: 3.5,
        borderWidth: 3,
        borderColor: 'white',
        marginHorizontal: 5,

    },
    addbtnStoriesContainer: {
        backgroundColor: '#4c68d7',
        width: 23,
        height: 23,
        marginLeft: 45,
        marginTop: 42.5,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#ffffff',
        justifyContent: 'center',
    }
    ,
    addbtnStories: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12
    }
    ,
    content: {
        flex: 1,
        paddingBottom: 10
    },
    post: {
        flex: 1,
        marginHorizontal: 0,
        backgroundColor: 'white',
        marginVertical: 4,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    profile: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    }
    ,

    profile_img: {
        height: 50,
        width: 50,
        backgroundColor: "#c5c5c7",
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    profile_details: {
        display: 'flex',
        justifyContent: 'center'
    },
    flextHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    more: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 0.5,
        marginHorizontal: 10,
    },
    author: {
        fontWeight: '600',
        fontSize: 16
    },
    time: {
        fontSize: 12,
        marginVertical: 3,
        opacity: 0.6
    },
    img: {
        maxWidth: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    text: {
        paddingLeft: 10,
        paddingTop: 10,
    },
    textHeader: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: 'bold'
    },
    textDesc: {
        paddingRight: 5,
    }
    ,
    progressBar: {
        marginTop: 10,
        height: 50,
        marginHorizontal: 10,
        marginRight: 10,
    },
    progressbarText: {
        display: 'flex',
        flexDirection: 'row',
    }
    ,
    progressbarTextLight: {
        fontSize: 16,
        color: '#FF493C',
        paddingBottom: 10,
    },
    progressbarTextBold: {
        fontWeight: '500',
        fontSize: 16,
        color: '#FF493C',
        paddingBottom: 10,

    }
    ,
    participateContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    colPaticipaceFlex: {
        flex: 1,
        justifyContent: 'space-between',
    },
    participateText: {
        flex: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    participateTextBold: {
        // fontFamily: 'Roboto_900Black',
        fontSize: 15,
        fontWeight: '500',
    },
    participateTextLight: {
        // fontFamily: Roboto_300Light,
        fontSize: 15,
    }
    ,
    participatePeople: {
        flex: 1.7,
        justifyContent: 'center',

    },
    avt: {
        backgroundColor: 'red',
    },
    participateAvt: {
    },
    joinedText: {
    },
    participateAvtChil1: {
        position: "absolute",
    },
    participateAvtChil2: {
        position: "absolute",
        marginLeft: 18
    }
    ,
    participateAvtChil3: {
        position: "absolute",
        marginLeft: 20
    }
    ,
    participateAvtChildDot: {
        position: "absolute",
        flexDirection: "row",
        marginLeft: 20
    }
    ,
    avt: {
        height: 25,
        width: 25,
        backgroundColor: "#c5c5c7",
        borderRadius: 25,

    },
    dot: {
        height: 25,
        width: 25,
        backgroundColor: '#9CA8B4',
        justifyContent: 'center',
        borderRadius: 25,
        opacity: 0.4,
        position: 'absolute'
    }
    ,
    joinBtn: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    containerButton: {
        borderRadius: 3,
    },

    titleButton: {
        // fontFamily: 'Roboto_900Black',
        fontWeight: '700',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }
    ,
    footer: {
        flex: 1,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingBottom: 10,
    }
    ,
    icon: {
        display: 'flex',
    },
    flexIcon: {
        flexDirection: 'row',
    },
    icon_like: {
        justifyContent: 'center',
    }
    ,
    like: {
        width: 24,
        height: 24,
        marginRight: 18,
        marginLeft: 2,        
    },
    save: {
        width: 24,
        height: 24,
    },

    navigation: {
        height: 60,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    flexFooter: {
        flex: 1,
        flexDirection: 'row',
    },
    navigateBtn: {
        padding: 10,
        borderRadius: 60,
    },
    navigationElement: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconbtn: {
        width: 32,
        height: 32,
        opacity: 0.7,
    },
    mainIcon: {
        width: 32,
        height: 32, 
    }
});