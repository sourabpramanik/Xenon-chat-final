import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity,FlatList, View } from 'react-native';
import { useRoute} from "@react-navigation/native";
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import Input from '../components/Input';



const ChatRoomScreen =() => {

  const route= useRoute();
  //console.log(route.params)
  return (
    <><FlatList
      data={chatRoomData.messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
      inverted />
      <Input /></>
  );
}
export default ChatRoomScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
