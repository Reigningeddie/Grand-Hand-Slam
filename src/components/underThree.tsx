import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

//Get device Width
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const divHeight = screenHeight / 10;
const div = screenWidth - 25;
const info = screenWidth / 2;

export default function underThree() {
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Friends</Text>
      <View style={styles.div}>
        <View style={styles.pic} />
        <View style={styles.info}>
          <Text style={styles.name}>name</Text>
          <Text style={styles.points}>190pts</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.place}>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  div: {
    borderWidth: 2,
    width: div,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: divHeight,
    borderRadius: 20,
  },
  pic: {
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 15,
  },
  info: {
    marginLeft: -info,
  },
  name: {
    color: 'black',
  },
  points: {
    color: 'black',
  },
  border: {
    marginRight: 15,
  },
  place: {
    color: 'black',
  },
});
