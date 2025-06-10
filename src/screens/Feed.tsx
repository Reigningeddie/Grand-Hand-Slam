import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.activity}>All Activity</Text>
      <View style={styles.dividerView}>
        <View style={styles.sides}/>
        <View style={styles.divider}/>
        <View style={styles.sides}/>
      </View>
    </View>
  );
}

export default Feed;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  activity: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000000"
  },
  dividerView: {
    flexDirection: 'row',
    width: '100%'

  },
  divider: {
    borderColor: 'black',
    borderWidth: .8,
    alignSelf: 'stretch',
    width: '80%',
    marginTop: 10
  },
  sides: {
    width: '10%',
  }
});