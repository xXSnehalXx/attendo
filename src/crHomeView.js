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
import DialogListBox from './components/dialogListBox.js';
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
            sub1:"",
            sub2:"",
            sub3:""
        };
        this._objc = null;

    }
    setSubjectForSubBox=(boxNum,subText) => {
        this.setState({
           ['sub'+boxNum]:subText
        });
    }
    subBoxesPressed = (boxNum) => {
        var data = {
            dTitle:'Choose',
            dData:['Theory','Lab']
        };
        this._objc.animateButtonPressed(data,boxNum);
    }
  render() {
    return (
      <View style={styles.container}>
      <DialogListBox bullRef = {(ref) => this._objc = ref} setSub = {this.setSubjectForSubBox} />
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
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(1)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub1}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(2)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub2}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(3)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub3}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.b2} >
            <TouchableOpacity onPress = {()=>alert('nextPressed')} activeOpacity={1}>
                    <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      marginTop:Platform.OS=="ios"?22:0,
      flex: 1,
      // backgroundColor: '#C7DEED',
      zIndex:1
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
        // backgroundColor:'pink',
        flex:1,
        alignItems:'flex-start'
        // justifyContent:'space-between'
    },
    subjectBox:{
        height:37,
        width:110,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth:0.8,
        justifyContent:'center',
        alignItems:'center'
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
