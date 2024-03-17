/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {setComponentFactory, Demo} from '@thankrain/cross-core';

setComponentFactory({
  QText: props => <Text {...props} />,
  QImage: props => <Text {...props} />,
  QBox: props => <View {...props} />,
  QColumn: props => <View {...props} />,
  QRow: props => <View {...props} />,
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Demo />
    </SafeAreaView>
  );
}

export default App;
