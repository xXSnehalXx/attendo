/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

export default class AttConfView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.b1}>
            <View style={styles.b1b}>
                <View style={styles.b1bb}><Text style={styles.t1}>Date</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Period</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Class</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Presentees</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Absentees</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Check Absentees</Text></View>
            </View>
            <View style={styles.b1b}>
                <View style={styles.b1bb}><Text style={styles.t1}>20-03-19</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>DWDM</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>CSE4D</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>55</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>5</Text></View>
                <View style={styles.b1bb}><Text style={[styles.t1,{color:"lightblue"}]}>Check</Text></View>
            </View>
        </View>
        <View style={styles.b2}>
            <View style={styles.nextButton}><Text style={[styles.buttText,{color:"lightblue"}]}>Next</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop:Platform.OS=="ios"?22:0,
      flex: 1,
      backgroundColor:'white'
    },
    b1:{
        flex:5,
        // backgroundColor:'blue',
        margin:1,
        flexDirection:'row'
    },
    b2:{
        flex:2,
        // backgroundColor:'blue',
        margin:1,
        alignItems:'center',
    },
    b1b:{
        flex:1,
        // backgroundColor:'pink',
        margin:1
    },
    b1bb:{
        flex:1,
        margin:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    t1:{
        fontSize:17,
        color:'black'
    },
    nextButton:{
        // backgroundColor:'red',
        marginTop:30
    },
    buttText:{
        fontSize:20,
    }
});
