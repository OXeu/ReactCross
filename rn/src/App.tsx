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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {RouteView, setComponentFactory} from '@thankrain/cross-core';
import { ContainerProvider, ImageProvider, NavigationProvider } from './provider/Provider';
import { Navigate } from 'react-router-native';


setComponentFactory({
  TextView: props => <Text {...props} />,
  ImageView: props => <ImageProvider {...props} />,
  Container: props => <ContainerProvider {...props} />,
  createRouteView: (props) => NavigationProvider(props),
  Navigate: (props) => <Navigate {...props} />
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RouteView />
    </SafeAreaView>
  );
}

export default App;
