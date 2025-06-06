import {View, TextInput, StyleSheet, Text, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import {supabase} from '../database/supabase';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const timer = setTimeout(() => {
        setLoading(true);
        searchDb(query);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResult([]);
    }
  }, [query]);

  const searchDb = async (query:string) => {
    if (!query.trim()) {
      setResult([]);
      return;
    }

    try {
      const {data, error} = await supabase
        .from('profile')
        .select('*')
        .ilike('userName', `%${query}%`);

      if (error) throw error;

      setResult(data);
    } catch (error:any) {
      console.error('Search error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(result)

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Search by name'}
        value={query}
        onChangeText={setQuery} />

        {loading ? (
        <Text>Loading...</Text>
      ) : result.length > 0 ? (
        <FlatList
          data={result}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <View>
              {/* <Text>{`${item.firstName} ${item.lastName}`}</Text> */}
              <Text style={{ color: 'gray' }}>{item.userName}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No results found</Text>
      )}
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