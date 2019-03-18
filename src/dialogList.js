/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  PanResponder
} from 'react-native';
import DialogListBox from './components/dialogListBox.js';
const content = {
    header:"Choose",
    data:['DWDM','CO','OS','M2','DWDM Lab']
};
export default class DialogListTest extends Component {
    constructor(props) {
      super(props);
      this.state={};
      // this.state.time = new Animated.Value(0);
      // this.state.opacity = this.state.time.interpolate({
      //     inputRange:[100,200],
      //     outputRange:[0,1],
      //     extrapolate:'clamp'
      // });
      // this.state.marginTop = this.state.time.interpolate({
      //     inputRange:[0,100],
      //     outputRange:[3000,0],
      //     extrapolate:'clamp'
      // });

      this._objc = null;

  }
  // animateButtonPressed = () => {
  //         Animated.timing(this.state.time,{
  //             toValue:200,
  //             duration:200,
  //         }).start();
  // }
  // cancelAnimation=() => {
  //     Animated.timing(this.state.time,{
  //         toValue:0,
  //         duration:200,
  //     }).start();
  // }
  // <Animated.View style={[dialogStyles.dialogListBackground,{
  //     marginTop:this.state.marginTop,
  //     opacity:this.state.opacity
  // }
  // ]} pointerEvent={'box-none'} zIndex={1}>
  //     <View style={dialogStyles.centerBox}>
  //         <View style={dialogStyles.dialogHeader}>
  //               <TouchableHighlight onPress = {this.cancelAnimation} underlayColor={"transparent"} activeOpacity={1}>
  //                   <View style={dialogStyles.cancelButton}><Text style={dialogStyles.xIcon}>X</Text></View>
  //               </TouchableHighlight>
  //               <View style={dialogStyles.dialogTitle}><Text style={dialogStyles.contentText}>{content.header}</Text></View>
  //           </View>
  //           <View style={dialogStyles.dialogContent}>
  //               <FlatList
  //               data={content.data}
  //               renderItem={({item}) => <View style={dialogStyles.eachContent}><Text style={dialogStyles.contentText}>{item}</Text></View> }
  //               keyExtractor={(item, index) => index.toString()}
  //               />
  //           </View>
  //     </View>
  // </Animated.View>
  testButton=() => {
      this._objc.animateButtonPressed();
  }
  render() {
    return (
      <View style={dialogStyles.container} zIndex={0} >
        <DialogListBox bullRef = {(ref) => this._objc = ref}/>
        <TouchableOpacity onPress = {this.testButton} activeOpacity={0.5}>
            <View style={dialogStyles.animButton}><Text style={dialogStyles.animText}>Animate</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const dialogStyles = StyleSheet.create({
    container: {
      marginTop:Platform.OS=="ios"?22:0,
      flex: 1,
      backgroundColor:'lightblue',
      alignItems:'center'
  },
  dialogListBackground:{
      height:'100%',
      width:'100%',
      backgroundColor:'rgba(52, 52, 52,0.8)',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center'
  },
  centerBox:{
      height:250,
      width:300,
      borderRadius:5,
      borderWidth:1,
      backgroundColor:'white',
      borderColor:'grey',
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
