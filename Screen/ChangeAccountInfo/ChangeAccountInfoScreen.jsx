import React, { useState, useEffect } from 'react';
import { ScrollView, View, Pressable, Image, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLOR, SIZES } from '../../Component/Constants/Theme';
import CustomButton from '../../Component/Element/CustomButton';
import { styles } from './ChangeAccountInfoScreenStyle';
import CustomInputV1 from '../../Component/Element/CustomInputV1';
import { RadioButton } from 'react-native-paper';
import CustomInputDateTime from '../../Component/Element/CustomInputDateTime';
import { getFormatedDate } from 'react-native-modern-datepicker';

import Auth from '../Login/Auth';
import UserService from '../../Service/api/UserService';
import AsyncStoraged from '../../Service/client/AsyncStoraged';



const ChangeAccountInfoScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');

    const [dateOfBirth, setDateOfBirth] = useState();
    const [phone, setPhone] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [sex, setSex] = useState('male');

    const checkLastName = (_lastname) => {
        _lastname.length === 0 ? setLastNameErrorMessage('Tên trống *') : setLastNameErrorMessage('');
    }
    const checkPhone = (_phone) => {
        !Auth.isValidPhone(_phone) ? setPhoneErrorMessage('Số điện thoại sai định dạng [0-9]') : setPhoneErrorMessage('');
    }
    const checkEmail = (_email) => {
        !Auth.isValidEmail(_email) ? setEmailErrorMessage('Email sai định dạng __@gmail.com') : setEmailErrorMessage('');
    }

    const CoverImageOption = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 2],
        quality: 1,
    }
    const AvatarOption = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2, 2],
        quality: 1,
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            AvatarOption,
        });
        console.log(result);
        if (result.uri) {

            setAvatar(result.uri);
            await UserService.uploadProfileImage(result.uri, 'avatar')
                .then((res) => {
                    if (res.data.status === '201 CREATED') {
                        console.log('Cập nhật ảnh bìa thành công!')
                    }
                    console.warn(res);
                }).catch(error => {
                    console.error(error);
                })
        }
    };

    const pickCover = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            CoverImageOption,
        });
        console.log(result);
        if (result.uri) {
            setCoverImage(result.uri);
            await UserService.uploadProfileImage(result.uri, 'cover')
                .then((res) => {
                     
                    console.warn(res);
                }).catch(error => {
                    console.error(error);
                });
        }

    }

    const onUpdateUser = async () => {
        const user = {
            "firstname": firstName,
            "lastname": lastName,
            "gender": sex,
            "birth": dateOfBirth,
            "phonenumber": phone,
            "email": email,
            "address": address,
        }
        await UserService.updateUser(user).then((res) => {
            console.log(res.data);
  
        }).catch(error => {
            console.error(error);
        });
    }
   
    // Gọi call back sau khi component add element to dom - 
    const getUserStored = async () => {
        const userStored = await AsyncStoraged.getData();
        console.warn(userStored);
        const _user = userStored.responseUser;
        setAvatar(_user.avatar);
        setCoverImage(_user.cover);
        setFirstName(_user.firstname);
        setLastName(_user.lastname);
        setSex(_user.gender);
        setDateOfBirth(_user.birth);
        setPhone(_user.phonenumber);
        setEmail(_user.email);
        setAddress(_user.address);
    }

    useEffect(() => { getUserStored(); }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <React.Fragment>
                <View style={styles.header}>
                    <Pressable
                        style={styles.goback}
                        onPress={() => { navigation.navigate('Account') }}>
                        <Image
                            style={styles.gobackIcon}
                            source={require('../../assets/icon/arrow-to-left.jpg')}
                        />
                    </Pressable>
                    <Text style={styles.headerName}>
                        Thay đổi thông tin tài khoản
                    </Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.userImage}>
                        <View style={styles.borderCover}>
                            <Image
                                style={styles.coverImage}
                                source={coverImage ? { uri: coverImage } :
                                    require('../../assets/icon/AccountScreenICon/anh-bia-cover-anh-bia-facebook-cover-2.jpg')} />
                            <View style={styles.btnPickCover}>
                                <TouchableOpacity
                                    onPress={() => { pickCover() }}
                                    style={styles._btnPickCover}>
                                    <Image style={styles.editCoverIcon}
                                        source={require('../../assets/icon/AccountScreenICon/edit.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.flexAvatar}>
                            <View style={styles.borderAvatar}>
                                {avatar ?
                                    <View>
                                        <View style={styles.avatar}>
                                            <Image
                                                style={styles.avatarImage}
                                                source={{ uri: avatar }} />
                                        </View>
                                        <TouchableOpacity
                                            style={styles.cameraIcon}
                                            onPress={() => { pickImage() }}>
                                            <Image
                                                style={styles.changeImage}
                                                source={require('../../assets/icon/AccountScreenICon/icons8-cameras-100.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <TouchableOpacity onPress={() => { pickImage() }}>
                                        <Image
                                            style={styles.NoavatarImage}
                                            source={require('../../assets/icon/AccountScreenICon/icons8-cameras-100.png')} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.intputName}>
                            <View style={styles.firstName}>
                                <Text style={{ fontSize: SIZES.h4 }}>
                                    Họ và tên đệm
                                </Text>
                                <CustomInputV1
                                    style={styles.inputText}
                                    maxLength={30}
                                    value={firstName}
                                    onChangeText={text => setFirstName(text)}
                                />
                            </View>
                            <View style={styles.lastName}>
                                <Text style={{ fontSize: SIZES.h4 }}>
                                    Tên
                                    <Text style={{ color: COLOR.RedPink }}>*</Text>
                                </Text>
                                <CustomInputV1
                                    style={styles.inputText}
                                    maxLength={10}
                                    value={lastName}
                                    onChangeText={(text) => { setLastName(text); checkLastName(text) }}
                                    errorMessage={lastNameErrorMessage}
                                />
                            </View>
                        </View>

                        <View style={styles.intputView}>
                            <Text style={{ fontSize: SIZES.h4 }}>Giới tính</Text>
                            <RadioButton.Group
                                onValueChange={(sex) => setSex(sex)}
                                value={sex}>
                                <View style={styles.radioSex}>
                                    <View style={styles.mainWrapper}>
                                        <RadioButton value="male" color={COLOR.RedPink} />
                                        <Text>Nam</Text>
                                    </View>
                                    <View style={styles.mainWrapper}>
                                        <RadioButton value="female" color={COLOR.RedPink} />
                                        <Text>Nữ</Text>
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View>

                        <View style={styles.intputView}>
                            <Text style={{ fontSize: SIZES.h4 }}>
                                Ngày sinh
                                <Text style={{ color: COLOR.RedPink }}>*</Text>
                            </Text>
                            <CustomInputDateTime
                                style={styles.inputText}
                                _value={dateOfBirth}
                                onChangeText={(text) => { setDateOfBirth(text) }}
                            />
                        </View>
                        <View style={styles.intputView}>
                            <Text style={{ fontSize: SIZES.h4 }}>
                                Email
                                <Text style={{ color: COLOR.RedPink }}>*</Text>
                            </Text>
                            <CustomInputV1
                                style={styles.inputText}
                                maxLength={256}
                                value={email}
                                onChangeText={(text) => { setEmail(text); checkEmail(text) }}
                                errorMessage={emailErrorMessage}
                            />
                        </View>
                        <View style={styles.intputView}>
                            <Text style={{ fontSize: SIZES.h4 }}>
                                Số điện thoại
                                <Text style={{ color: COLOR.RedPink }}>*</Text>
                            </Text>
                            <CustomInputV1
                                style={styles.inputText}
                                maxLength={10}
                                value={phone}
                                onChangeText={(text) => { setPhone(text); checkPhone(text) }}
                                errorMessage={phoneErrorMessage}
                            />
                        </View>

                        <View style={styles.intputView}>
                            <Text style={{ fontSize: SIZES.h4 }}>Địa chỉ</Text>
                            <CustomInputV1
                                style={styles.inputText}
                                maxLength={256}
                                value={address}
                                onChangeText={(text) => { setAddress(text) }}
                            />
                        </View>
                        <View style={styles.intputView}>
                            <CustomButton
                                title={'Cập nhật'}
                                onPress={() => { onUpdateUser() }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </React.Fragment>
        </TouchableWithoutFeedback>
    );
}
export default ChangeAccountInfoScreen;