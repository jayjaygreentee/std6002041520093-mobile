/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//import App from './App';
import {name as appName} from './app.json';
import App from './component/App';
import About from './component/About';
import Login from './component/login.js';

const MainNavigator = createStackNavigator({
    Home: {screen: Login},
    Profile: {screen: About},
  });
  
  const App = createAppContainer(MainNavigator);


AppRegistry.registerComponent(appName, () => App);
