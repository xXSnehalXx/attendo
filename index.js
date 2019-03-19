/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/loginView.js';
import CrHome from './src/crHomeView.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CrHome);
