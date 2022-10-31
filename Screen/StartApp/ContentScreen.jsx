import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';

const ContentScreen = ({ image, title, desc }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexImage}>
        <View style={styles.styleImage}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      <View style={styles.flexContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    flex: 1,
    flexDirection: 'column',
  },
  flexImage: {
    flex: 3.5,
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
    flex: 2.5,
    alignItems: 'center',
  },

  title: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLOR.DeepBlue,
  },
  desc: {
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: SIZES.h4,
    color: COLOR.DeepBlue,
  },
});

export default ContentScreen;