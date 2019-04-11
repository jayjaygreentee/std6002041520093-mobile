/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import App from './component/App';
import About from './component/About';


AppRegistry.registerComponent(appName, () => About);
