import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


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
          <View style={styles.captionArea}>
            <Text style={styles.caption}>"Add Caption Here."</Text>
          </View>
          <View style={styles.likesArea}>
          <Image source={require('../assets/post/likeActive.png')} />
          <Text style={styles.likes}>5</Text>
        </View>
        <View style={styles.commentArea}>
          <Image source={require('../assets/post/comment.png')} />
          <Text style={styles.comment}>12</Text>
        </View>
      </View>
    </View>
  );
}

export default Feed;

const styles = StyleSheet.create({

  body: {
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
    marginTop: 10,
  },
  sides: {
    width: '10%',
  },
  card: {
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 'auto',
    width: '97%',
    boxShadow: {
      offsetX: 5,
      offsetY: 5, 
      blurRAdius: 10,
      spreadDistance: 2,
      color: 'rgba(0,0,0,0.5)',
    },
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
  captionArea: {
    alignItems: 'center',
  },
  caption: {
    color: 'green',
  },
  likesArea: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  likes: {
    marginLeft: 2
  },
  commentArea: {
    margin: 5,
    flexDirection: 'row',
  },
  commentLogo: {},
  comment: {
    marginLeft: 2,
  },
});