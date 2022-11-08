import react, { useState, Component } from 'react';
import { View, Image, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import ContentScreen from './ContentScreen';

const slides = [
    {
        id: 1,
        title: 'Transition Presets',
        description: 'Mộ  được cung cấp bởi react-navigation',
        options:  'Sinh viên tại trường đại học'
         
        
    },
    {
        id: 2,
        title: 'Pre-made Configs',
        description: 'Xây dựng các hiệu ứng dịch chuyển giữa các màn hình, một số option có sẵn được cung cấp bởi react-navigation',
        options: 'Sinh viên tại trường đại học'
    },
    {
        id: 3,
        title: 'Transition Spec',
        description: 'Đây animation mà chúng ta sẽ sử dụng. Nó dùng để config cho việc đóng và mở của navigation bằng 2 property',
        options:      'Sinh viên tại trường đại học'     
    }
];
const IntroSlider = ({ navigation }) => {
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
                        options={item.options}
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