import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=comment" />

const photoWidth = '25%'

const Feed = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.activity}>All Activity</Text>
      <View style={styles.dividerView}>
        <View style={styles.sides}/>
        <View style={styles.divider}/>
        <View style={styles.sides}/>
      </View>
      <View style={styles.card}>
        <View style={styles.vsView}>
          <View style={styles.player} />
          <View style={styles.gshText}>
            <Text style={styles.gsh}>Grand Hand</Text>
            <Text style={styles.gsh}>Slammed</Text>
            <Text style={styles.time}>@12:00pm</Text>
          </View>
          <View style={styles.oponent} />
        </View>
          <View style={styles.likesArea}>
          <Text style={styles.likes}>5</Text>
        </View>
        <View style={styles.commentArea}>
          <Image source={require('../assets/post/comment.png')} style={styles.commentLogo} />
          <Text style={styles.comment}>12</Text>
        </View>
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
    color: "black"
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
  },
  card: {
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 150,
    width: '97%',
  },
  vsView: {
    flexDirection: 'row',
  },
  player: {
    borderColor: 'black',
    borderWidth: .5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderTopLeftRadius: 5,
    height: 120,
    width: photoWidth
  },
//* this is just spacing betwen picture and text

  gshText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  gsh: {
    fontSize: 15,
  },
  oponent: {
    borderColor: 'black',
    borderWidth: .5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderTopRightRadius: 5,
    height: 120,
    width: photoWidth
  },
  time: {
    fontSize: 10,
  },
  likesArea: {},
  likes: {},
  commentArea: {
    padding: 5,
    flexDirection: 'row',
  },
  commentLogo: {
    marginRight: 5,
  },
  comment: {},
});