import React from 'react';
// 1.
import { GiftedChat } from 'react-native-gifted-chat';

import Config from '../config/Config';

type Props = {
    name?: string,
};
class Chat extends React.Component<Props> {
  // 2.
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'stackChat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Config.shared.uid,
    };
  }
 
  componentDidMount() {
    Config.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Config.shared.off();
  }

  render() {
    // 4.
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Config.shared.send}
        user={this.user}
      />
    );
  }
}
export default Chat;