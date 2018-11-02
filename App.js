// import React from 'react';
import Main from './src/components/Main';
import Chat from './src/components/Chat';

import { createStackNavigator } from 'react-navigation';

const navigator = createStackNavigator({
  stackMain: Main,
  stackChat: Chat
});

export default navigator;