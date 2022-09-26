
import React from 'react';
import { Dimensions, StyleSheet, FlatList, View, Text} from "react-native";

const data = [
    {id: 'a', value: 'A'},
    {id: 'b', value: 'B'},
    {id: 'c', value: 'C'},
    {id: 'd', value: 'D'},
    {id: 'e', value: 'E'},
    {id: 'f', value: 'F'},
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
    itemContainer: {
      width: 100,
      height: 100,
    //   alignItems:'flex-start'
    },
    item: {
      flex: 1,
      margin: 4,
      backgroundColor: 'lightblue',
    }
  });
  
  const Items = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns} />
    );
  }
  export default Items;