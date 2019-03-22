/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class FacCodeView extends Component {
    constructor(props){
        super(props);
        this.state={
            facCode:""
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.row}>
                <Text style={styles.buttText}>Faculty confirmation code</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.b1b2bb}>
                    <TextInput
                      style={{height: 35,fontSize:17}}
                      onChangeText={(text) => this.setState({facCode:text})}
                      value={this.state.facCode}
                      secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} activeOpacity={0.8}>
                <View style={styles.buttTextContainer}><Text style={[styles.buttText,{color:"blue"}]}>Cancel</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.popToTop()} activeOpacity={0.8}>
                <View style={styles.buttTextContainer}><Text style={[styles.buttText,{color:"blue"}]}>Submit</Text></View>
            </TouchableOpacity>
            </View>
            <View style={styles.row}></View>
            <View style={styles.row}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#C7DEED',
          justifyContent:'center'
      },
      box:{
          height:220,
          // backgroundColor: 'red',
      },
      row:{
          flex:1,
          // backgroundColor: 'blue',
          margin:2,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around'
      },
      buttText:{
          fontSize:20,
          color:'black'
      },
      b1b2bb:{
          height:35,
          width:100,
          backgroundColor:"white",
          borderWidth:1,
          paddingLeft:10,
          borderRadius:7
      },

});
