/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  TouchableHighlight,
  FlatList

} from 'react-native';
const content = {
    header:"Choose",
    data:['DWDM','CO','OS','M2','DWDM Lab']
};
export default class DialogList extends Component {
    constructor(props) {
      super(props);
      this.state={};
      this.state.time = new Animated.Value(0);
      this.state.opacity = this.state.time.interpolate({
          inputRange:[0,100],
          outputRange:[0,1],
          extrapolate:'clamp'
      });
  }
  animateButtonPressed = () => {
          Animated.timing(this.state.time,{
              toValue:100,
              duration:100,
          }).start();
  }
  cancelAnimation=() => {
      Animated.timing(this.state.time,{
          toValue:0,
          duration:100,
      }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.centerBox,
            {
                opacity:this.state.opacity
            }

        ]}>
            <View style={styles.dialogHeader}>
                <TouchableHighlight onPress = {this.cancelAnimation} underlayColor={"white"} activeOpacity={1}>
                    <View style={styles.cancelButton}><Text style={styles.xIcon}>X</Text></View>
                </TouchableHighlight>
                <View style={styles.dialogTitle}><Text style={styles.contentText}>{content.header}</Text></View>
            </View>
            <View style={styles.dialogContent}>
                <FlatList
                data={content.data}
                renderItem={({item}) => <View style={styles.eachContent}><Text style={styles.contentText}>{item}</Text></View> }
                keyExtractor={(item, index) => index.toString()}

                />
            </View>
        </Animated.View>
        <TouchableHighlight onPress = {this.animateButtonPressed} underlayColor={"lightblue"} activeOpacity={0.5}>
            <View style={styles.animButton}><Text style={styles.animText}>Animate</Text></View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop:Platform.OS=="ios"?22:0,
      flex: 1,
      backgroundColor:'lightblue',
      alignItems:'center'
  },
  centerBox:{
      height:250,
      width:300,
      borderRadius:5,
      borderWidth:1,
      backgroundColor:'white',
      position:'absolute',
      bottom:40,
      borderColor:'grey'
  },
    dialogHeader:{
        height:55,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.5
    },
    dialogContent:{
        flex:1,
        // backgroundColor:'red',
    },
    dialogTitle:{
        flex:1,
        // backgroundColor:'yellow',
        margin:5,
        justifyContent:'center',
        paddingLeft:10
    },
    cancelButton:{
        height:50,
        width:50,
        // backgroundColor:'red',
        // margin:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:2
    },
    xIcon:{
        fontSize:30,
        color:'gray'
    },
    eachContent:{
        height:50,
        // backgroundColor:'yellow',
        // margin:2,
        // borderTopWidth:0.5,
        // borderBottomWidth:0.5,
        justifyContent:'center',
        paddingLeft:20
    },
    contentText:{
        fontSize:20,
        color:'gray'
    },
    animButton:{
      height:30,
      width:80,
      // backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40
    },
    animText:{
    fontSize:17
    },
});
