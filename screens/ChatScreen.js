import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ChatRooms } from './../dummy-data/DummyData';
import ChatRoom from './../components/ChatRoom'
import { useDispatch, useSelector } from 'react-redux';

import { toggleHappy } from './../store/actions/ChatActions';

const ChatScreen = props => {
   const isHappy = useSelector(state => state.chat.isHappy);
   const dispatch = useDispatch();

   const handleChristianHappy = () => {
      dispatch(toggleHappy(!isHappy));
   };

   return (
      <View style={styles.container}>
         <Text>Is Christian happy? {String(isHappy)}</Text>      
         <Button title="Flip Christian Happy" onPress={handleChristianHappy} />
          <FlatList
            data={ChatRooms}
            renderItem={itemData => (
                <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.chatRoomId}
        />
      </View>
 );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },
});

export default ChatScreen;