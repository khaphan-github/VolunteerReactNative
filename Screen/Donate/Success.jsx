import React, { useState } from "react";
import {Modal, StyleSheet, Text, Pressable, View, Image, TouchableWithoutFeedback, Keyboard} from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import img_content2 from '../../assets/icon/img_content2.jpg'
import CheckBox from "@react-native-community/checkbox";

const Success = ({ navigation }) => {
    return (
        <View style={{flex: 1,justifyContent: 'center', alignItems:'center'}}>
            <View style={{backgroundColor:'yellow'}}>
                <Image source={require('../../assets/icon/donateSuccess.gif')} style={{width: 500,height: 500}}/>
            </View>
           <View>
                <Text style={{fontSize: 30, textAlign: 'center', color:'#072A6C'}}>Ủng hộ thành công!</Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10, color: '#072A6C'}}>Cảm ơn vì sự tử tế của bạn ❤</Text>
           </View>
           <View style={{height: 100}}>
           </View>
           <View style={{width: '70%', height: 40,marginBottom: 10, fontSize: 30}}>
                <CustomButton title={'Home'} onPress={() => {navigation.navigate('Home')}}/>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Success;