/**
 * @format
 */

import { AppRegistry } from 'react-native';
import ReactNativeFeatureFlags from 'react-native/Libraries/ReactNative/ReactNativeFeatureFlags';
import { name as appName } from './app.json';
import App from './src/App';

// enable the JS-side of the w3c PointerEvent implementation
ReactNativeFeatureFlags.shouldEmitW3CPointerEvents = () => true;

// enable hover events in Pressibility to be backed by the PointerEvent implementation.
// shouldEmitW3CPointerEvents should also be true
ReactNativeFeatureFlags.shouldPressibilityUseW3CPointerEventsForHover = () =>
    true;

AppRegistry.registerComponent(appName, () => App);
