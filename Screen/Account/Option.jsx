
import { Image, View, Text, Pressable, StyleSheet } from 'react-native'
import { SIZES } from '../../Component/Constants/Theme';

const Option = ({ headIcon, title, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.flex}>
                <View style={styles.flexIcon}>
                    <Image style={styles.iconImage} source={headIcon} />
                </View>
                <View style={styles.flexText}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.flexArrow}>
                    <Image style={styles.arrow} source={require('../../assets/icon/arrow-to-right.jpg')} />
                </View>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 50,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 5,
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
        width: 25,
        height: 25,
    },
    text: {
        fontSize: SIZES.h5,
        opacity: 0.7,
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