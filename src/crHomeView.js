/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Picker,
  Animated,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
const content = {
    first:['Theory','Lab'],
    second:{
        t:['1 hr','2 hr'],
        l:['B1','B2','B3'],
    },
    third:{
        t:['DWDM','CO','OS','M2','DWDM','CO'],
        l:['DWDM Lab','OS Lab','EWS Lab']
    }
};
export default class CrHome extends Component {
    constructor(props){
        super(props);
        this.child={};
        this.state={
            language:'',
            header:"Choose",
            data:['DWDM','CO','OS','M2','DWDM Lab'],
        };
        this.state.time = new Animated.Value(0);
        this.state.opacity = this.state.time.interpolate({
            inputRange:[100,200],
            outputRange:[0,1],
            extrapolate:'clamp'
        });
        this.state.bottom = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[-250,40],
            extrapolate:'clamp'
        });
    }
    animateButtonPressed = (value) => {
            v = JSON.stringify(value)
            Alert.alert(v);
            Animated.timing(this.state.time,{
                toValue:200,
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
        <View style={styles.b}>
            <View style={styles.b1}>
                <View style={styles.b1b}>
                    <View style={styles.b1b1Static}>
                        <View style={styles.b1b1b}><Text style={styles.t1}>ID</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Date</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Class</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Day</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Sem</Text></View>
                    </View>
                    <View style={styles.b1b1Dynamic}>
                    <View style={styles.b1b1b}><Text style={styles.t1}>ID</Text></View>
                    <View style={styles.b1b1b}><Text style={styles.t1}>Date</Text></View>
                    <View style={styles.b1b1b}><Text style={styles.t1}>Class</Text></View>
                    <View style={styles.b1b1b}><Text style={styles.t1}>Day</Text></View>
                    <View style={styles.b1b1b}><Text style={styles.t1}>Sem</Text></View>
                    </View>
                </View>
                <View style={styles.b1bSub} >
                    <View style={[styles.b2b1,{flex:1}]}>
                    </View>
                    <View style={[styles.b2b1,{flex:3}]} >
                        <Text style={styles.periodText}>Select subject</Text>
                        <TouchableOpacity onPress = {()=>this.animateButtonPressed(1)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.animateButtonPressed(2)} activeOpacity={1}>
                            <View style={styles.subjectBox}></View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.animateButtonPressed(3)} activeOpacity={0.5}>
                            <View style={styles.subjectBox}></View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.b2}>
                    <Text style={styles.nextButton}>Next</Text>
            </View>
            <Animated.View style={[dialogStyles.centerBox,
                {
                    opacity:this.state.opacity,
                    bottom:this.state.bottom
                }
            ]}>
                <View style={dialogStyles.dialogHeader}>
                    <TouchableOpacity onPress = {this.cancelAnimation}  activeOpacity={1}>
                        <View style={dialogStyles.cancelButton}><Text style={dialogStyles.xIcon}>X</Text></View>
                    </TouchableOpacity>
                    <View style={dialogStyles.dialogTitle}><Text style={dialogStyles.contentText}>{content.header}</Text></View>
                </View>
                <View style={dialogStyles.dialogContent}>
                    <FlatList
                    data={content.data}
                    renderItem={({item}) => <View style={dialogStyles.eachContent}><Text style={dialogStyles.contentText}>{item}</Text></View> }
                    keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Animated.View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      paddingTop:Platform.OS=="ios"?22:0,
      flex: 1,
      // backgroundColor: '#C7DEED',
  },
    b:{
        flex:1,
        // backgroundColor:'red',
        margin:2,
    },
    b1:{
        flex:3,
        // backgroundColor:'blue',
        margin:2,
        flexDirection:'row'
    },
    b2:{
        flex:1,
        // backgroundColor:'blue',
        margin:2,
        alignItems:'center'
    },
    nextButton:{
        fontSize:19,
        color:'red',
        marginTop:45
    },
    b1b:{
        flex:3,
        // backgroundColor:'red',
        margin:2,
        flexDirection:'row'
    },
    b1bSub:{
        flex:2,
        // backgroundColor:'red',
        margin:2,
    },
    b1b1Static:{
        flex:1,
        // backgroundColor:'yellow',
        margin:2
    },
    b1b1Dynamic:{
        flex:2,
        // backgroundColor:'yellow',
        margin:2
    },
    b1b1b:{
        flex:1,
        margin:2,
        // backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    t1:{
        fontSize:17,
        color:'black'
    },
    periodText:{
        fontSize:17,
        color:'black',
        marginBottom:18
    },
    b2b1:{
        margin:2,
        backgroundColor:'pink',
        flex:1,
        alignItems:'flex-end'
        // justifyContent:'space-between'
    },
    subjectBox:{
        height:37,
        width:100,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:0.8
    },
    arrow:{
        left:40,
        fontSize:Platform.OS=='ios'?20:35,
        marginTop:Platform.OS=='ios'?10:-7,
        marginBottom:Platform.OS=='ios'?8:1,
        color:'black'
    },
    //below is for the diallogLISt
});
const dialogStyles = StyleSheet.create({
    container: {
      paddingTop:Platform.OS=="ios"?22:0,
      flex: 1,
      backgroundColor:'lightblue',
      alignItems:'center',
  },
  centerBox:{
      height:250,
      width:300,
      borderRadius:5,
      borderWidth:1,
      backgroundColor:'white',
      position:'absolute',
      borderColor:'grey',
      alignSelf:'center'
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
