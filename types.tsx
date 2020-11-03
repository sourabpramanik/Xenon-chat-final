export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  Contact: undefined;
  
};

export type BottomTabParamList = {
  Chats: undefined;
  Contacts: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  ContactScreen: undefined;
};
export type ChatRoom ={
  id: String;
  users: User[];
  lastMessage: Message;
}

export type User={
  id: String;
  imageUri: String;
  name: String;

}
//export type ChatMessage={
  //id: String;
  //message: Message;
//}
export type Message={
  id: String;
  user: User;
  content: String;
  createdAt: String;
}
export type Contact={
  id: String;
  imageUri: String;
  name: String;
}