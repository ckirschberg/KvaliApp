import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const ChatMessage = props => {
    //props.chatmessage
    //show image if not "me".
    //show purple container if "me"
    //show time if time is not the same as previous time and same user
    //show date if this message contains a new date compared to previous.
    
    const hardcodedUserId = useSelector(state => state.user.loggedInUser).id;

    const hours = props.chatmessage.messageTimestamp.getHours();
    const minutes = props.chatmessage.messageTimestamp.getMinutes();
    
    // console.log("------------------");
    // console.log(props.chatmessage);
    const userIdOfMessage = props.chatmessage.user.id;
    const isMe = hardcodedUserId === userIdOfMessage;

    let name;
    if (!isMe){
        name = 'From ' + props.chatmessage.user.firstname + ' ' + props.chatmessage.user.lastname;
    }
    // console.log("----------------: " + props.img);
    // only display the image if this message is not written by me.
    let image;
    if (!isMe) {
        image = <Image
            style={styles.tinyLogo}
            source={ props.image } />
    }    

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.container, isMe ? styles.reverseContainer : '']}>
                {image}
                <View style={[styles.messageView, isMe ? styles.messageViewFromMe : '']}>
                    <Text style={[styles.message, isMe ? styles.messageFromMe : '']}>
                        {props.chatmessage.messageText}</Text>
                </View>
            </View>
            <View style={[styles.timeContainer, isMe ? styles.reverseContainer : '']}>
                <Text style={styles.time}>{name}  {hours}:{minutes}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
 },
 timeContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 3,
},
 reverseContainer: {
     flexDirection: 'row-reverse',
 },
 message: {
    color: '#333333'
 },
 messageFromMe: {
    color: 'white',
    
 },
 messageView: {
     backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 15,
    padding: 10,
 },
 messageViewFromMe: {
     backgroundColor: '#5050A5',
     right: 0,
     marginRight: 5
 },
 tinyLogo: {
     marginTop: -5
 },
 time: {
    color: '#333333',
    marginLeft: 60,
    fontSize: 11,
},
});

export default ChatMessage;