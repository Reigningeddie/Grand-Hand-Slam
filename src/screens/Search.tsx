import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {useAuth} from '../database/authContext';



const Search = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Search'}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  input: {
    color: '#1B1B1B',
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    margin: 15,
    paddingLeft: 15,
  }
})