import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
//components
import TopThree from '../components/TopThree';
import UnderThree from '../components/UnderThree';

const LeaderBoard = (): React.JSX.Element => {
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
