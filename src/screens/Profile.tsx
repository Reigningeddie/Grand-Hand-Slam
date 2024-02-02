import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.body}>
      <View style={styles.banner} />
      <Text style={styles.txt}>Grand Hand Slam</Text>
      <View style={styles.pic} />
      <Text style={styles.user}>ReigningEddie</Text>
      <View style={styles.flex}>
        <View style={styles.grid}>
          <Text style={styles.num}>150</Text>
          <Text style={styles.item}>points</Text>
        </View>
        <View style={styles.grid}>
          <Text style={styles.num}>361</Text>
          <Text style={styles.item}>followers</Text>
        </View>
        <View style={styles.grid}>
          <Text style={styles.num}>253</Text>
          <Text style={styles.item}>following</Text>
        </View>
      </View>
      <Text style={styles.dez}>Description (add max characters)</Text>
      <View style={styles.portrait}>
        <Text style={styles.vids}>Hello</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#284B63',
    width: '100%',
    height: 120,
  },
  txt: {
    color: '#D9D9D9',
    marginTop: -120,
    fontSize: 50,
    fontWeight: 'bold',
  },
  pic: {
    backgroundColor: '#3C6E71',
    height: 150,
    width: 150,
    borderRadius: 80,
    borderColor: '#353535',
    borderWidth: 5,
  },
  user: {
    color: '#3C6E71',
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
  flex: {
    flexDirection: 'row',
  },
  grid: {
    alignItems: 'center',
    padding: 10,
  },
  num: {
    color: '#353535',
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    color: '#353535',
    fontSize: 22,
  },
  dez: {
    color: '#353535',
    fontSize: 20,
    marginBottom: 25,
  },
  portrait: {
    backgroundColor: '#284B63',
    width: '100%',
    height: '100%',
  },
  vids: {
    color: '#284B63',
  },
});
