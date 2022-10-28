import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';

const image = '../../assets/icon/volunteer.jpg';

const ContentScreen = ({title, desc, img , buttonLeftPress, buttonRightPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexImage}>
        <View style={styles.styleImage}>
          <Image source={require(image)} style={styles.image} />
        </View>
      </View>
      <View style={styles.flexContent}>
        <Text style={styles.title}>Chào bạn</Text>
        <Text style={styles.desc}>Cập nhật tin tức, sự kiện nóng nhất xung quanh sự kiện nóng nhất xung quanh vấn đề tieng v vấn đề tieng viet được bạn đọc quan tâm nhất trên Tuổi Trẻ Online.</Text>
      </View>
      <View style={styles.navigator}>
        <View style={styles.navigatorBtn}>
          <Pressable onPress={buttonLeftPress}>
            <Text style={styles.btnText}>Trước</Text>
          </Pressable>
          <Pressable onPress={buttonRightPress}>
            <Text style={styles.btnText}>0 0 0 0 0</Text>
          </Pressable>
          <Pressable onPress={buttonRightPress}>
            <Text style={styles.btnText}>Tiếp</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  flexImage: {
    flex: 2.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 25,
    alignItems: 'center',
  },
  styleImage: {
    marginVertical: 30,
    marginHorizontal: 10,
    justifyContent: 'center',

  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  flexContent: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  desc: {
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  navigator: {
    flex: 0.6,
    marginVertical: 20,
  },
  navigatorBtn: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
  }
});

export default ContentScreen;