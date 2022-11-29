import React from 'react';
import { StyleSheet, Pressable, View, Text, FlatList } from 'react-native';
import { COLOR, SIZES } from '../../Component/Constants/Theme';

const ContentScreen = ({ title, desc, options }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerDesc}>{desc}</Text>
        <Pressable style={styles.option}>
          <Text style={styles.optionText}>{options}</Text>
        </Pressable>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,

  },
  headerText: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    marginVertical: 10,
  },
  headerDesc: {
    fontSize: SIZES.h4,
  },
  options: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
    marginHorizontal: 10,

  },
  option: {
    alignSelf: 'flex-start',

    marginVertical: 5,
    marginRight: 10,
    paddingVertical: 10,

    backgroundColor: COLOR.Sliver,

    borderRadius: 35,
  },
  optionText: {
    paddingHorizontal: 20,
  }

});

export default ContentScreen;