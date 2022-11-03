import react, { useState, Component } from 'react';
import { View, Image, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import LoginScreen from '../Login/LoginScreen';
import ContentScreen from './ContentScreen';

const slides = [
    {
        id: 1,
        title: 'Transition Presets',
        description: 'Một số hiệu ứng để biểu diễn quá trình chuyển tiếp của các screen được cung cấp bởi react-navigation',
        image: {
            uri: 'https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66111.jpg?w=2000'
        }
    },
    {
        id: 2,
        title: 'Pre-made Configs',
        description: 'Với các option được cung cấp sẵn, nó khả thi cho việc để xây dựng các hiệu ứng dịch chuyển giữa các màn hình, một số option có sẵn được cung cấp bởi react-navigation',
        image: {
            uri: 'https://img.freepik.com/premium-vector/love-charity-giving-donation-via-volunteer-team-worked-together-help-collect-donations-poster-banner-flat-design-illustration_2175-2469.jpg?w=2000',
        }
    },
    {
        id: 3,
        title: 'Transition Spec',
        description: 'Đây là config giúp chúng ta định nghĩa rõ ràng về animation mà chúng ta sẽ sử dụng. Nó dùng để config cho việc đóng và mở của navigation bằng 2 property',
        image: {
            uri: 'https://img.freepik.com/free-vector/drawn-clothing-donation-concept_23-2148832529.jpg?w=360'
        }
    }
];
const IntroSlider = ({navigation}) => {
    const buttonLabel = (label) => {
        return (
            <View style={{ padding: 12 }}>
                <Text style={{
                    color: COLOR.DeepBlue,
                    fontWeight: 'bold',
                    fontSize: SIZES.h3,
                }}>{label}</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={({ item }) => {
                return (
                    <ContentScreen
                        title={item.title}
                        image={item.image}
                        desc={item.description}
                    />
                );
            }}
            activeDotStyle={{
                backgroundColor: COLOR.RedPink,
                width: 25,
            }}
            showSkipButton
            renderSkipButton={() => buttonLabel('Bỏ Qua')}
            renderDoneButton={() => buttonLabel('Bắt Đầu')}
            renderNextButton={() => buttonLabel('Tiếp')}
            onDone={() => {
                navigation.navigate('Login');
            }}
        />
    )
};
export default IntroSlider;