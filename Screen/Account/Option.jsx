
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Option = ({ headIcon, title, onPress, icoName }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.flex}>
                <View style={styles.flexIcon}>
                    {headIcon ? <Image style={styles.iconImage} source={headIcon} />
                        : <SimpleLineIcons name={icoName} size={20}></SimpleLineIcons>}
                </View>
                <View style={styles.flexText}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.flexArrow}>
                    <Image style={styles.arrow} source={require('../../assets/icon/arrow-to-right.jpg')} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 62,
        backgroundColor: 'white',
        borderRadius: 5,
        borderBottomColor: COLOR.LightBlack,
        borderBottomWidth: 1,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexIcon: {
        flex: 0.6,
        marginLeft: 20,
    },
    flexText: {
        flex: 5,
        marginHorizontal: 10,
    },
    iconImage: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: SIZES.h4,
        opacity: 0.8,
    },
    flexArrow: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20,
    },
    arrow: {
        width: 15,
        height: 15,
        opacity: 0.3
    }

});
export default Option;