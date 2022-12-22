import React, { useState } from "react";
import {Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity, Keyboard} from "react-native";
import { COLOR, SIZES } from "../../Component/Constants/Theme";
import CustomButton from "../../Component/Element/CustomButton";
import CustomInputV1 from "../../Component/Element/CustomInputV1";
import img_content2 from '../../assets/icon/img_content2.jpg'
import CheckBox from "@react-native-community/checkbox";

const Success = ({ navigation }) => {
    return (
        <View style={{flex: 1,justifyContent: 'center', alignItems:'center', backgroundColor:'white'}}>
            <View>
                <Image source={require('../../assets/icon/donateSuccess.gif')} style={{width: 500,height: 500}}/>
            </View>
           <View>
                <Text style={{fontSize: 30, textAlign: 'center', color:'#072A6C'}}>Ủng hộ thành công!</Text>
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10, color: '#072A6C'}}>Cảm ơn vì sự tử tế của bạn ❤</Text>
           </View>
           <View style={{height: 100}}>
           </View>
           <View style={{width: '50%', paddingTop: 5}}>
                    <View style={styles.shadow}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                            <Image source={require('../../assets/icon/next.png')} style={{width:50, height:30}}/>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'white', 
        borderRadius: 8,
        height: 50  
    }
});

export default Success;