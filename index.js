/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/loginView.js';
import CrHome from './src/crHomeView.js'
import DialogList from './src/dialogList.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DialogList);