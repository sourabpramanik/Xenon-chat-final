import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ContactBox from '../components/Contacts';
import contacts from "../data/Contacts"
import { Text, View } from '../components/Themed';
export default function ContactScreen() {
  return (
    <FlatList
    data={contacts}
    renderItem={({item})=><ContactBox contact={item}/>}
    keyExtractor={(item)=>item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
