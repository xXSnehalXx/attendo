/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList
} from 'react-native';
const data = {
    rolls:[
        "15841A05J9",
        "15841A05K0",
        "15841A05K1",
        "15841A05K2",
        "15841A05K3",
        "15841A05K4",
        "15841A05K5",
        "15841A05K6",
        "15841A05K7",
        "15841A05K8",
        "15841A05K9",
        "15841A05L0",
        "15841A05L1",
        "15841A05L2",
        "15841A05L3",
    ]
}
export default class AttSelView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={data.rolls}
            renderItem={({item}) =><EachRollCell text={item}/>}
            keyExtractor={(item,index)=>index.toString()}
            bounces={false}
        />
      </View>
    );
  }
}
class EachRollCell extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
      <View style={styles.EachRollCell}>
            <View style={styles.rollnumCell}><Text style={styles.text}>{this.props.text}</Text></View>
            <View style={styles.tickCell}><Text style={styles.tick}>✓</Text></View>
      </View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      marginTop:Platform.OS=="ios"?22:0,
      flex: 1,
      backgroundColor:'rgba(52, 52, 52,0.5)'
  },
  EachRollCell:{
      height:54,
      backgroundColor:'white',
      margin:1,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  rollnumCell:{
      width:200,
      margin:1,
      // backgroundColor:'blue',
      justifyContent:'center'
  },
  tickCell:{
      width:55,
      margin:1,
      // backgroundColor:'blue',
      marginRight:15,
      alignItems:'center',
      justifyContent:'center'
  },
  text:{
      fontSize:20,
      color:'black',
      marginLeft:16,
      opacity:Platform.OS=="ios"?0.9:0.8
  },
  tick:{
      fontSize:Platform.OS=="ios"?30:21,
      color:'#41BBD9'
  }
});
