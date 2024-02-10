import {View, StyleSheet} from 'react-native';
import React from 'react';
import TopThree from '../components/topThree';
import UnderThree from '../components/underThree';

const LeaderBoard = () => {
  return (
    <View style={styles.body}>
      <TopThree />
      <UnderThree />
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
