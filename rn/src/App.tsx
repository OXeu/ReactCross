/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme
} from 'react-native';
import './global.css';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RouteView, setComponentFactory } from '@thankrain/cross-core';
import { ContainerProvider, ImageProvider, NavigationProvider } from './provider/Provider';

setComponentFactory({
  TextView: (props) => <Text {...props} />,
  ImageView: (props) => <ImageProvider {...props} />,
  Container: (props) => <ContainerProvider {...props} />,
  createRouteView: (initialRouteName, props) => NavigationProvider(initialRouteName, props),
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <RouteView />
  );
}

export default App;
