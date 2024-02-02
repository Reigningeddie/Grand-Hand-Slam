import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from './screens/login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
