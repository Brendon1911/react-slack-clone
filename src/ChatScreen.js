import React from 'react';
import Chatkit from '@pusher/chatkit';

class ChatScreen extends React.Component {
  componentDidMount () {
    const chatManager = new Chatkit.chatManager({
      instanceLocator: 'v1:us1:fbbd66fa-a219-441e-99ea-b173bc7e653a',
      userId: this.props.currentUsername,
      tokenProvidor: new Chatkit.TokenProvidor({
        url: 'https://react-slack-clone-brendon1911.c9users.io/authenticate'
      })
    })
  }
  
  render () {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    )
  }
}

export default ChatScreen