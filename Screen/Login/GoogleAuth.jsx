import react, { useState, useEffect } from 'react';
import { Image, Text, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import UserService from '../../Service/api/UserService';
import AsyncStoraged from '../../Service/client/AsyncStoraged';
WebBrowser.maybeCompleteAuthSession();

const iosClientId = '618156629757-bsnp8k1eae52nc4ijr04hl79jbjj0vrb.apps.googleusercontent.com';
const androidClientId = '618156629757-lvr6bvq32v73gi4k9erec4ut64ise448.apps.googleusercontent.com';
const webClientId = '618156629757-hvsv6ur3brk3tbpabmeld87go7ln8pkn.apps.googleusercontent.com';
const googleIcon = '../../assets/icon/Google__G__Logo.svg.jpg';

const GoogleAuth = ({ style, navigation }) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: webClientId,
        iosClientId: iosClientId,
        androidClientId: androidClientId,
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const token = response.authentication.accessToken;
            fetchUserInfo(token);
        }
    }, [response]);

    async function fetchUserInfo(accessToken) {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await response.json();
        console.log(data.picture);

        await UserService.sendGoogleUserData(data).then((response) => {
            console.log("LOGIN SUCCESS");
            console.log(response.data);
            AsyncStoraged.storeData(response.data.token);
            console.warn(response.data.token);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <Pressable onPress={() => { promptAsync() }}>
            <Image style={style} source={require(googleIcon)} />
        </Pressable>
    )
}
export default GoogleAuth;

