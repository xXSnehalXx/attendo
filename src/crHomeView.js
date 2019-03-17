/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Picker
} from 'react-native';

export default class CrHome extends Component {
    constructor(props){
        super(props);
        this.state={
            language:''
        }
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
                <View style={styles.b1bSub}>
                    <View style={[styles.b2b1,{flex:1}]}>
                    </View>
                    <View style={[styles.b2b1,{flex:2}]}>
                        <Text style={styles.periodText}>Select subject</Text>
                        <View style={styles.subjectBox}>
                            
                        </View>
                        <Text style={styles.arrow}>↓</Text>
                        <View style={styles.subjectBox}></View>
                        <Text style={styles.arrow}>↓</Text>
                        <View style={styles.subjectBox}></View>
                    </View>

                </View>
            </View>
            <View style={styles.b2}>
                <Text style={styles.nextButton}>Next</Text>
            </View>
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
        // backgroundColor:'pink',
        flex:1,
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
    }
});
