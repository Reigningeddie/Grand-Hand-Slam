import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
// import {TEST} from '@env';

//Get device Width
const screenWidth = Dimensions.get('window').width;

const thirds = screenWidth / 3;

export default function Profile(): React.JSX.Element {
  // const user = firestore()
  //   .collection('users')
  //   .doc(`${metaData?.uid}`)
  //   .get()
  //   .then(documentSnapshot => {
  //     console.log('User:', documentSnapshot.id);
  //   });
  // const points = user.collection('points').get();
  // console.log(points);
  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.banner} />
        <Text style={styles.txt}>
          Grand Hand Slam{' '}
          <Pressable>
            <Text>O</Text>
          </Pressable>
        </Text>
        <View style={styles.pic} />
        <Text style={styles.user}>Reigningeddie</Text>
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
          <Text style={styles.vids} />
          <Text style={styles.vids} />
          <Text style={styles.vids} />
          <Text style={styles.vids} />
          <Text style={styles.vids} />
          <Text style={styles.vids} />
          <Text style={styles.vids} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: screenWidth,
  },
  banner: {
    backgroundColor: '#284B63',
    width: '100%',
    height: 120,
  },
  txt: {
    color: '#D9D9D9',
    marginTop: -120,
    fontSize: 48,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  vids: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: '#284B63',
    width: thirds,
    height: 200,
  },
  size: {
    height: 10,
    backgroundColor: 'black',
  },
});
