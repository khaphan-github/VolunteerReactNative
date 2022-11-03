import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from './HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.flexLogo}>
                    <Image style={styles.logo} source={require('../../assets/icon/logo.jpg')} />
                </View>
                <View style={styles.flexOptions}>
                    <View style={styles.flexIcon}>
                        <Image style={styles.Icon} source={require('../../assets/icon/search.png')} />
                    </View>
                    <View style={styles.flexIcon}>
                        <Image style={styles.Icon} source={require('../../assets/icon/notification.png')} />
                    </View>

                    <Pressable style={styles.flexIcon} onPress={() => { navigation.navigate('Account') }}>
                        <Image style={styles.Icon} source={require('../../assets/icon/lisa.jpg')} />
                    </Pressable>
                </View>
            </View>
            <View></View>
            <View></View>
        </SafeAreaView>
    );
}

export default HomeScreen;