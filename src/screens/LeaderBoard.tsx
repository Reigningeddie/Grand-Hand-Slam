import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
//components
import TopThree from '../components/topThree';
import UnderThree from '../components/underThree';

const LeaderBoard = () => {
  return (
    <View style={styles.body}>
      <ScrollView>
        <TopThree />
        <UnderThree />
      </ScrollView>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
