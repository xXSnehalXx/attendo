/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  TouchableHighlight
} from 'react-native';
let data = {
    rolls:[
        "15841A05J9",
        "15841A05K0",
        "15841A05K1",
    ]
}
export default class AbsentView extends Component {
    constructor(props){
        super(props);
        const {navigation}=props;
        var rolls = navigation.getParam('rolls',data.rolls);
        this.state={
            rolls:rolls,
        };
    }

  render() {
      return (
      <View style={styles.container}>
        <FlatList
            data={this.state.rolls}
            extraData={this.state} /*this shit is important for comments*/
            renderItem={({item,index}) =><EachRollCell tex={item}/>}
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
            <View style={styles.cellContainer}>
                <View style={styles.rollnumCell}><Text style={styles.text}>{this.props.tex}</Text></View>
            </View>
      </View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
  },
  EachRollCell:{
      height:54,
      backgroundColor:'white',

  },
  cellContainer:{
         flex:1,
      flexDirection:'row',
      justifyContent:'center'
  },
  rollnumCell:{
      width:200,
      margin:1,
      justifyContent:'center',
      alignItems:'center'
  },
  tickCell:{
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
