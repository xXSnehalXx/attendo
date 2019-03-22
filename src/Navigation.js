/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import Login from './loginView.js';
 import CrHome from './crHomeView.js'
 import AttSelView from './attendanceSelectionView.js'
 import ColView from './collectionView.js'
 import AttConfView from './attendanceConfirmView.js';
 import FacCodeView from './facCodeView.js';
 import AbsentView from './checkAbsenteesView.js'
import React , {Component} from "react";
import { View, Text ,Button , Platform ,Image,TouchableOpacity} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LoginScreen extends Component {
    static navigationOptions = {
  }
    segueToRegister = () => {
        // this.props.navigation.navigate("Register1");
        Alert.alert("BEEYAACH");

    }
    render(){
        return (<Login navigation = {this.props.navigation}/>);
    }
}

class CrHomeScreen extends Component {
    render(){
        return (<CrHome navigation = {this.props.navigation}/>);
    }
}

class AttSelViewScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
              <TouchableOpacity onPress={()=>navigation.navigate('AttConfView')} activeOpacity={1}>
                  <View style={{marginRight:20}}><Text style={{fontSize:17,color:"white"}}>Next</Text></View>
              </TouchableOpacity>
            ),
        };

};
    render(){
        return (<AttSelView navigation = {this.props.navigation}/>);
    }
}

class ColViewScreen extends Component {
    static navigationOptions = {
       headerLeft: null,
       gesturesEnabled: false,
}
    render(){
        return (<ColView navigation = {this.props.navigation}/>);
    }
}

class AttConfViewScreen extends Component {
    static navigationOptions = {

    }


  render() {
    return (<AttConfView navigation = {this.props.navigation}/>);
  }

}


class FacCodeViewScreen extends Component {
    static navigationOptions = {
       headerLeft: null,
       gesturesEnabled: false,
}
    render(){
        return (<FacCodeView navigation = {this.props.navigation}/>);
    }
}

class AbsentViewScreen extends Component {
    static navigationOptions = {
       gesturesEnabled: false,
}
    render(){
        return (<AbsentView navigation = {this.props.navigation}/>);
    }
}



const AppNavigator = createStackNavigator(
    {
        Login : {
        screen:LoginScreen
    },
        CrHome : CrHomeScreen,
        AttSelView : AttSelViewScreen,
        ColView:ColViewScreen,
        AttConfView:AttConfViewScreen,
        FacCodeView:FacCodeViewScreen,
        AbsentView:AbsentViewScreen
    },
    {
        initialRouteName : "Login",
        defaultNavigationOptions:{
            headerStyle: {
              backgroundColor: '#274690',
            },
        },
    }
)

const AppContainer = createAppContainer(AppNavigator);
export default class ATT extends Component {
  render() {
    return <AppContainer />;
  }
}
